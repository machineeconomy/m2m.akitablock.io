<template>
  <header class="header">
    <div class="contain">
      <navigation/>
      <h1 class="title animation">
        <textAnimation
          :textList="['Machine-to-Machine M2M Payment.', 'IOTA Tangle.', 'AKITA prototypes.']"
          :writingSpeed="50"
          :changingSpeed="4000"
        />
      </h1>
      <p class="text">While most people and companies are talking about blockchain,</p>
      <p class="text">AKITA is building tangible, live prototypes supported by the</p>
      <p class="text">IOTA Foundation,</p>
      <p class="text">EDF Development Fund and based on the Tangle network technology.</p>
      <div class="buttons">
        <div class="mybtn" @click="popup">
          <span>Watch Video</span>
          <div class="triangle"></div>
        </div>
        <div class="mybtn">
          <span @click="scroll">Live Demos</span>
        </div>
      </div>
    </div>
    <logos />
    <backgroundLine />
    <trailer :isOpen="isOpen" @popup="popup" />
  </header>
</template>
<script>
import Navigation from './components/Navigation'
import TextAnimation from './components/TextAnimation'
import BackgroundLine from './components/BackgroundLine'
import Trailer from './components/Trailer'
import Logos from './components/Logos'

export default {
  name: 'Header',

  components: {
    Navigation,
    TextAnimation,
    BackgroundLine,
    Trailer,
    Logos
  },

  data() {
    return {
      isOpen: false
    }
  },

  methods: {
    popup() {
      this.isOpen = !this.isOpen
    },

    scroll() {
      document
        .querySelector('.liveDemos')
        .scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(to bottom right, var(--akita-primary) 50%,  var(--akita-secondary) 85%);
  position: relative;
  min-height: 100vh;
  padding-bottom: 250px;
  margin-bottom: 100px;
  
  .text {
    color: var(--akita-light);
    position: relative;
    z-index: 2;
  }
}

.animation {
  color: var(--akita-light);
  height: 100px;
  margin-top: 7%;
  position: relative;
  z-index: 2;
}

.buttons {
  display: flex;
}

.mybtn {
  margin: 40px 0 0 50px;
  position: relative;
  color: var(--akita-primary);
  font-size: 22px;
  width: 250px;
  padding: 10px;
  text-align: center;
  background: var(--akita-light);
  border: 1px solid var(--akita-light);
  border-radius: 10px;
  cursor: pointer;
  transition: 0.4s;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 3;

  .triangle {
    height: 7px;
    border: 7px solid transparent;
    border-left: 15px solid var(--akita-primary);
    position: relative;
    top: 10px;
    left: 10px;
    transition: 0.4s;
  }

  &:hover {
    background: rgba(0, 0, 0, 0);
    color: var(--akita-light);
    transform: translate(3px, 3px);

    .triangle {
      border-left-color: var(--akita-light);
    }
  }
}



@media (max-width: 1024px) {
  .header {
    padding-bottom: 50px;
  }
}

@media (max-width: 768px) {
  .buttons {
    flex-direction: column;
  }

  .mybtn {
    margin-left: 0;
  }
}
</style>