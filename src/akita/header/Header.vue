<template>
  <header>
    <div class="contain">
      <navigation/>
      <h1 class="title animation">
        <textAnimation
          :textList="['Machine-to-Machine M2M Payment.', 'IOTA Tangle.', 'AKITA prototypes.']"
          :writingSpeed="50"
          :changingSpeed="4000"
        />
      </h1>
      <p class="text">While most people and companies are talking about blockchain,</p>
      <p class="text">AKITA is building tangible, live prototypes supported by the</p>
      <p class="text">IOTA Foundation,</p>
      <p class="text">EDF Development Fund and based on the Tangle network technology.</p>
      <!-- buttons -->
    </div>
    <backgroundLine/>
  </header>
</template>
<script>
import Navigation from './components/Navigation'
import TextAnimation from './components/TextAnimation'
import BackgroundLine from './components/BackgroundLine'

export default {
  name: 'Header',
  components: {
    Navigation,
    TextAnimation,
    BackgroundLine
  }
}
</script>

<style lang="scss">
header {
  background: linear-gradient(to bottom right, var(--akita-primary) 50%,  var(--akita-secondary) 100%);
  position: relative;
  min-height: 100vh;
  padding-bottom: 250px;
  margin-bottom: 100px;
  .text {
    color: var(--akita-light);
    position: relative;
    z-index: 2;
  }
}

.animation {
  color: var(--akita-light);
  height: 100px;
  margin-top: 7%;
  position: relative;
  z-index: 2;
}
</style>