<template>
  <div class="links">
    <div class="contain">
      <p class="text">Open source development project by AKITA</p>
      <p class="text">Supported by IOTA Ecosytem Development Fund</p>
      <p class="text">Based on the IOTA Tangle infrastructure</p>
      <div class="logos">
        <ul class="list">
          <li class="item" v-for="logo in logos" :key="logo.href">
            <a class="img" target="_blank" :href="logo.href" :style="{backgroundImage: `url(${logo.url})`}"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Links',

  data: () => ({
    logos: [
      {
        url: require('@/assets/img/logo/IOTALogo.png'),
        href: "https://www.iota.org/"
      },
      {
        url: require('@/assets/img/logo/IOTAEcosystem.png'),
        href: "https://fund.iota.org/"
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.links {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 50px 0;
  background: linear-gradient(to left, var(--akita-primary) 50%,  var(--akita-secondary) 100%);
}

.logos {
  position: absolute;
  right: 0;
  bottom: 30px;
}

.list {
  display: flex;
  flex-wrap: wrap;
}

.img {
  display: block;
  height: 70px;
  width: 200px;
  background-size: auto 40px;
  background-repeat: no-repeat;
  background-position: left center;
}

@media (max-width: 900px) {
  .logos {
    position: relative;
    top: 0;
  }
}
</style>