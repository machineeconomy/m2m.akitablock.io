<template>
  <div class="live-payment">
    <div class="contain">
      <div class="inner left">
        <h3 class="title">M2M Payment Demo</h3>
        <p class="text">
          In this Machine Economy alpha version demonstrator every participant has its own IOTA (DevNet) based service application.
          <br />Each transaction triggers an automated machine-to-machine (M2M) payment and the related energy delivery and production process:
        </p>
        <br>
        <br>
        <ol>
          <li class="text">Buy a new pair of headphones or a laptop</li>
          <li
            class="text"
          >The rest of the process is completely automated. Just sit back and watch.</li>
          <li
            class="text"
          >When your product is ready, you will receive a notification link to both transactions on the Tangle</li>
        </ol>
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
      started: true,
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
    padding-bottom: 80px;
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