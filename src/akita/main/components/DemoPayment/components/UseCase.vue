<template>
  <div class="use-case">
    <div class="row centered">
      <div class="box">
        <div class="wallet">
          <h3>User Wallet</h3>
          <p class="balance">{{ this.user_balance }}</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="box">
        <OrderButton
          v-if="!order_headphone_active"
          class="button"
          @ordered="ordered"
          name="headphone"
          :amount="0"
        >Buy Headphone</OrderButton>
        <Lottie v-else :options="defaultOptions" :height="50" />
      </div>
      <div class="box">
        <OrderButton
          v-if="!order_laptop_active"
          class="button"
          @ordered="ordered"
          name="laptop"
          :amount="1"
        >Buy Laptop</OrderButton>
        <Lottie v-else :options="defaultOptions" :height="50" />
      </div>
    </div>
    <div class="row">
      <div class="box">
        <Machine name="Robot 1" />
      </div>
      <div class="box">
        <Machine name="Robot 2" />
      </div>
    </div>
    <div class="row">
      <div class="box hidden">
        <Lottie :options="defaultOptions" :height="75" />
      </div>
      <div class="box hidden">
        <Lottie :options="defaultOptions2" :height="75" />
      </div>
    </div>
    <div class="row">
      <div class="box">
        <Machine name="Provider 1" />
      </div>
      <div class="box">
        <Machine name="Provider 2" />
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import Machine from "./Machine.vue";
import OrderButton from "./OrderButton.vue";

import * as animationData from "@/assets/energy.json";
import * as animationData2 from "@/assets/data.json";


import { composeAPI } from "@iota/core";
import generateSeed from "@/utils/generateSeed.js";

const iota = composeAPI({
  provider: "https://nodes.devnet.thetangle.org:443"
});

const axios = require("axios");

export default {
  components: {
    Lottie,
    Machine,
    OrderButton
  },
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      defaultOptions2: { animationData: animationData2.default },
      order_laptop_active: false,
      order_headphone_active: false,
      user_balance: 0
    };
  },
  methods: {
    ordered(object) {
      console.log("object", object);
      if (object.name == "headphone") {
        this.order_headphone_active = true;
      } else if (object.name == "laptop") {
        this.order_laptop_active = true;
      }
    },
   
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
      this.createNewAddress();
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    opacity: 1;
    padding: 15px 20px;
    &.hidden {
      opacity: 1;
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
    height: 75px;
    text-align: center;

    h3 {
      font-size: 1em;
      color: var(--akita-light);
    }

    .balance {
      color: var(--akita-light);
    }
  }
}
</style>