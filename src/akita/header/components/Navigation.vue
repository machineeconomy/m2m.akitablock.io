<template>
  <nav>
    <ul class="navigation">
      <li class="navigation__item">
        <a href="#" class="navigation__link navigation__logo"></a>
      </li>

      <li v-for="li in navigation" :class="li.liClass">
        <a :href="li.href" :path="li.path" :block="li.block" @click="scroll" :class="li.aClass">
         {{li.text}}
        </a>
    </li>

    <li class="navigation__item navigation__language">
      <span class="change__language">
        <!--<a href="#" class="change__language navigation__link">EN</a> /
        <a href="#DE" class="change__language navigation__link">DE</a>-->
      </span>
    </li>
  </ul>
  <navigationButton></navigationButton>
  </nav>
</template>

<script>
import NavigationButton from "./NavigationButton";

export default {
  name: "Navigation",
  components: {
    NavigationButton
  },
  data() {
    return {
      navigation: [
        {text: "Live Demo", liClass:  "navigation__item navigation__element", aClass: "navigation__link", href: "#", path: "main", block: "start"},
        {text: "M2M Supply Chain",   liClass:  "navigation__item navigation__element", aClass: "navigation__link", href: "#", path: ".section3", block: "start"},
        {text: "Services",  liClass:  "navigation__item navigation__element", aClass: "navigation__link", href: "#", path: ".section4", block: "center"},
        {text: "Engage Now",    liClass:  "navigation__item navigation__element", aClass: "navigation__link", href: "#", path: "footer", block: "start"}
      ]
    };
  },
  methods: {
    scroll(e) {
      e.preventDefault();
      let path = e.target.attributes.path.value,
          block = e.target.attributes.block.value
      document.querySelector(path).scrollIntoView({block: block, behavior: "smooth"});
    }
  }
};
</script>

<style>
  nav {
    padding-top: 50px;
    position: relative;
    z-index: 10;
  }

  .navigation {
    list-style: none;
    display: flex;
    margin: 0px;
    padding: 0px;
  }

  .navigation__link, .change__language {
    color: #fff;
    white-space: nowrap;
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
    display: block;
    width: 170px;
    height: 85px;
    background: url("./../../../../public/akita_logo_white.png") no-repeat;
    background-size: 100%;
    position: relative;
    top: -35px;
  }

  .navigation__logo a{
    font-weight: bold;
  }

  .navigation__link:hover {
    text-decoration: underline;
    color: #fff;
  }

  @media (max-width: 800px) {
  .navigation__element {
    display: none;
  }

  .navigation__link {
    color: #000;
  }

  .navigation__language {
    top: -40px;
  }
}
</style>