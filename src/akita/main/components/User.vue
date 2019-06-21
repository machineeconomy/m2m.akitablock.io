<template>
  <div class="user">
    <div class="user_wallet">
      <h3>user wallet</h3>
      <p class="balance">{{balance}}i</p>
      <p>Balance</p>
    </div>
    <div class="user_wallet__empty" v-show="!balance">
      <button v-on:click="fetchBalance" class="btn btn-primary">Refresh balance</button>
      <p>Your browser wallet don't have any IOTA tokens on it.</p>
      <p>
        Send IOTA devnet tokens with
        <a href="https://faucet.devnet.iota.org/">the devnet faucet</a> to this address:
      </p>
      <p>
        <span class="address">{{address}}</span>
      </p>
      <base-button v-on:click="orderHeadphone">Buy Headphone</base-button>
      <base-button v-on:click="orderLaptop">Buy Laptop</base-button>
      <div v-if="orders" class="orders">
        <p v-for="(order, index) in orders" :key="index"><a target="_blank" :href="`https://devnet.thetangle.org/transaction/${order}`">Order {{index}}</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import { composeAPI } from "@iota/core";
import generateSeed from "@/utils/generateSeed.js";

import BaseBUtton from "@/components/BaseButton.vue";

const iota = composeAPI({
  provider: "https://nodes.devnet.thetangle.org:443"
});
const axios = require("axios");

export default {
  name: "User",
  data() {
    return {
      balance: 0,
      seed: "",
      address: "",
      orders: []
    };
  },
  created() {
    // Fetch seed from local storage
    this.seed = localStorage.getItem("seed");
    if (!this.seed) {
      // create new seed
      this.seed = generateSeed();
      // set seed to local storage
      this.seed = localStorage.setItem("seed", this.seed);
    }
    this.getAddress();
  },
  methods: {
    fetchBalance() {
      iota
        .getBalances([this.address], 100)
        .then(({ balances }) => {
          this.balance = balances[0];
        })
        .catch(err => {
          console.log("error fetching balance, err");
        });
    },
    getAddress() {
      iota
        .getNewAddress(localStorage.getItem("seed"), { index: 0 })
        .then(address => {
          this.address = address;
          this.fetchBalance();
        })
        .catch(err => {
          console.log("Error on 'getNewAddress'", err);
        });
    },
    orderHeadphone() {
      let self = this;
      axios
        .post("http://localhost:3001/orders/", {})
        .then(function(response) {
          console.log(response);
          if (response.status == 200) {
            self.transferIOTA(100, response.data);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    orderLaptop() {
      let self = this;
      axios
        .post("http://localhost:3003/orders/", {})
        .then(function(response) {
          console.log(response);
          if (response.status == 200) {
            self.transferIOTA(1000, response.data);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    transferIOTA(amount, address) {
      console.log(`send ${amount} iota to ${address}.`);
      // Array of transfers which defines transfer recipients and value transferred in IOTAs.
      const transfers = [
        {
          address: address,
          value: 0, // 1Ki
          tag: "AKITA9MACHINE", // optional tag of `0-27` trytes
          message: "" // optional message in trytes
        }
      ];

      // Depth or how far to go for tip selection entry point.
      const depth = 3;

      // Difficulty of Proof-of-Work required to attach transaction to tangle.
      // Minimum value on mainnet is `14`, `7` on spamnet and `9` on devnet and other testnets.
      const minWeightMagnitude = 9;

      // Prepare a bundle and signs it.
      iota
        .prepareTransfers(this.seed, transfers)
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
          console.log(`Bundle: ${bundle}`);
          this.orders.push(bundle[0].hash)
        })
        .catch(err => {
          // handle errors here
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.user {
  padding: 10px 20px;
  width: 30%;
  h3 {
    color: white;
  }
  .user_wallet {
    text-align: center;
    border-radius: 20px;
    padding: 20px;
    background: linear-gradient(
      to top right,
      #5f46b1 0%,
      #7d41af 50%,
      #ff2ea0 100%
    );
    p {
      color: white;
      margin: 0;
    }
    .balance {
      margin: 0;
      font-size: 3em;
    }
    &__empty {
      border-radius: 20px;
      background-color: #efefef;
      padding: 20px;
      text-align: center;
      p {
        color: black;
        margin: 0;
        word-wrap: break-word;
      }
    }
  }
}
</style>
