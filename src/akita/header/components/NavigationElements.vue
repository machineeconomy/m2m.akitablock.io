<template>
  <ul class="navigation">
    <li class="navigation__item">
        <a href="#" class="navigation__link navigation__logo"></a>
    </li>

    <li v-for="li in nav" :class="li.liClass">
      <a :href="li.href" :path="li.path" @click="scroll" :class="li.aClass">
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
</template>

<script>
export default {
  name: "NavigationElements",
  data() {
    return {
      nav: [
        {text: "Live Demo", liClass:  "navigation__item navigation__element", aClass: "navigation__link", href: "#", path: "main"},
        {text: "M2M Supply Chain",   liClass:  "navigation__item navigation__element", aClass: "navigation__link", href: "#", path: ".section3"},
        {text: "Services",  liClass:  "navigation__item navigation__element", aClass: "navigation__link", href: "#", path: ".section4"},
        {text: "Engage Now",    liClass:  "navigation__item navigation__element", aClass: "navigation__link", href: "#", path: "footer"}
      ]
    };
  },
  methods: {
    scroll(e) {
      e.preventDefault();
      let path = e.target.attributes.path.value;
      document.querySelector(path).scrollIntoView({block: "start", behavior: "smooth"});
    }
  },
};
</script>

<style>
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

  @media (max-width: 500px) {
  .navigation__element {
    display: none;
  }
  .navigation__language {
    top: -40px;
  }
}

</style>