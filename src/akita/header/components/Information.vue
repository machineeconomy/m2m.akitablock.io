<template>
  <div class="information">
    <div class="information__block">
      <h1 class="title information__title">
        Machine Economy
        <br>Experience blockchain live!
      </h1>
    </div>
    <div class="information__block">
      <p class="text information__text">99% of all companies are talking about blockchain and DLT...</p>
      <p class="text information__text">Meanwhile we are already building a physical Machine Economy</p>
      <p class="text information__text">and demonstrate automated machine-to-machine payment</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.information {
  margin-top: 200px;
}

.information__block {
  margin-bottom: 20px;
}

.information__text,
.information__title {
  color: #fff;  
}

@media (max-width: 800px) {
  .information {
    margin-top: 100px;
  }
}
</style>
