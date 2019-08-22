<template>
  <div class="use-case">
    <div class="row centered">
      <div class="box">
        <div class="wallet">
          <h3>User Wallets</h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="box">
        <button>Headphone</button>
      </div>
      <div class="box">
        <button>Laptop</button>
      </div>
    </div>
    <div class="row">
      <div class="box">
        <div class="wallet">
          <h3>M1</h3>
        </div>
      </div>
      <div class="box">
        <div class="wallet">
          <h3>M2</h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="box hidden">animation</div>
      <div class="box hidden">animation</div>
    </div>
    <div class="row">
      <div class="box">
        <div class="wallet">
          <h3>P1</h3>
        </div>
      </div>
      <div class="box">
        <div class="wallet">
          <h3>M2</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row {
  margin: 0;

  display: flex;

  &.centered {
    justify-content: center;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    opacity: 1;
    padding: 15px 20px;
    &.hidden {
      opacity: 0;
    }
  }

  .wallet {
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

    h3 {
      font-size: 1em;
      color: var(--akita-light);
    }
  }
}
</style>