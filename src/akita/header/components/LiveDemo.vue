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
    border: 1px solid #EB479D;
    border-radius: 10px;
    color: #fff;
    font-size: 24px;
    text-transform: uppercase;
    margin-left: 40px;
    margin-bottom: 250px;
  }

  .liveDemo:hover {
    border: 1px solid #fff;
  }

  @media (max-width: 1300px) {
    .liveDemo {
      margin-bottom: 200px;
    }
  }

  @media (max-width: 700px) {
    .liveDemo {
      margin-bottom: 150px;
    }
  }

  @media (max-width: 425px) {
  .liveDemo {
    margin-left: 0px;
  }
}
</style>