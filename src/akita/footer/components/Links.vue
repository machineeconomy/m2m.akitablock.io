<template>
  <div class="links">
    <div class="contain">
      <p class="text">Open source development project by AKITA</p>
      <p class="text">Supported by IOTA Ecosytem Development Fund</p>
      <p class="text">Based on the IOTA Tangle infrastructure</p>
    </div>
    <div class="logos">
      <ul class="list">
        <li class="item" v-for="logo in logos" :key="logo.key">
          <span class="img" :style="{backgroundImage: `url(${logo.url})`}"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Links',

  data() {
    return {
      logos: [
        {
          url: require('../../../assets/img/IOTALogo.png'),
          id: 1
        },
        {
          url: require('../../../assets/img/IOTAEcosystem.svg'),
          id: 2
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.links {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 50px 0;
  background: linear-gradient(to left, var(--akita-primary) 50%,  var(--akita-secondary) 85%);
}

.logos {
  position: absolute;
  right: 0;
  bottom: 30px;
}

.list {
  display: flex;
}

.img {
  display: block;
  height: 70px;
  width: 200px;
  background-size: auto 40px;
  background-repeat: no-repeat;
  background-position: left center;
}
</style>