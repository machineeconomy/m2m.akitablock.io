<template>
  <div class="machine">
    <img class="machine_img" :src="getImgUrl()" alt="machine">
    <div class="machine_wallet">
      <h3>{{ name }}</h3>
      <p class="balance">{{ this.balance }}</p>
      <p>Balance</p>
    </div>
    <div v-if="connected" class="info">
      <p>{{ status }}</p>
      <p>transaction history</p>
    </div>
     <div v-else class="info not_connected">
      <p>not connected</p>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  props: ["url", "name"],
  data() {
    return {
      status: "",
      balance: 0,
      connected: false
    };
  },
  created() {
    var socket = io(this.url, { path: "/socket" });
    if (socket) {
      var self = this;
      socket.on("init", function(msg) {
        self.name = msg.name;
        self.status = msg.status;
        self.balance = msg.balance
        self.connected = true;
        self.$emit('newActivity', {message: `Machine '${self.name}' connected.`, timestamp: Date.now()})
      });

      socket.on("status", function(msg) {
        console.log("ws: tx_confirmed", msg)
        self.status = msg.status;
        self.$emit('newActivity', {message: `Machine '${self.name}': ${msg.message}`, timestamp: Date.now()})
  
      });
    }
  },
  methods: {
    getImgUrl() {
      var images = require.context('../../../assets/img/', false, /\.png$/)
      return images('./' + this.name + ".png")
    }
  }
};
</script>


<style lang="scss">
.machines {
  padding: 0 20px;
  width: 70%;

  h3 {
    color: white;
  }
  .machines_park {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    .machine {
      display: flex;
      .machine_img {
        width: 200px;
        height: 200px;
        position: relative;
        left: 50px;
        top: 100px;
      }
      .machine_wallet {
        float: left;
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
        }
        .balance {
          font-size: 3em;
        }
      }
      .info {
        padding: 20px;
        float: right;
        border-radius: 20px;
        background: #efefef;
        p {
          color: black;
        }
      }
       .not_connected {
          border: 2px solid red;
          p {
          color: red;
          text-align: center;
        }
        }
    }
  }
}
</style>
