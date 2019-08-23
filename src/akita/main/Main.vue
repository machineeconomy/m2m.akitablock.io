<template>
  <main class="liveDemos">
    <LivePayment />
    <process />
    <Lottie :options="defaultOptions" :height="400" :width="400" />
    <Lottie :options="defaultOptions2" :height="400" :width="400" />

  </main>
</template>

<script>
import LivePayment from "./components/LivePayment/index";
import Process from "./components/Process";

import Lottie from "vue-lottie";

import * as animationData from "@/assets/lightning.json";
import * as animationData2 from "@/assets/akita.json";
export default {
  name: "Main",

  components: {
    LivePayment,
    Process,
    Lottie
  },
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      defaultOptions2: { animationData: animationData2.default }
    };
  }
};
</script>

<style lang="scss" scoped>
.main-margin {
  margin-bottom: 200px;
}

ol {
  color: #000;
  font-weight: lighter;
}

p {
  color: black;
  margin: 0;
}
</style>
