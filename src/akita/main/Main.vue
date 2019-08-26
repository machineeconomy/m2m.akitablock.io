<template>
  <main class="liveDemos">
    <LivePayment />
    <process />
  </main>
</template>

<script>
import LivePayment from "./components/LivePayment/index";
import Process from "./components/Process";

export default {
  name: "Main",
  components: {
    LivePayment,
    Proces
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
