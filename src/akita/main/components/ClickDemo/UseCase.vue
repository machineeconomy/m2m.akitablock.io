<template>
  <div class="usecase">
    <div class="wallets">
      <UserWallet :balance="user_balance" @ordered="ordered" v-on:newActivity="addActivity"/>
      <div class="machines">
        <div class="machines_park">
          <img
            :class="{'active': active_transfer_headphone}"
            class="transfer_anim transfer_anim__top"
            src="../../../../assets/img/value_transfer_anim_machine.gif"
            alt
          >
          <Machine :balance="machine_1_balance" name="Robot1" v-on:newActivity="addActivity"/>
          <img
            :class="{'active': active_transfer_headphone}"
            class="transfer_provider_anim transfer_provider_anim__top"
            src="../../../../assets/img/value_transfer_anim_provider.gif"
            alt
          >
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
          >
          <Machine :balance="machine_2_balance" name="Robot2" v-on:newActivity="addActivity"/>
          <img
            :class="{'active': active_transfer_laptop}"
            class="transfer_provider_anim transfer_provider_anim__bottom"
            src="../../../../assets/img/value_transfer_anim_provider.gif"
            alt
          >
          <Machine
            :balance="provider_2_balance"
            class="provider"
            name="EnergySolar"
            v-on:newActivity="addActivity"
          />
        </div>
      </div>
    </div>
    <Activities :activities="activities"/>
  </div>
</template>


<script>
import UserWallet from "./UserWallet.vue";
import Machine from "./Machine.vue";
import Activities from "../Activities.vue";
import { setTimeout } from "timers";

export default {
  name: "UseCase",
  components: { UserWallet, Machine, Activities },
  data() {
    return {
      user_balance: 10000,
      machine_1_balance: 0,
      provider_1_balance: 0,
      machine_2_balance: 0,
      provider_2_balance: 0,
      active_transfer_headphone: false,
      active_transfer_laptop: false,
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
        }, 5000);
      } else if (order.name == "Laptop") {
        this.active_transfer_laptop = true;
        let self = this;
        setTimeout(function() {
          self.active_transfer_laptop = false;
          self.user_balance = self.user_balance - order.amount;
          self.machine_2_balance = self.machine_2_balance + order.amount - 100;
          self.provider_2_balance = self.provider_2_balance + 100;
        }, 5000);
      }
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
