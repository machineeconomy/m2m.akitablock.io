<template>
  <div class="machine">
    <div class="machine_wallet">
      <h3>{{ name }}</h3>
      <p class="balance">{{ this.balance }}</p>
      <p>
        <pulse-loader :loading="false" color="#FFFFFF" size="5px"></pulse-loader>Balance
      </p>
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
      loading: false
    };
  },
  created() {
  },
  methods: {
  
  }
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
    height: 75px;
    text-align: center;
    height: 100px;
    h3 {
      color: white;
      font-size: 1em;
      margin-bottom: 10;
    }
    p {
      color: white;
      margin-bottom: 0;
    }
    .balance {
      font-size: 1em;
    }
  }
  .info {
    padding: 5px;
    width: 100%;
    float: right;
    border-radius: 20px;
    background: #efefef;
    text-align: center;
    justify-content: center;
    p {
      color: black;
    }
  }
  .not_connected {
    p {
      color: var(--akita-primary);
      text-align: center;
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
