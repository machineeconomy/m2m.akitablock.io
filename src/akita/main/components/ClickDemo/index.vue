<template>
  <div class="LiveDemo">
    <div class="contain">
      <p>In this Machine Economy demonstrator every participant has its own IOTA based service application.</p>
      <p>Each transaction triggers an automated machine-to-machine (M2M) payment and the related production process:</p>
      <ol>
        <li>Buy a new pair of headphones or a laptop</li>
        <li>The rest of the process is completely automated. Just sit back and watch.</li>
        <li>When your product is ready, you will receive a notification link to both transactions on the Tangle</li>
      </ol>
      <use-case></use-case>
    </div>
  </div>
</template>

    <script>
import UseCase from "./UseCase.vue";

export default {
  name: "ClickDemo",
  components: { UseCase },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>

@media (max-width: 900px) {
 .contain {
   padding: 0 30px;
 }
}
</style>
