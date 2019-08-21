<template>
  <div>
    <div class="button" @click="openPopup">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
    <transition name="animation">
      <div class="popup" v-show="isOpen">
        <ul class="list">
          <li class="item" v-for="li in navigation" :key="li.id">
            <a href="#" class="link text" :path="li.path" @click.prevent="scroll">{{li.text}}</a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'MobileNavigation',

  props: ['navigation'],

  data() {
    return {
      isOpen: false
    }
  },

  methods: {
    openPopup() {
      this.isOpen = !this.isOpen
    },

    scroll(e) {
      document
        .querySelector(e.target.attributes.path.value)
        .scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  width: 25px;
  height: 30px;
  position: absolute;
  right: 0px;
  top: 38px;
}

.line {
  display: block;
  width: 25px;
  height: 2px;
  background-color: var(--akita-light);
  margin-bottom: 6px;
}

.popup {
  position: absolute;
  background-color: var(--akita-light);
  width: 100%;
  top: 95px;
  height: 150px;
  border-radius: 5px;
}

.list {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.item {
  padding: 3px 20px;
}

.link {
  color: var(--akita-dark);

  &:hover {
    color: var(--akita-dark);
  }
}

.animation-enter-active,
.animation-leave-active {
  transition: opacity 1s;
}
.animation-enter,
.animation-leave-to {
  opacity: 0;
}

@media (min-width: 1025px) {
  .button {
    display: none;
  }

  .popup {
    display: none;
  }
}
</style>