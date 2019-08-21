<template>
  <nav class="navigation">
    <ul class="list">
      <li>
        <h1 class="title logo">Machine Economy</h1>
      </li>

      <li v-for="item in navigation" class="item" :key="item.key">
        <a href="#" class="link text" :path="item.path" @click.prevent="scroll">
          {{item.text}}
        </a>
      </li>
    </ul>
    <mobileNavigation :navigation="navigation" />
  </nav>
</template>

<script>
import MobileNavigation from './MobileNavigation'

export default {
  name: 'Navigation',

  components: {
    MobileNavigation
  },

  data() {
    return {
      navigation: [
        {
          text: 'Live Demos',
          path: '.LiveDemos',
          id: 1
        },
        {
          text: 'Process',
          path: '.Process',
          id: 2
        },
        {
          text: 'Hardware PoC',
          path: '.HardwarePoC',
          id: 3
        },
        {
          text: 'Links',
          path: '.Links',
          id: 4
        }
      ]
    }
  },

  methods: {
    scroll(e) {
      document
        .querySelector(e.target.attributes.path.value)
        .scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  padding: 50px 200px 0 0;
  position: relative;
  z-index: 10;
}

.list {
  display: flex;
  justify-content: space-between;
}

.logo {
  color: var(--akita-light);
  font-size: 40px;
  position: relative;
  bottom: 25px;
  white-space: nowrap;
}

.link {
  color: var(--akita-light);
  white-space: nowrap;
  transition: .1s;
  display: inline-block;
  &:hover {
    text-decoration: underline;
    color: var(--akita-light);
    transform: scale(1.1);
  }
}

@media (max-width: 1024px) {
  .item {
    display: none;
  }

  .logo {
    font-size: 24px;
    margin-bottom: 50px;
  }
}
</style>