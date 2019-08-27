<template>
  <footer class="hardwarePoC">
    <div class="contain">
      <div class="information">
        <h3 class="title">Phyiscal M2M prototypes soon!</h3>
        <p class="text">
          The very same process and code that you can experience here is now being tested on actual physical hardware, industry
          robots, energy providers, micro controllers with displays and more. As soon as our hardware integration and testing
          is done you will see more. For now you can get additional information below by clicking on the links in the footer.
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
  padding-top: 200px;
  padding-bottom: 400px;
  background: url("~@/assets/img/Tangle.png") no-repeat;
  background-position: -5vw 450px;
  background-size: 100%;
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
