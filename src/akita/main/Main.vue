<template>
  <div class="main">
    <h2>Live use case</h2>
    <p>In this Machine Economy demonstration every participant has its own blockchain based service application.</p>
    <p>Each transactions triggers an automated machine-to-machine (M2M) payment and production process.</p>
    <p>Select a new pair of headphones or a laptop on your machine device.</p>
    <div class="usecase">
      <User />
      <div class="machines">
        <div class="machines_park">
          <div class="machine">
            <div class="machine_wallet">
              <h3>robot 1</h3>
              <p class="balance">1400i</p>
              <p>Balance</p>
            </div>
            <div class="info">transaction history</div>
          </div>
          <div class="machine">
            <div class="machine_wallet">
              <h3>wind energy</h3>
              <p class="balance">1400i</p>
              <p>Balance</p>
            </div>
            <div class="info">transaction history</div>
          </div>
        </div>
        <div class="machines_park">
          <div class="machine">
            <div class="machine_wallet">
              <h3>robot 2</h3>
              <p class="balance">1400i</p>
              <p>Balance</p>
            </div>
            <div class="info">transaction history</div>
          </div>

          <div class="machine">
            <div class="machine_wallet">
              <h3>solar energy</h3>
              <p class="balance">1400i</p>
              <p>Balance</p>
            </div>
            <div class="info">transaction history</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import User from './components/User.vue'
import { composeAPI } from "@iota/core";

export default {
  name: "Main",
  components: {User}
};
</script>

<style lang="scss" scoped>
.main {
  max-width: 1600px;
  padding: 0px 50px;
  margin: auto;
}

h2 {
  margin: 40px 0;
}

p {
  color: black;
  margin: 0;
}

.usecase {
  display: flex;
  h3 {
    color: white;
  }
  
  .machines {
    padding: 0 20px;
    width: 70%;
    .machines_park {
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      .machine {
        display: flex;
        .machine_wallet {
          float: left;
          text-align: center;
          border-radius: 20px;
          padding: 20px;
          background: linear-gradient(
            to top right,
            #5f46b1 0%,
            #7d41af 50%,
            #ff2ea0 100%
          );
          p {
            color: white;
          }
          .balance {
            font-size: 3em;
          }
        }
        .info {
          padding: 20px;
          float: right;
          border-radius: 20px;
          background: #EFEFEF;
        }
      }
    }
  }
}
</style>
