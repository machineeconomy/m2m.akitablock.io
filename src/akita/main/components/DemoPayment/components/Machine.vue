<template>
  <div class="machine">
    <div class="machine_wallet">
      <img v-if="name == 'Robot 1'" src="@/assets/img/Robot1_xs.png" />
      <img v-if="name == 'Robot 2'" src="@/assets/img/Robot2_xs.png" />
      <img v-if="name == 'Energy Solar'" src="@/assets/img/EnergySolar_xs.png" />
      <img v-if="name == 'Energy Wind'" src="@/assets/img/EnergyWind_xs.png" />
      <div class="info">
        <h3>{{ name }}</h3>
        <p class="balance">{{ balance }}</p>
        <p>
          <pulse-loader :loading="false" color="#FFFFFF" size="5px"></pulse-loader>Balance
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  props: ["name", "balance"],
  components: { PulseLoader },
  data() {
    return {
      loading: false,
      img_src: "@/assets/img/Robot2_xs.pngs"
    };
  },
  created() {},
  methods: {}
};
</script>


<style lang="scss" scoped>
.machine {
  .machine_wallet {
    background: linear-gradient(
      to bottom right,
      var(--akita-primary) 50%,
      var(--akita-secondary) 85%
    );

    border-radius: 10px;
    padding: 15px 20px;
    width: 100%;
    height: 110px;
    text-align: left;

    img {
      float: left;
    }
    .info {
      h3 {
        color: var(--akita-light);
        font-size: 1em;
        margin-bottom: 10;
      }
      p {
        color: var(--akita-light);
        margin-bottom: 0;
      }
      .balance {
        font-size: 1em;
      }
    }
  }
}

@media (max-width: 900px) {
  .machine {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    position: relative;
    right: 0px;
    .machine_img {
      width: 100px;
      height: 100px;
      position: relative;
      left: 30px;
      top: 20px;
    }
    .machine_wallet {
      h3 {
        font-size: 1.2em;
      }
    }
  }
}
</style>
