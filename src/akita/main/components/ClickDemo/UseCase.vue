<template>
  <div class="usecase">
    <modal
      :show.sync="order_result_modal"
      gradient="primary"
      modal-classes="modal-danger modal-dialog-centered"
    >
      <h6 slot="header" class="modal-title" id="modal-title-notification">Your product was finished!</h6>

      <div class="py-3 text-center">
        <i class="ni ni-bell-55 ni-3x"></i>
        <h4 class="heading mt-4">Product is ready!</h4>
        <p>You can see your product on the tangle:</p>
        <a target="_blank" :href="`https://devnet.thetangle.org/transaction/${order_tx}`">Watch on the Tangle.org</a>
      </div>

      <template slot="footer">
        <base-button type="white" @click="order_result_modal = false">Buy another product!</base-button>
        <base-button
          type="link"
          text-color="white"
          class="ml-auto"
          @click="order_result_modal = false"
        >Close</base-button>
      </template>
    </modal>
    <div class="wallets">
      <UserWallet :balance="user_balance" @ordered="ordered" v-on:newActivity="addActivity" />
      <div class="machines">
        <div class="machines_park">
          <img
            :class="{'active': active_transfer_headphone}"
            class="transfer_anim transfer_anim__top"
            src="../../../../assets/img/value_transfer_anim_machine.gif"
            alt
          />
          <Machine :balance="machine_1_balance" name="Robot1" v-on:newActivity="addActivity" />
          <img
            :class="{'active': active_transfer_headphone}"
            class="transfer_provider_anim transfer_provider_anim__top"
            src="../../../../assets/img/value_transfer_anim_provider.gif"
            alt
          />
          <Machine
            :balance="provider_1_balance"
            class="provider"
            name="EnergyWind"
            v-on:newActivity="addActivity"
          />
        </div>
        <div class="machines_park">
          <img
            :class="{'active': active_transfer_laptop}"
            class="transfer_anim transfer_anim__bottom"
            src="../../../../assets/img/value_transfer_anim_machine.gif"
            alt
          />
          <Machine :balance="machine_2_balance" name="Robot2" v-on:newActivity="addActivity" />
          <img
            :class="{'active': active_transfer_laptop}"
            class="transfer_provider_anim transfer_provider_anim__bottom"
            src="../../../../assets/img/value_transfer_anim_provider.gif"
            alt
          />
          <Machine
            :balance="provider_2_balance"
            class="provider"
            name="EnergySolar"
            v-on:newActivity="addActivity"
          />
        </div>
      </div>
    </div>
    <Activities :activities="activities" />
  </div>
</template>


<script>
import UserWallet from "./UserWallet.vue";
import Machine from "./Machine.vue";
import Activities from "../Activities.vue";
import { setTimeout } from "timers";
import Modal from "@/components/Modal.vue";

import { composeAPI } from "@iota/core";
import generateSeed from "@/utils/generateSeed.js";

const iota = composeAPI({
  provider: "https://nodes.devnet.thetangle.org:443"
});

const Converter = require('@iota/converter')

export default {
  name: "UseCase",
  components: { UserWallet, Machine, Activities, Modal },
  data() {
    return {
      user_balance: 10000,
      machine_1_balance: 0,
      provider_1_balance: 0,
      machine_2_balance: 0,
      provider_2_balance: 0,
      active_transfer_headphone: false,
      active_transfer_laptop: false,
      order_result_modal: false,
      order_tx: "",
      activities: [
        {
          message: "Machines connecting...",
          timestamp: Date.now()
        }
      ]
    };
  },

  methods: {
    addActivity(activity) {
      this.activities.push(activity);
      let container = this.$el.querySelector("#logger");
    },
    ordered(order) {
      // show transfer animation
      if (order.name == "Headphone") {
        this.active_transfer_headphone = true;
        let self = this;
        setTimeout(function() {
          self.active_transfer_headphone = false;
          self.user_balance = self.user_balance - order.amount;
          self.machine_1_balance = self.machine_1_balance + order.amount - 10;
          self.provider_1_balance = self.provider_1_balance + 10;
          let data = {
            name: "Headphone",
            price: 1000,
            ordered_at: Date.now()
          };
          self.sendTransaction(data);
          // Headphone ordered
        }, 5000);
      } else if (order.name == "Laptop") {
        this.active_transfer_laptop = true;
        let self = this;
        setTimeout(function() {
          self.active_transfer_laptop = false;
          self.user_balance = self.user_balance - order.amount;
          self.machine_2_balance = self.machine_2_balance + order.amount - 100;
          self.provider_2_balance = self.provider_2_balance + 100;
          let data = {
            name: "Laptop",
            price: 1000,
            ordered_at: Date.now()
          };
          self.sendTransaction(data);
          // laptop ordered
        }, 5000);
      }
    },
    sendTransaction(data) {

      // Array of transfers which defines transfer recipients and value transferred in IOTAs.
      const transfers = [
        {
          address: generateSeed(),
          value: 0, // 1Ki
          tag: "AKITAMACHINETOMACHINE", // optional tag of `0-27` trytes
          message: Converter.asciiToTrytes(JSON.stringify(data)) // optional message in trytes
        }
      ];

      // Depth or how far to go for tip selection entry point.
      const depth = 3;

      // Difficulty of Proof-of-Work required to attach transaction to tangle.
      // Minimum value on mainnet is `14`, `7` on spamnet and `9` on devnet and other testnets.
      const minWeightMagnitude = 9;

      // Prepare a bundle and signs it.
      iota
        .prepareTransfers(generateSeed(), transfers)
        .then(trytes => {
          // Persist trytes locally before sending to network.
          // This allows for reattachments and prevents key reuse if trytes can't
          // be recovered by querying the network after broadcasting.

          // Does tip selection, attaches to tangle by doing PoW and broadcasts.
          return iota.sendTrytes(trytes, depth, minWeightMagnitude);
        })
        .then(bundle => {
          console.log(
            `Published transaction with tail hash: ${bundle[0].hash}`
          );
          this.order_tx = bundle[0].hash;
          this.order_result_modal = true
          console.log(`Bundle: ${bundle}`);
        })
        .catch(err => {
          // handle errors here
        });
    }
  }
};
</script>


<style lang="scss" scoped>
.usecase {
  margin: 0 auto;
  .wallets {
    display: flex;
    .machines {
      .machines_park {
        padding: 10px 40px;
        display: flex;
        align-items: left;
        .provider {
          right: 400px;
        }
      }
    }
  }
}

.transfer_anim {
  height: 20%;
  width: 20%;
  position: relative;
  visibility: hidden;
  &__top {
    top: 200px;
    right: 60px;
  }
  &__bottom {
    top: 60px;
    right: 60px;
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
  }
}
.transfer_provider_anim {
  height: 15%;
  width: 15%;
  position: relative;
  visibility: hidden;
  &__top {
    top: 130px;
    right: 240px;
  }
  &__bottom {
    top: 130px;
    right: 240px;
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
  }
}
.active {
  visibility: visible;
}

.modal {
  a {
    color: #efefef;
    &:hover {
      color: #fff;
    }
  }
}
@media (max-width: 900px) {
  .usecase {
    display: flex;
    flex-direction: column;

    .user {
      width: 100%;
    }

    .machines {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .machines_park {
        display: flex;
        flex-direction: column;
        padding: 0px;
        img {
          display: none;
        }
        .provider {
          right: 0px;
        }
      }
    }
  }
}
</style>
