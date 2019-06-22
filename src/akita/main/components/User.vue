<template>
  <div class="user">
    <div class="user_wallet">
      <h3>user browser wallet</h3>
      <p class="balance">{{balance}}i</p>
      <p>Balance</p>
    </div>
    <div class="user_wallet__conent" v-if="!balance">
      <div v-if="!waitForTokens">
        <p>Your browser wallet don't have any IOTA tokens on it.</p>
        <p>Send IOTA devnet tokens with our IOTA Devnet Faucet. Just click this button below and wait for the IOTA tokens.</p>
        <p>
          <strong>Note: This could take a while</strong>
        </p>
        <base-button
          type="success"
          v-on:click="callFaucet"
        >Get IOTA Devnet Tokens</base-button>
      </div>
      <div v-else>
        <p>Loading...</p>
        <p>
          Watch address on
          <a :href="`https://devnet.thetangle.org/address/${address}`" target="_blank">theThangle.org</a>.
        </p>
        <p>
          <strong>Don't refresh this page - it will show the balance automatically</strong>
        </p>
      </div>
    </div>
    <div class="user_wallet__conent" v-else>
      <base-button v-on:click="orderHeadphone">Buy Headphone</base-button>
      <base-button v-on:click="orderLaptop">Buy Laptop</base-button>
      <div v-if="orders" class="orders">
        <p v-for="(order, index) in orders" :key="index">
          <a
            target="_blank"
            :href="`https://devnet.thetangle.org/transaction/${order}`"
          >Order {{index}}</a>
        </p>
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
      orders: [],
      waitForTokens: false
    };
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
    callFaucet() {
      let self = this;
      this.waitForTokens = true;
      axios
        .post("http://localhost:5000/send_tokens?address=" + this.address, {})
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
    startBalanceChecker() {
      this.checkBalanceInterval = setInterval(
        function() {
          // Check the iota balance
          iota
            .getBalances([this.address], 100)
            .then(({ balances }) => {
              this.balance = balances[0];
              if (this.balance > 0) {
                this.waitForTokens = false;
                clearInterval(this.checkBalanceInterval);
              }
            })
            .catch(err => {
              console.log("getBalances got an error: ", err);
            });
        }.bind(this),
        1000
      );
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
          this.orders.push(bundle[0].hash);
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
    &__conent {
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
