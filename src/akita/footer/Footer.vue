<template>
  <footer class="hardwarePoC">
    <div class="contain">
      <div class="information">
        <h3 class="title">Phyiscal M2M prototypes soon!</h3>
        <p class="text">
          The very same process and code that you can experience here is now being tested on actual physical hardware, industry
          robots, energy providers, micro controllers with displays and more. As soon as our hardware integration and testing
          is done you will see more. For now you can get additional information here:
        </p>
      </div>
    </div>
    <Links />
  </footer>
</template>

<script>
import Links from './components/Links'

export default {
  name: 'Footer',

  components: {
    Links
  }
}
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  min-height: 100vh;
  padding-top: 300px;
}

.information {
  max-width: 700px;
  margin: auto;
  text-align: justify;

  .title {
    white-space: nowrap;
  }
}
</style>
