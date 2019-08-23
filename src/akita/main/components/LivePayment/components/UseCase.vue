<template>
  <div class="use-case">
    <div class="row centered">
      <div class="box">
        <base-button v-on:click="callFaucet">Get Tokens</base-button>
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
          :url="robot_1_url"
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
          :url="robot_2_url"
          :amount="1"
        >Buy Laptop</OrderButton>
        <Lottie v-else :options="defaultOptions" :height="50" />
      </div>
    </div>
    <div class="row">
      <div class="box">
        <Machine :url="robot_1_url" name="Robot 1" />
      </div>
      <div class="box">
        <!--<Machine :url="robot_2_url" name="Robot 2" />-->
      </div>
    </div>
    <div class="row">
      <div class="box hidden">
        <Lottie :options="defaultOptions" :height="50" />
      </div>
      <div class="box hidden">
        <Lottie :options="defaultOptions" :height="50" />
      </div>
    </div>
    <div class="row">
      <div class="box">
        <!--<Machine :url="provider_1_url" name="Provider 1" />-->
      </div>
      <div class="box">
        <!--<Machine :url="provider_2_url" name="Provider 2" />-->
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import Machine from "./Machine.vue";
import OrderButton from "./OrderButton.vue";

import * as animationData from "@/assets/8711-scroll-down-hint.json";


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
      robot_1_url: "http://localhost:3001",
      robot_2_url: "http://localhost:3002",
      provider_1_url: "http://localhost:3003",
      provider_2_url: "http://localhost:3004",
      defaultOptions: { animationData: animationData.default },
      order_laptop_active: false,
      order_headphone_active: false,
      user_balance: 0
    };
  },
  methods: {
    ordered(object) {
      console.log("object", object);
      if (object.name == "headphone") {
        this.order_headphone_active = false;
      } else if (object.name == "laptop") {
        this.order_laptop_active = false;
      }
    },
    callFaucet() {
      console.log("callFaucet");
        let self = this;
      this.waitForTokens = true;
      self.$emit("newActivity", {
        message: "User requested for tokens.",
        timestamp: Date.now()
      });
      axios
        .post(
          "http://localhost:5000/send_tokens?address=" +
            this.address,
          {}
        )
        .then(function(response) {
          if (response.status == 200) {
            console.log(
              "devnet faucet sent stokens to this address: ",
              self.address
            );

            // check for balance
            self.startBalanceChecker();
          } else {
            console.log("something went wrong.");
            console.log("Error response: ", response);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    createNewAddress() {
      iota
        .getNewAddress(localStorage.getItem("seed"), { index: 0 })
        .then(address => {
          localStorage.setItem("address", address);
          this.address = address;
        })
        .catch(err => {
          console.log("Error on 'getNewAddress'", err);
        });
    },
    fetchBalance() {
      console.log("fetch balance", this.address);
      iota
        .getBalances([this.address], 100)
        .then(({ balances }) => {
          this.user_balance = balances[0];
        })
        .catch(err => {
          console.log("error fetching balance, err");
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
      this.createNewAddress();
    }
    this.fetchBalance();
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