<template>
  <main>
    <ClickDemo />
    <M2MSupplyChain/>
  </main>
</template>
<script>
import ClickDemo from './components/ClickDemo/index.vue'
import M2MSupplyChain from './components/M2MSupplyChain.vue'

export default {
  name: 'Main',
  components: { ClickDemo, M2MSupplyChain}
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
