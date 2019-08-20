<template>
<div>
  <div class="line">
    <span class="img"></span>
  </div>
  <div class="space">
  </div>
</div>
</template>

<script>
export default {}
</script>

<style>
.line {
  height: 150px;
  width: 100%;
  position: absolute;
  bottom: 98px;
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0) 49.3%, var(--akita-light) 50%);
}

.img {
  background: url("./../../../../public/FactoryItems.png") no-repeat;
  background-size: 100%;
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: -100px;
  width: 800px;
  height: 800px;
}

.space {
  width: 100%;
  height: 100px;
  position: absolute;
  z-index: 0;
  bottom: -1px;
  background: var(--akita-light);
}

@media (max-width: 1600px) {
  .img {
    bottom: -50px;
    width: 600px;
    height: 600px;
  }
}

@media (max-width: 1200px) {
  .img {
    width: 500px;
    height: 500px;
  }
}

@media (max-width: 1024px) {
  .img, .line, .space {
    display: none;
  }
}

</style>