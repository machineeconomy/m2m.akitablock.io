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
    </div>
  </div>
</template>

<script>
import { composeAPI } from "@iota/core";
import generateSeed from "@/utils/generateSeed.js";

const iota = composeAPI({
  provider: "https://nodes.devnet.thetangle.org:443"
});

export default {
  name: "User",
  data() {
    return {
      balance: 0,
      seed: "",
      address: ""
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
