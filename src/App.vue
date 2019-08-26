<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view/>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import { FadeTransition } from 'vue2-transitions'

export default {
  components: {
    FadeTransition
  }
}
</script>

<style>
:root {
  --akita-primary: #00B0F0;
  --akita-secondary: #00fb92;
  --akita-dark: #3B3838;
  --akita-light: #F2F2F2;
  --akita-blue: #00B0F0;
}

#app {
  background: var(--akita-light);
}

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
  color: var(--akita-dark);
}

.text {
  font-size: 22px;
  line-height: 1.3;
  margin-bottom: 0;
  font-family: ocr-b-std, monospace;
  color: var(--akita-dark);
}

@media (max-width:1500px)  {
  .title {
    font-size: 54px;
  }
  .text {
    font-size: 20px;
  }
}

@media (max-width: 1250px) {
  .title {
    font-size: 44px;
  }
  .text {
    font-size: 18px;
  }
}

@media (max-width: 1250px) {
  .title {
    font-size: 38px;
  }
  .text {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 30px;
  }
  .text {
    font-size: 16px;
  }
}

@media (max-width: 425px) {
  .title {
    font-size: 22px;
  }

  .contain {
    padding: 0 20px;
  }
}
</style>