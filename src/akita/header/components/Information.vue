<template>
  <div class="information">
    <div class="information__title">
      <h1>Machine Economy
        <br>Experience blockchain live!
      </h1>
    </div>
    <div class="information__text">
      <p>
        99% of all companies are talking about blockchain...
        <br>Meanwhile we are already building a physical Machine Economy<br/>
        and demonstrate automated machine-to-machine payment
      </p>
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

.information__title h1 {
  color: #fff;
  padding-bottom: 10px;
  font-size: 64px;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
}

.information__text p {
  color: #fff;
  padding-bottom: 10px;
  font-size: 20px;
  line-height: 1.3
}

@media (max-width: 1500px) {
  .information {
    margin-top: 100px;
  }
}

@media (max-width: 1200px) {
  .information__title h1 {
    font-size: 54px;
  }
  .information__text p {
    font-size: 18px;
  }
}

@media (max-width: 1000px) {
  .information__title h1 {
    font-size: 48px;
  }
  .information__text p {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  
  .information__title h1 {
    font-size: 40px;
  }
}

@media (max-width: 425px) {
  .information {
    margin-top: 50px;
  }

  .information__title h1 {
    font-size: 32px;
  }
}

</style>