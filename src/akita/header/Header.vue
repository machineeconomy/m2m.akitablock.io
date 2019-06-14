<template>
  <header>
    <div class="contain">
      <navigation></navigation>
      <information></information>
      <liveDemo></liveDemo>
    </div>
    <div class="background__line"></div>
  </header>
</template>
<script>
import Navigation from "./components/Navigation";
import Information from "./components/Information";
import LiveDemo from "./components/LiveDemo";

export default {
  name: "Header",
  components: {
    Navigation,
    Information,
    LiveDemo
  }
};
</script>

<style>

  header {
    background: linear-gradient(to top left, #5F46B1 0%, #7D41AF 50%, #FF2EA0 100%);
    min-height: 800px;
    position: relative;
  }

  .contain {
    max-width: 1600px;
    padding: 0px 50px;
    margin: auto;
  }

  .background__line {
    height: 120px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    background: linear-gradient(to bottom right, rgba(0,0,0,0) 49%, white 51%);
}

  @media (max-width: 425px) {
      .background__line {
        height: 60px;
      }
    }
</style>