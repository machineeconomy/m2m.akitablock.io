<template>
  <header>
    <div class="contain">
      <navigation></navigation>
      <information></information>
      <liveDemo></liveDemo>
    </div>
    <backgroundLine></backgroundLine>
  </header>
</template>
<script>
import Navigation from "./components/Navigation";
import Information from "./components/Information";
import LiveDemo from "./components/LiveDemo";
import BackgroundLine from "./components/BackgroundLine";

export default {
  name: "Header",
  components: {
    Navigation,
    Information,
    LiveDemo,
    BackgroundLine
  }
};
</script>

<style>

  header {
    background: url("./../../../public/chain.png") no-repeat, linear-gradient(to top left, #5F46B1 0%, #7D41AF 50%, #FF2EA0 100%);
    background-size: cover;
    position: relative;
    font-family: 'Roboto', sans-serif;
  }

  .contain {
    max-width: 1600px;
    padding: 0px 50px;
    margin: auto;
  }
</style>