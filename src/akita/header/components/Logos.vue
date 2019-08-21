<template>
  <div class="logos">
    <ul class="list">
      <li class="item" v-for="logo in logos" :key="logo.key">
        <span class="img" :style="{backgroundImage: `url(${logo.url})`}"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Logos',

  data() {
    return {
      logos: [
        {
          url: require('../../../assets/img/AKITALogo.png'),
          id: 1
        },
        {
          url: require('../../../assets/img/IOTALogo.png'),
          id: 2
        },
        {
          url: require('../../../assets/img/IOTAEcosystem.svg'),
          id: 3
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.logos {
  position: absolute;
  top: 35px;
  right: 20px;
  z-index: 3;
}

.img {
  display: block;
  height: 70px;
  width: 200px;
  background-size: auto 40px;
  background-repeat: no-repeat;
  background-position: left center;
}

.item {
  &:nth-child(1) {
    .img {
      background-size: auto 75px;
      position: relative;
      right: 17px;
    }
  }

  &:nth-child(3) {
    .img {
      background-size: auto 50px;
    }
  }
}

@media (max-width: 700px) {
  .list {
    display: none;
  }
}
</style>