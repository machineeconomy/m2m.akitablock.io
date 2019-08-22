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
        <use-case></use-case>
      </div>
    </div>
  </div>
</template>

    <script>
import UseCase from "./components/UseCase.vue";

export default {
  name: "LiveDemo",
  components: { UseCase },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.contain {
  display: flex;
  .inner {
    padding: 10px;
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