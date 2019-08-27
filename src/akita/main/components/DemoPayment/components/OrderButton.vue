<template>
  <base-button class="btn-order" @click="order" :disabled="loading">
    <div v-if="loading">
      <pulse-loader :loading="true" color="#FFFFFF" size="5px"></pulse-loader>
    </div>
    <slot v-else>{{text}}</slot>
  </base-button>
</template>

<script>
const axios = require("axios");
import { composeAPI } from "@iota/core";

const iota = composeAPI({
  provider: "https://nodes.devnet.thetangle.org:443"
});

import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "OrderButton",
  components: { PulseLoader },
  props: {
    text: {
      type: String,
      default: "",
      description: "Button text in case not provided via default slot"
    },
    name: {
      type: String,
      required: true,
      description: "The name of the product which can be ordered."
    },
    amount: {
      type: Number,
      required: true,
      description: "Value of IOTA which will be sent to the provider."
    }
  },
  data() {
    return {
      seed: "",
      loading: false,
      logs: []
    };
  },
  created() {
    this.seed = localStorage.getItem("seed");
  },
  methods: {
    order() {
      this.loading = true;
      let self = this;
      setTimeout(function() {
        self.loading = false;
        self.$emit("ordered", { type: self.name, amount: self.amount });
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
 .btn-order {
    width: 100%;
    color: white;
    font-size: .8em;
    animation: shadow-pulse 1s infinite;

    &:disabled {
      animation: none;
      cursor: not-allowed;
    }
  }

@media (max-width: 900px) {
   .btn-order {
    font-size: .62em;

   }
 }

  @keyframes shadow-pulse
{
     0% {
          box-shadow: 0 0 0 0px rgba(0, 251, 146, 0.4);
     }
     100% {
          box-shadow: 0 0 0 20px rgba(0, 251, 146, 0);
     }
}

</style>