<template>
  <div class="user">
    <div class="user_wallet">
      <h3>Your wallet</h3>
      <p class="balance">{{balance}}</p>
      <p>Balance</p>
    </div>
    <div class="user_wallet__conent" v-if="!balance">
      <div v-if="!waitForTokens">
        <p>Your browser wallet don't have any IOTA tokens on it.</p>
        <p>Send IOTA devnet tokens with our IOTA Devnet Faucet. Just click this button below and wait for the IOTA tokens.</p>
        <p>
          <strong>Note: This could take a while</strong>
        </p>
        <base-button class="button" v-on:click="callFaucet">Get Tokens</base-button>
      </div>
      <div v-else>
        <pulse-loader :loading="true" color="#5f46b1" size="5px"></pulse-loader>
        <h5>Loading...</h5>
        <p>
          Watch address on
          <a
            :href="`https://devnet.thetangle.org/address/${address}`"
            target="_blank"
          >theThangle.org</a>.
        </p>
        <p>
          <strong>Don't refresh this page - it will show the balance automatically</strong>
        </p>
      </div>
    </div>
    <div class="user_wallet__conent" v-else>
      <h4>Order a Product</h4>
      <base-button>Buy Headphone (100)</base-button>
      <p>or</p>
      <base-button>Buy Laptop (1000)</base-button>
      <div v-if="orders" class="orders">
        <p v-for="(order, index) in orders" :key="index">
          <a
            target="_blank"
            :href="`https://devnet.thetangle.org/transaction/${order}`"
          >Order {{index}}</a>
        </p>
      </div>
    </div>
    <img
      class="business_woman"
      src="../../../../assets/img/business_woman.png"
      alt="business_woman"
    >
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "User",
  components: { PulseLoader },
  data() {
    return {
      balance: 10000,
      orders: []
    };
  },
  methods: {
    ordered(order) {
      console.log("type", order);
      // TODO: save the order object to the history
    }
  }
};
</script>

<style lang="scss" scoped>
.user {
  padding: 10px 20px;
  width: 20%;
  max-height: 500px;
  max-width: 300px;
  h3 {
    color: white;
  }
  .user_wallet {
    text-align: center;
    border-radius: 20px;
    padding: 20px;
    background: linear-gradient(
      to top left,
      var(--akita-blue) 0%,
      var(--akita-primary) 50%,
      var(--akita-secondary) 100%
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
  button {
    z-index: 2;
  }
  .business_woman {
    width: 400px;
    height: 400px;
    position: relative;
    right: calc(100% - 50px);
    bottom: 300px;
    z-index: 1;
  }
}

@media (max-width: 900px) {
  .user {
    max-width: 100%;
    .business_woman {
      right: calc(80% - 100px);
    }
  }
}
</style>
