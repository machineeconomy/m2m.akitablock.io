<template>
  <div class="live-payment">
    <div class="contain">
      <div class="inner left">
        <h2>Live M2M Payment</h2>
        <p>
          This virtual showcase has the same setup as the previous
          demonstration above, with the addtion that actual value/
          „money“ is send for each transaction.
        </p>
        <p>
          Any following action depends on the settlement of the
          previous transaction to be confirmed, which depends on
          the milestones validation on the IOTA Tangle network.
          Please wait for the next milestone to be confirmed before the
          process can continue
        </p>
      </div>
      <div class="inner right">
        <div v-if="!started" class="curtain">
          <div class="wrapper">
            <div v-if="loading" class="center">
              <div class="loading_line">
                <span>loading user wallet</span>
                <span v-if="!load_wallet">✓</span>
                <pulse-loader :loading="load_wallet" color="#FFFFFF" size="5px"></pulse-loader>
              </div>
              <div class="loading_line">
                <span>connect to machines</span>
                <span v-if="!load_machines">✓</span>
                <pulse-loader :loading="load_machines" color="#FFFFFF" size="5px"></pulse-loader>
              </div>
              <div class="loading_line">
                <span>loading animations</span>
                <span v-if="!load_animations">✓</span>
                <pulse-loader :loading="load_animations" color="#FFFFFF" size="5px"></pulse-loader>
              </div>
            </div>
            <button v-else class="center btn btn-play" @click="play">Play!</button>
          </div>
        </div>
        <use-case v-else></use-case>
      </div>
    </div>
  </div>
</template>

    <script>
import UseCase from "./components/UseCase.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "LiveDemo",
  components: { UseCase, PulseLoader },
  data() {
    return {
      started: false,
      loading: false,
      load_wallet: true,
      load_machines: true,
      load_animations: true
    };
  },
  methods: {
    play() {
      this.loading = true;
      let self = this;

      setTimeout(function() {
        self.load_wallet = false;
      }, 1500);
      setTimeout(function() {
        self.load_machines = false;
      }, 2500);
      setTimeout(function() {
        self.load_animations = false;
      }, 3500);

      setTimeout(function() {
        self.started = true;
      }, 4000);
    }
  }
};
</script>

<style lang="scss" scoped>
.contain {
  display: flex;
  .inner {
    padding: 10px;
    height: 800px;
    &.left {
      width: 60%;
      padding-left: 0;
    }

    &.right {
      width: 40%;
      padding-right: 0;
    }
  }
}

.curtain {
  display: table;
  margin: 10px;
  padding: 10px;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background: linear-gradient(
    to bottom right,
    var(--akita-primary) 50%,
    var(--akita-secondary) 85%
  );
  .wrapper {
    display: table-cell;
    vertical-align: middle;
    .center {
      display: block;
      width: 50%;
      margin: 0 auto;
      .loading_line {
        display: flex;
        margin: 10px 0;
        span {
          margin-right: 10px;
          color: white;
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .contain {
    flex-wrap: wrap;
    .inner {
      &.left {
        width: 100%;
      }

      &.right {
        width: 100%;
      }
    }
  }
}
</style>