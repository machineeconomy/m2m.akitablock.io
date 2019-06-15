<template>
  <div class="main">
    <h2>Live use case</h2>
    <p>In this Machine Economy demonstration every participant has its own blockchain based service application.</p>
    <p>Each transactions triggers an automated machine-to-machine (M2M) payment and production process.</p>
    <p>Select a new pair of headphones or a laptop on your machine device.</p>
    <div class="usecase">
      <User/>
      <div class="machines">
        <div class="machines_park">
          <Machine url="http://localhost:3001"/>
          <Machine url="http://localhost:3002"/>
        </div>
        <div class="machines_park">
          <Machine url="http://localhost:3003"/>
          <Machine url="http://localhost:3004"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import User from "./components/User.vue";
import Machine from "./components/Machine.vue";

export default {
  name: "Main",
  components: { User, Machine }
};
</script>

<style lang="scss" scoped>
.main {
  max-width: 1600px;
  padding: 0px 50px;
  margin: auto;
}

h2 {
  margin: 40px 0;
}

p {
  color: black;
  margin: 0;
}

.usecase {
  display: flex;
}
</style>
