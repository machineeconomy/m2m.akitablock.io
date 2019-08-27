<template>
  <section class="process">
    <div class="contain">
      <h3 class="title">M2M process flow.</h3>
      <p class="text">The following graphic describes the processes of the Machine Economy demonstrator above.</p>
      <p class="text">All transactions are powered by the infrastructure of the IOTA Tangle, all components are build by AKITA and shared open source for everyone.</p>
      <img v-img src="@/assets/img/M2M_IOTA_payment_process.png" alt="M2M Supply Chain" class="img">
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.process {
  margin-bottom: 220px;
}

.img {
  width: 90%;
  margin-top: 30px
}

@media (max-width: 1100px) {
  .img {
    width: 100%;
  }
}
</style>
