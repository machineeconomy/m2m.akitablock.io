<template>
  <section class="section3">
    <div class="contain contain-flex">
      <div class="section3__information">
        <h3>M2M Supply Chain powered by IOTA</h3>
        <p>Providing each protagonist along the Supply Chain with a dedicated machines unit, enables radical new opportunities:</p>
        <ul class="information__list">
          <li class="information__element">+ direct M2M payments</li>
          <li class="information__element">+ automation triggered by payment</li>
          <li class="information__element">+ instant payment & settlement (24/7)</li>
          <li class="information__element">+ immutable data logs</li>
          <li class="information__element">+ real time integrated trace & tracking</li>
          <li class="information__element">+ ecofriendly processes and documentation</li>
        </ul>
      </div>
      <div class="machines__chain">
        <div class="headphones__chain">
          <div class="machine__block">Machine0</div>
          <div class="machine__block">machine1</div>
          <div class="machine__block">Machine2</div>
          <div class="machine__block">machine3</div>
          <div class="machine__block">Machine4</div>
          <div class="chain__block">Order headphone</div>
        </div>
        <div class="laptop__chain"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.section3 {
    margin-top: 200px;
}

.contain-flex {
  display: flex;
}

.section3__information {
  width: 30%;
}

.information__list {
  padding: 0;
}

.information__element {
  list-style: none;
}

.machines__chain {
    width: 70%;
}

.headphones__chain, .laptop__chain {
    height: 60%;
    margin-bottom: 10px;
    width: 100%;
    background-color: #F2F2F2;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 60px 30px 30px 30px 30px 30px;
}

.machine__block {
  background: linear-gradient(to top right, #5F46B1 30%, #FF2EA0 100%);
  width: 100px;
  height: 60px;
  font-size: 12px;
  text-align: center;
  padding-top: 30px;
  color: #fff;
  border-radius: 5px;
  margin: auto;
}

.laptop__chain {
    height: 40%;
}
</style>