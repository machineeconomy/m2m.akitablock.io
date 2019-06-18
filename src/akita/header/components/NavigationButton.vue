<template>
  <div class="navigation__button">
    <span class="button__line"></span>
    <span class="button__line"></span>
    <span class="button__line"></span>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navigation__button {
  width: 25px;
  height: 30px;
  position: absolute;
  right: 0px;
  top: 40px;
  display: none;
}

.button__line {
  display: block;
  width: 25px;
  height: 2px;
  background-color: #fff;
  margin-top: 6px;
}

@media (max-width: 500px) {
  .navigation__button {
    display: block;
  }
}
</style>