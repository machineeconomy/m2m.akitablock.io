<template>
  <div class="machine">
    <img class="machine_img" :src="getImgUrl()" alt="machine">
    <div class="machine_wallet">
      <h3>{{ mutableName }}</h3>
      <p v-if="connected" class="balance">{{ mutableBalance }}</p>
      <p>
        <pulse-loader :loading="!connected" color="#FFFFFF" size="5px"></pulse-loader>Balance
      </p>
    </div>
    </div>
   
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  props: ["name", "balance"],
  components: { PulseLoader },
  data() {
    return {
      status: "",
      connected: false,
      mutableName: this.name,
      mutableBalance: this.balance
    };
  },
  mounted() {
    let self = this;
    let rnd_time = Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000;
    setTimeout(function() {
      self.connected = true;
      self.status = "waiting_for_order"
      self.$emit("newActivity", {
          message: `Machine '${self.name}' connected.`,
          timestamp: Date.now()
        });
    }, rnd_time) 
  },
  methods: {
    getImgUrl() {
      var images = require.context("../../../../assets/img/", false, /\.png$/);
      return images("./" + this.name + ".png");
    },
    getStatusColor(status) {
      switch (status) {
        case "not_connected":
          return "danger";
          break;
        case "waiting_for_order":
          return "info";
          break;
        case "waiting_for_tx":
        case "waiting_for_tx_confirm":
          return "primary";
          break;
        case "payout_provider":
          return "warning";
          break;
        case "working":
          return "success";
          break;
        default:
          return "default";
          break;
      }
    }
  },
  watch: {
    balance: function (val) {
      this.mutableBalance = this.mutableBalance + val;
    },
  }
};
</script>


<style lang="scss"  >
.machine {
  padding-bottom: 40px;
  display: flex;
  position: relative;
  right: 240px;
  .machine_img {
    width: 200px;
    height: 200px;
    position: relative;
    left: 80px;
    top: 100px;
  }
  .machine_wallet {
    min-width: 180px;
    float: left;
    text-align: center;
    border-radius: 20px;
    padding: 20px;
    background: linear-gradient(
      to top left,
      var(--akita-blue) 0%,
      var(--akita-primary) 50%,
      var(--akita-secondary) 100%
    );
    h3 {
      color: white;
    }
    p {
      color: white;
    }
    .balance {
      font-size: 3em;
    }
  }
  .info {
    min-width: 200px;
    padding: 5px;
    padding-top: 15px;
    width: 200px;
    float: right;
    border-radius: 20px;
    background: #efefef;
    text-align: center;
    justify-content: center;
    p {
      color: black;
    }
  }
  .not_connected {
    border: 2px solid red;
    p {
      padding-top: 20px;
      color: var(--akita-primary);
      text-align: center;
    }
  }
}

@media (max-width: 900px) {
  .machine {
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    position: relative;
    right: 0px;
    margin: 20px;
    .machine_img {
      width: 100px;
      height: 100px;
      position: relative;
      left: 50px;
      top: 20px;
    }
    .machine_wallet {
      h3 {
        font-size: 1.2em;
      }
    }
  }
}
</style>
