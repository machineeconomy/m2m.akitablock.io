<template>
  <nav>
    <ul class="navigation">
      <li class="navigation__item navigation__logo">
        <h2><a href="#" class="navigation__link">AKITA</a></h2>
      </li>
      <li class="navigation__item">
        <a class="navigation__link" href="#">LiveDemo</a>
      </li>
      <li class="navigation__item">
        <a class="navigation__link" href="#">Process</a>
      </li>
      <li class="navigation__item">
        <a class="navigation__link" href="#">Services</a>
      </li>
      <li class="navigation__item">
        <a class="navigation__link" href="#">Engage</a>
      </li>
      <li class="navigation__item navigation__language">
        <span class="change__language">
          <a href="#" class="change__language navigation__link">EN</a> / 
          <a href="#" class="change__language navigation__link">DE</a>
          </span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
  nav {
    padding-top: 50px;
  }

  .navigation {
    list-style: none;
    display: flex;
    margin: 0px;
    padding: 0px;
  }

  .navigation__link, .change__language {
    color: #fff;
  }

  .navigation__item {
    flex: 1 1 auto;
  }

  .navigation__language {
    flex: 3 1 auto;
    text-align: right;
    position: relative;
    top: -20px;
  }

  .navigation__logo {
    position: relative;
    top: -12px;
  }

  @media (max-width: 425px) {
  .navigation {
    flex-direction: column;
  }
  .navigation__language {
    top: -180px;
  }
}

</style>