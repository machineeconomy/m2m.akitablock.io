<template>
  <button class="liveDemo">Live Demo</button>
</template>

<script>
    export default {};
</script>

<style>
  .liveDemo {
    background-color: #EB479D;
    width: 190px;
    height: 60px;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 24px;
    text-transform: uppercase;
    margin-left: 40px;
  }

  @media (max-width: 425px) {
  .liveDemo {
    margin-left: 0px;
  }
}
</style>