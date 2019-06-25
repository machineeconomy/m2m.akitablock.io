<template>
  <section class="M2MSupplyChain">
    <div class="contain">
      <div class="M2MSupplyChain__information">
        <h3 class="title">Machine-to-machine Supply Chain</h3>
        <p class="text M2MSupplyChain__text">powered by the DLT infrastructure of IOTA Tangle,</p>
        <p class="text M2MSupplyChain__text">build by AKITA and shared open source for eveyone</p>
      </div>
      <img src="./../../../../public/SupplyChain.png" alt="M2M Supply Chain" class="chain__img">
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.M2MSupplyChain {
  margin-bottom: 220px;
}

.M2MSupplyChain__text {
  font-weight: normal;
}

.chain__img {
  width: 90%;
  margin: auto;
}

@media (max-width: 1100px) {
  .chain__img {
    width: 100%;
  }
}
</style>