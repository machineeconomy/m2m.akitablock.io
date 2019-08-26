<template>
  <main class="liveDemos">
    <DemoPayment />
    <process />
  </main>
</template>

<script>
import DemoPayment from "./components/DemoPayment/index";
import LivePayment from "./components/LivePayment/index";
import Process from "./components/Process";

export default {
  name: "Main",
  components: {
    DemoPayment,
    LivePayment,
    Process
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
