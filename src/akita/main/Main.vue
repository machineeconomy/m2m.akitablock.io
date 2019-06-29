<template>
  <main>
    <div class="LiveDemo"></div>
    <div class="contain main-margin">
      <p class="text">In this Machine Economy demonstrator every participant has its own blockchain based service application.</p>
      <p class="text">Each transaction triggers an automated machine-to-machine (M2M) payment and production process:</p>
      <ol>
        <li class="text">Click to fund your wallet with virtual tokens</li>
        <li class="text">Select a new pair of headphones or a laptop</li>
        <li class="text">The rest of the process is completely automated - just watch what happens...</li>
      </ol>
      <div class="usecase">
        <User v-on:newActivity="addActivity"/>
        <div class="machines">
          <div class="machines_park">
            <img
              class="transfer_anim transfer_anim__top"
              src="../../assets/img/value_transfer_anim_machine.gif"
              alt
            >
            <Machine :url="machine_1_url" name="Robot1" v-on:newActivity="addActivity"/>
            <img
              class="transfer_provider_anim transfer_provider_anim__top"
              src="../../assets/img/value_transfer_anim_provider.gif"
              alt
            >
            <Machine
              class="provider"
              :url="provider_1_url"
              name="EnergyWind"
              v-on:newActivity="addActivity"
            />
          </div>
          <div class="machines_park">
            <img
              class="transfer_anim transfer_anim__bottom"
              src="../../assets/img/value_transfer_anim_machine.gif"
              alt
            >
            <Machine :url="machine_2_url" name="Robot2" v-on:newActivity="addActivity"/>
            <img
              class="transfer_provider_anim transfer_provider_anim__bottom"
              src="../../assets/img/value_transfer_anim_provider.gif"
              alt
            >
            <Machine
              class="provider"
              :url="provider_2_url"
              name="EnergySolar"
              v-on:newActivity="addActivity"
            />
          </div>
        </div>
      </div>
      <div class="activities">
        <h3>Activities</h3>
        <ul id="logger">
          <li
            v-for="(activity, index) in sortedActivities"
            :key="index"
          >{{ activity.timestamp | formatTimestampToTime}}: {{activity.message}}</li>
        </ul>
      </div>
    </div>
    <M2MSupplyChain/>
    <Services/>
  </main>
</template>
<script>
import User from "./components/User.vue";
import Machine from "./components/Machine.vue";
import M2MSupplyChain from "./components/M2MSupplyChain.vue";
import Services from "./components/Services.vue";

export default {
  name: "Main",
  components: { User, Machine, M2MSupplyChain, Services },
  data() {
    return {
      activities: [
        {
          message: "Machines connecting...",
          timestamp: Date.now(),
          machine_1_url: "",
          provider_1_url: "",
          machine_2_url: "",
          provider_2_url: ""
        }
      ]
    };
  },
  created() {
    this.machine_1_url = "https://akita.einfach-iota.de:3001";
    this.provider_1_url = "https://akita.einfach-iota.de:3002";
    this.machine_2_url = "https://akita.einfach-iota.de:3003";
    this.provider_2_url = "https://akita.einfach-iota.de:3004";
    console.log("VUE_APP_MACHINE_1_URL", this.machine_1_url);
    console.log("VUE_APP_PROVIDER_1_URL", this.provider_1_url);
  },
  methods: {
    addActivity(activity) {
      console.log("new machine", activity);
      this.activities.push(activity);
      let container = this.$el.querySelector("#logger");
    }
  },
  computed: {
    sortedActivities: function() {
      function compare(a, b) {
        if (b.timestamp < a.timestamp) return -1;
        if (b.timestamp > a.timestamp) return 1;
        return 0;
      }

      return this.activities.sort(compare);
    }
  }
};
</script>

<style lang="scss" scoped>
.main-margin {
  margin-bottom: 200px;
}

ol {
  color: #000;
  font-weight: lighter;
}

p {
  color: black;
  margin: 0;
}

.usecase {
  display: flex;

  .machines {
    .machines_park {
      padding: 10px 40px;
      display: flex;
      align-items: left;

      .provider {
        right: 400px;
      }
    }
  }
}

.transfer_anim {
  height: 20%;
  width: 20%;
  position: relative;
  &__top {
    top: 200px;
    right: 60px;
  }
  &__bottom {
    top: 90px;
    right: 60px;
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
  }
}

.transfer_provider_anim {
  height: 15%;
  width: 15%;
  position: relative;
  &__top {
    top: 130px;
    right: 240px;
  }
  &__bottom {
    top: 130px;
    right: 240px;
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
  }
}

.activities {
  h3 {
    margin-top: 40px;
  }
  ul {
    line-height: 2em;
    border: 1px solid #ccc;
    padding: 0;
    margin: 0;
    overflow: scroll;
    overflow-x: hidden;
    background-color: #efefef;
    border-radius: 20px;
    height: 130px;
    padding-inline-start: 0;
    li {
      list-style: none;
      padding-left: 5px;
    }
  }
}
@media (max-width: 900px) {
  .usecase {
    display: flex;
    flex-direction: column;

    .user {
      width: 100%;
    }

    .machines {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .machines_park {
        display: flex;
        flex-direction: column;
        padding: 0px;
        img {
          display: none;
        }
        .provider {
          right: 0px;
        }
      }
    }
  }
}
</style>
