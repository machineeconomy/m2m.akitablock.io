<template>
  <div class="use-case">
    <div class="row centered">
      <div class="box">
        <div class="wallet">
          <h3>User Wallets</h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="box">
        <OrderButton
        class="button"
        @ordered="ordered"
        name="headphone"
        :url="robot_1_url"
        :amount="0"
      >Buy Headphone</OrderButton>
      </div>
      <div class="box">
        <OrderButton
        class="button"
        @ordered="ordered"
        name="laptop"
        :url="robot_2_url"
        :amount="1"
      >Buy Laptop</OrderButton>
      </div>
    </div>
    <div class="row">
      <div class="box">
        <Machine :url="robot_1_url" name="Robot 1" />
      </div>
      <div class="box">
          <Machine :url="robot_2_url" name="Robot 2" />
      </div>
    </div>
    <div class="row">
      <div class="box hidden">
        <lottie :options="defaultOptions" :height="400" :width="400" />
      </div>
      <div class="box hidden">
        <lottie :options="defaultOptions2" :height="400" :width="400" />
      </div>
    </div>
    <div class="row">
      <div class="box">
         <Machine :url="provider_1_url" name="Provider 1" />
      </div>
      <div class="box">
          <Machine :url="provider_2_url" name="Provider 2" />
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import Machine from "./Machine.vue";
import OrderButton from "./OrderButton.vue";

import * as animationData from "@/assets/lightning.json";
import * as animationData2 from "@/assets/akita.json";
export default {
  components: {
    lottie: Lottie,
    Machine,
    OrderButton
  },
  data() {
    return {
      robot_1_url: "http://localhost:3001",
      robot_2_url: "http://localhost:3002",
      provider_1_url: "http://localhost:3003",
      provider_2_url: "http://localhost:3004",
      defaultOptions: { animationData: animationData.default },
      defaultOptions2: { animationData: animationData2.default },
      animationSpeed: 1
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },

    stop: function() {
      this.anim.stop();
    },

    play: function() {
      this.anim.play();
    },

    pause: function() {
      this.anim.pause();
    },

    onSpeedChange: function() {
      this.anim.setSpeed(this.animationSpeed);
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  margin: 0;

  display: flex;

  &.centered {
    justify-content: center;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    opacity: 1;
    padding: 15px 20px;
    &.hidden {
      opacity: 1;
    }
  }

  .wallet {
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

    h3 {
      font-size: 1em;
      color: var(--akita-light);
    }
  }
}
</style>