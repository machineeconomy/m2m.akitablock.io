<template>
  <div class="use-case">
    <modal
      :show.sync="order_result_modal"
      gradient="success"
      modal-classes="modal-dialog-centered text-white"
    >
      <h6
        slot="header"
        class="modal-title text-white"
        id="modal-title-notification"
      >Your product was finished!</h6>

      <div class="py-3 text-center">
        <i class="ni ni-bell-55 ni-3x"></i>
        <h4 class="heading mt-4 text-white">Product is ready!</h4>
        <p>You can see your product on the tangle:</p>
        <a
          v-if="product_tx"
          target="_blank"
          :href="`https://www.thetangle.org/transaction/${product_tx}`"
        >
          Watch
          <strong>Product Order</strong> on the Tangle.org
        </a>
        <pulse-loader v-else :loading="true" color="#FFFFFF" size="5px"></pulse-loader>
        <br />
        <a
          v-if="energy_tx"
          target="_blank"
          :href="`https://www.thetangle.org/transaction/${energy_tx}`"
        >
          Watch
          <strong>Energy Order</strong> on the Tangle.org
        </a>
        <pulse-loader v-else :loading="true" color="#FFFFFF" size="5px"></pulse-loader>
      </div>
    </modal>
    <div class="row centered">
      <div v-if="no_balance" class="alert alert-warning" role="alert">
        <strong>Warning!</strong> The wallet has not enough balance, reload the page to fill the wallet.
      </div>
      <div class="box wide">
        <div class="wallet">
          <div class="wrapper">
            <img src="@/assets/img/business_woman.png" />
          </div>
          <div class="wallet-info">
            <h3>User Wallet</h3>
            <p class="balance">{{ this.user_balance }}</p>
            <p>Balance</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="box animation" :class="{hidden: order_laptop_active}">
        <OrderButton
          v-if="!r1_iota_animation"
          class="button"
          @ordered="ordered"
          name="headphone"
          :amount="100"
          :disabled="order_laptop_active || order_headphone_active"
        >Buy Headphone (100)</OrderButton>
        <Lottie v-else class="animation" :options="animationIOTAOptions" :height="150" />
      </div>
      <div class="box animation">
        <OrderButton
          v-if="!r2_iota_animation"
          class="button"
          @ordered="ordered"
          name="laptop"
          :amount="1000"
          :disabled="order_laptop_active || order_headphone_active"
        >Buy Laptop (1000)</OrderButton>
        <Lottie v-else class="animation" :options="animationIOTAOptions" :height="150" />
      </div>
    </div>
    <div class="row">
      <div class="box">
        <Machine name="Robot 1" :balance="$store.getters.robot1_balance" />
      </div>
      <div class="box">
        <Machine name="Robot 2" :balance="$store.getters.robot2_balance" />
      </div>
    </div>
    <div class="row">
      <div class="box animation">
        <Lottie
          class="animation"
          v-if="p1_iota_animation"
          :options="animationIOTAOptions"
          :height="150"
        />
        <Lottie
          class="animation"
          v-if="p1_energy_animation"
          :options="animationEnergyOptions"
          :height="150"
        />
      </div>
      <div class="box animation">
        <Lottie
          class="animation"
          v-if="p2_iota_animation"
          :options="animationIOTAOptions"
          :height="150"
        />
        <Lottie
          class="animation"
          v-if="p2_energy_animation"
          :options="animationEnergyOptions"
          :height="150"
        />
      </div>
    </div>
    <div class="row">
      <div class="box">
        <Machine name="Energy Wind" :balance="$store.getters.provider1_balance" />
      </div>
      <div class="box">
        <Machine name="Energy Solar" :balance="$store.getters.provider2_balance" />
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import Machine from "./Machine.vue";
import OrderButton from "./OrderButton.vue";

import * as animationEnergy from "@/assets/energy.json";
import * as animationIOTA from "@/assets/data.json";

const Converter = require("@iota/converter");

import { composeAPI } from "@iota/core";
import generateSeed from "@/utils/generateSeed.js";

const iota = composeAPI({
  provider: "https://nodes.thetangle.org:443"
});

import Modal from "@/components/Modal.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const axios = require("axios");

const TIMEOUT = 5000;

