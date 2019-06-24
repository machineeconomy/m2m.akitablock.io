<template>
  <main>
    <div class="contain main-margin">
      <p>In this Machine Economy demonstrator every participant has its own blockchain based service application.</p>
      <p>Each transaction triggers an automated machine-to-machine (M2M) payment and production process:</p>
      <ol>
        <li>Click to fund your wallet with virtual tokens</li>
        <li>Select a new pair of headphones or a laptop</li>
        <li>The rest of the process is completely automated - just watch what happens...</li>
      </ol>
      <div class="usecase">
        <User/>
        <div class="machines">
          <div class="machines_park">
            <Machine url="http://localhost:3001" v-on:newActivity="addActivity"/>
            <Machine url="http://localhost:3002" v-on:newActivity="addActivity"/>
          </div>
          <div class="machines_park">
            <Machine url="http://localhost:3003" v-on:newActivity="addActivity"/>
            <Machine url="http://localhost:3004" v-on:newActivity="addActivity"/>
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
    <section3/>
    <section4/>
  </main>
</template>
<script>
import User from "./components/User.vue";
import Machine from "./components/Machine.vue";
import Section3 from "./components/Section3.vue";
import Section4 from "./components/Section4.vue";

export default {
  name: "Main",
  components: { User, Machine, Section3, Section4 },
  data() {
    return {
      activities: [
        {
          message: "Machines connecting...",
          timestamp: Date.now()
        }
      ]
    };
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
