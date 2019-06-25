<template>
  <main>
    <div class="LiveDemo"></div>
    <div class="contain main-margin">
      <p>In this Machine Economy demonstrator every participant has its own blockchain based service application.</p>
      <p>Each transaction triggers an automated machine-to-machine (M2M) payment and production process:</p>
      <ol>
        <li>Click to fund your wallet with virtual tokens</li>
        <li>Select a new pair of headphones or a laptop</li>
        <li>The rest of the process is completely automated - just watch what happens...</li>
      </ol>
      <div class="usecase">
        <User v-on:newActivity="addActivity"/>
        <div class="machines">
          <div class="machines_park">
            <Machine :url="machine_1_url" name="Robot1" v-on:newActivity="addActivity"/>
            <Machine :url="provider_1_url" name="EnergyWind" v-on:newActivity="addActivity"/>
          </div>
          <div class="machines_park">
            <Machine :url="machine_2_url" name="Robot2" v-on:newActivity="addActivity"/>
            <Machine :url="provider_2_url" name="EnergySolar" v-on:newActivity="addActivity"/>
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
          machine_1_url: '',
          provider_1_url: '',
          machine_2_url: '',
          provider_2_url: ''
        }
      ]
    };
  },
  created() {
    this.machine_1_url = 'https://akita.einfach-iota.de:3001';
    this.provider_1_url = 'https://akita.einfach-iota.de:3002';
    this.machine_2_url = 'https://akita.einfach-iota.de:3003';
    this.provider_2_url = 'https://akita.einfach-iota.de:3004';
    console.log("VUE_APP_MACHINE_1_URL", this.machine_1_url)
    console.log("VUE_APP_PROVIDER_1_URL", this.provider_1_url)
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

p {
  color: black;
  margin: 0;
}

.usecase {
  display: flex;
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
    height: 220px;
    padding-inline-start: 0;
    li {
      list-style: none;
      padding-left: 5px;
    }
  }
}
</style>
