<template>
  <div class="machine">
    <div class="machine_wallet">
      <h3>{{ mutableName }}</h3>
      <p class="balance">{{ this.balance }}</p>
      <p>
        <pulse-loader :loading="!this.balance" color="#FFFFFF" size="5px"></pulse-loader>Balance
      </p>
    </div>
    <div v-if="connected" class="info">
      <div :class="status">
        <badge :type="getStatusColor(status)">{{status}}</badge>
      </div>
    </div>
    <div v-else class="info not_connected">
      <badge :type="getStatusColor('not_connected')">not connected</badge>
      <p>
        <pulse-loader :loading="true" color="#5f46b1" size="5px"></pulse-loader>
      </p>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  props: ["url", "name"],
  components: { PulseLoader },
  data() {
    return {
      status: "",
      balance: "",
      connected: false,
      mutableName: this.name
    };
  },
  created() {
    var socket = io(this.url, { path: "/socket", secure: true });
    if (socket) {
      var self = this;
      socket.on("init", function(msg) {
        self.mutableName = msg.name;
        self.status = msg.status;
        self.connected = true;
        self.$emit("newActivity", {
          message: `Machine '${self.name}' connected.`,
          timestamp: Date.now()
        });
      });

      socket.on("status", function(msg) {
        console.log("ws: tx_confirmed", msg);
        self.status = msg.status;
        self.$emit("newActivity", {
          message: `Machine '${self.name}': ${msg.message}`,
          timestamp: Date.now()
        });
      });

      socket.on("new_balance", function(msg) {
        console.log("ws: new_balance", msg);
        self.balance = msg.balance.toString();
      });
    }
  },
  methods: {
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
  }
};
</script>


<style lang="scss">
.machine {
  .machine_wallet {
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
    height: 100px;
    h3 {
      color: white;
      font-size: 1em;
      margin-bottom: 10;
    }
    p {
      color: white;
      margin-bottom: 0;
    }
    .balance {
      font-size: 1em;
    }
  }
  .info {
    padding: 5px;
    padding-top: 15px;
    width: 100%;
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
    .machine_img {
      width: 100px;
      height: 100px;
      position: relative;
      left: 30px;
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
