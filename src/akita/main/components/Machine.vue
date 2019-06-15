<template>
  <div class="machine">
    <div class="machine_wallet">
      <h3>{{name}}</h3>
      <p class="balance">1400i</p>
      <p>Balance</p>
    </div>
    <div class="info">
      <p>{{status}}</p>
      <p>transaction history</p>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  props: ["url"],
  data() {
    return {
      name: "",
      status: ""
    };
  },
  created() {
    var socket = io(this.url, { path: "/socket" });
    if (socket) {
      var self = this;
      socket.on("welcome", function(msg) {
        self.name = msg.name;
        self.status = msg.status;
      });
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
    }
  }
}
</style>
