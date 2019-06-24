<template>
  <section class="section3">
    <div class="contain">
      <div class="section3__information">
        <h3 class="section3__title">Machine-to-machine Supply Chain</h3>
        <p
          class="section3__text"
        >powered by the DLT infrastructure of IOTA Tangle, build by AKITA and shared open source for eveyone</p>
      </div>
      <img src="./../../../../public/SupplyChain.png" alt="M2M Supply Chain" class="chain__img">
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.section3 {
  margin-bottom: 200px;
}

.section3__title {
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  font-size: 64px;
}

.section3__text {
  max-width: 530px;
  font-size: 22px;
  line-height: 1.2;
}

.chain__img {
  width: 100%;
}

@media (max-width: 1500px) {
  .section3__title {
    font-size: 52px;
  }
}

@media (max-width: 1200px) {
  .section3__title {
    font-size: 42px;
  }
}

@media (max-width: 700px) {
  .section3__title {
    font-size: 32px;
  }
  .section3__text {
    max-width: 450px;
    font-size: 18px;
  }
}
</style>