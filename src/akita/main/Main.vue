<template>
  <main class="liveDemos">
    <clickDemo />
    <LivePayment />
    <process />
  </main>
</template>

<script>
import ClickDemo from './components/ClickDemo/index'
import LivePayment from './components/LivePayment/index'
import Process from './components/Process'

export default {
  name: 'Main',

  components: {
    ClickDemo, 
    LivePayment,
    Process
  }
}
</script>

<style lang="scss" scoped>
.main-margin {
  margin-bottom: 200px;
}

ol {
  color: #000;
  font-weight: lighter;
}

p {
  color: black;
  margin: 0;
}
</style>