export default {
  components: {
    Lottie,
    Machine,
    OrderButton,
    Modal,
    PulseLoader
  },
  data() {
    return {
      animationIOTAOptions: { animationData: animationIOTA.default },
      animationEnergyOptions: { animationData: animationEnergy.default },
      order_laptop_active: false,
      order_headphone_active: false,
      r1_iota_animation: false,
      r2_iota_animation: false,
      p1_iota_animation: false,
      p2_iota_animation: false,
      p1_energy_animation: false,
      p2_energy_animation: false,
      user_balance: 10000,
      order_result_modal: false,
      product_tx: null,
      energy_tx: null,
      no_balance: false
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    ordered(object) {
      let self = this;
      console.log("object", object);

      if (this.user_balance < object.amount) {
        console.log("not enouth balance");
        this.no_balance = true;
        return;
      }

      let data = {
        buyer: "human",
        seller: object.type == "headphone" ? "robot1" : "robot2",
        purchaseItem: object.type,
        price: object.amount,
        ordered_at: Date.now()
      };

      this.sendTransaction(data, "product");
      if (object.type == "headphone") {
        this.order_headphone_active = true;
        this.r1_iota_animation = true;
        this.user_balance = this.user_balance - object.amount;
        setTimeout(function() {
          self.$store.commit("IncreaseBalanceRobot1", object.amount - 10);
          self.r1_iota_animation = false;
          self.payProvider("provider1", 10);
        }, TIMEOUT);
      } else if (object.type == "laptop") {
        this.order_laptop_active = true;
        this.r2_iota_animation = true;
        this.user_balance = this.user_balance - object.amount;
        setTimeout(function() {
          self.$store.commit("IncreaseBalanceRobot2", object.amount - 100);
          self.r2_iota_animation = false;
          self.payProvider("provider2", 100);
        }, TIMEOUT);
      }
    },
    payProvider(provider, amount) {
      console.log("payout provider: ", provider);
      let self = this;

      if (provider == "provider1") {
        console.log("Transver iota to provider1");
        // order energy from provider
        this.p1_iota_animation = true;
        let self = this;
        setTimeout(function() {
          self.p1_iota_animation = false;
          self.$store.commit("IncreaseBalanceProvider1", amount);
          self.provideEnery(provider, "robot1", 10);
        }, TIMEOUT);
      } else if (provider == "provider2") {
        console.log("Transver iota to provider2");
        // order energy from provider
        this.p2_iota_animation = true;
        let self = this;
        setTimeout(function() {
          self.p2_iota_animation = false;
          self.$store.commit("IncreaseBalanceProvider2", amount);
          self.provideEnery(provider, "robot2", 100);
        }, TIMEOUT);
      }
    },
    provideEnery(provider, robot, amount) {
      let data = {
        buyer: robot,
        seller: provider,
        purchaseItem: "energy",
        price: amount,
        ordered_at: Date.now()
      };
      console.log("provide energy to: ", robot);
      let self = this;
      this.sendTransaction(data, "energy");
      if (robot == "robot1") {
        this.$nextTick(() => {
          this.p1_energy_animation = true;
        });
        setTimeout(function() {
          self.p1_energy_animation = false;
          self.order_headphone_active = false;
          self.order_result_modal = true;
        }, TIMEOUT);
      } else if (robot == "robot2") {
        this.$nextTick(() => {
          this.p2_energy_animation = true;
        });
        setTimeout(function() {
          self.p2_energy_animation = false;
          self.order_laptop_active = false;
          self.order_result_modal = true;
        }, TIMEOUT);
      }
    },
    sendTransaction(data, type) {
      // Array of transfers which defines transfer recipients and value transferred in IOTAs.
      const transfers = [
        {
          address: generateSeed(), //generate random new address
          value: 0,
          tag: "AKITAMACHINETOMACHINE", // optional tag of `0-27` trytes
          message: Converter.asciiToTrytes(JSON.stringify(data)) // optional message in trytes
        }
      ];

      // Depth or how far to go for tip selection entry point.
      const depth = 3;

      // Difficulty of Proof-of-Work required to attach transaction to tangle.
      // Minimum value on mainnet is `14`, `7` on spamnet and `9` on devnet and other testnets.
      const minWeightMagnitude = 14;

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
          console.log("bundle[0].hash", bundle[0].hash);
          if (type == "product") {
            this.product_tx = bundle[0].hash;
          } else if (type == "energy") {
            this.energy_tx = bundle[0].hash;
          }
          console.log(`Bundle: ${bundle}`);
        })
        .catch(err => {
          // handle errors here
        });
    }
  },
  created() {
    // Fetch seed from local storage
    this.seed = localStorage.getItem("seed");
    this.address = localStorage.getItem("address");
    if (!this.seed || !this.address) {
      // create new seed
      this.seed = generateSeed();
      // set seed to local storage
      this.seed = localStorage.setItem("seed", this.seed);
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  margin: 0;

  display: flex;

  &.centered {
    justify-content: center;
  }

  .box {
    font-family: ocr-b-std, monospace;
    font-style: normal;
    font-weight: 400;

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    opacity: 1;
    padding: 0 20px;
    h3 {
      font-size: 1em;
      color: var(--akita-light);
    }
    &.wide {
      width: 100%;
    }
    &.hidden {
      opacity: 0;
    }
    &.animation {
      height: 150px;
    }
  }

  .wallet {
    background: linear-gradient(
      to bottom right,
      var(--akita-primary) 50%,
      var(--akita-secondary) 85%
    );
    border-radius: 10px;
    padding: 15px 20px;
    width: 100%;
    height: 110px;
    text-align: left;

    .wrapper {
      float: left;
      width: 25%;
      img {
        position: relative;
        right: 50px;
        bottom: 20px;
        width: 150px;
      }
    }

    &-info {
      font h3 {
        font-size: 1em;
        color: var(--akita-light);
      }

      .balance {
        color: var(--akita-light);
        font-weight: 700;
      }

      p {
        color: var(--akita-light);
        margin-bottom: 0;
      }
    }
  }
}

.animation {
  margin: -18px 0 !important;
}

.modal-content {
  a {
    color: var(--primary);
    font-weight: bold;
    &:hover {
      color: var(--akita-secondary);
    }
  }
}
</style>