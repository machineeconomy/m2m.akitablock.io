<template>
  <div id="app">
    <router-view name="header"></router-view>
    <!--<main>
    <fade-transition origin="center" mode="out-in" :duration="250">-->
    <router-view/>
    <!--</fade-transition>
    </main>-->
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  }
};
</script>

<style>
.contain {
  max-width: 1600px;
  padding: 0px 50px;
  margin: auto;
}

ul {
  list-style: none;
  padding-left: 0;
}

.title {
  font-size: 60px;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
}

.text {
  font-size: 20px;
  line-height: 1.3;
  margin-bottom: 0;
  font-family: "Roboto", sans-serif;
}

@media (max-width: 1250px) {
  .title {
    font-size: 54px;
  }
  .text {
    font-size: 18px;
    margin-bottom: 0;
  }
}

@media (max-width: 1000px) {
  .title {
    font-size: 48px;
  }
  .text {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 40px;
  }
}

@media (max-width: 425px) {
  .title {
    font-size: 32px;
  }
}
</style>