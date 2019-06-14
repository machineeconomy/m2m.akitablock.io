import Vue from "vue";
import Router from "vue-router";
import Header from "./akita/header/Header";
import Footer from "./akita/footer/Footer";
import Main from "./akita/main/Main";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "akita",
      components: {
        header: Header,
        default: Main,
        footer: Footer
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
