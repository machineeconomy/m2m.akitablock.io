<template>
  <div class="links">
    <div class="contain">
      <div class="information">
        <p class="text">Open source development project by AKITA</p>
        <p class="text">Supported by IOTA Ecosytem Development Fund</p>
        <p class="text">Based on the IOTA Tangle infrastructure</p>
      </div>
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
        href: 'https://www.iota.org/'
      },
      {
        url: require('@/assets/img/logo/IOTAEcosystem.png'),
        href: 'https://fund.iota.org/'
      },
      {
        url: require('@/assets/img/logo/Medium.png'),
        href: 'https://medium.com/@akitablock/machine-to-machine-ecosystem-cf1155825a86'
      },
      {
        url: require('@/assets/img/logo/GitHub.png'),
        href: 'https://github.com/akitablock'
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
  p {
    color: white;
    white-space: nowrap;
  }
}

.contain {
  display: flex;
  justify-content: space-between;
}

.information {
  margin-right: 50px;
}

.list {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  bottom: 20px;
}

.item {
  &:nth-child(3) {
    .img {
      background-size: auto 90px;
    }
  }

  &:nth-child(4) {
    .img {
      width: 50px;
    }
  }
}

.img {
  display: block;
  height: 70px;
  width: 180px;
  background-size: auto 40px;
  background-repeat: no-repeat;
  background-position: left center;
}

@media (max-width: 950px) {
  .contain {
    flex-direction: column;
  }

  .information {
    margin-right: 0;
    p {
      white-space: normal;
    }
  }

  .list {
    bottom: 0;
  }
}
</style>