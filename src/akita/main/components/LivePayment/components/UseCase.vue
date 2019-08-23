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
          v-if="!order_headphone_active"
          class="button"
          @ordered="ordered"
          name="headphone"
          :url="robot_1_url"
          :amount="0"
        >Buy Headphone</OrderButton>
        <Lottie v-else :options="defaultOptions" :height="50" />
      </div>
      <div class="box">
        <OrderButton
          v-if="!order_laptop_active"
          class="button"
          @ordered="ordered"
          name="laptop"
          :url="robot_2_url"
          :amount="1"
        >Buy Laptop</OrderButton>
        <Lottie v-else :options="defaultOptions" :height="50" />
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
        <Lottie :options="defaultOptions" :height="50" />
      </div>
      <div class="box hidden">
        <Lottie :options="defaultOptions" :height="50" />
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

import * as animationData from "@/assets/8711-scroll-down-hint.json";
export default {
  components: {
    Lottie,
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
      order_laptop_active: false,
      order_headphone_active: false
    };
  },
  methods: {
    ordered(object) {
      console.log("object", object)
      if(object.name == 'headphone') {
        this.order_headphone_active = false;
      } else if (object.name == 'laptop') {
        this.order_laptop_active = false;
      }
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