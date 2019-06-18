<template>
  <nav>
    <navigationElements></navigationElements>
    <navigationButton></navigationButton>
  </nav>
</template>

<script>
import NavigationButton from "./NavigationButton";
import NavigationElements from "./NavigationElements";

export default {
  name: "Navigation",
  components: {
    NavigationButton,
    NavigationElements
  }
}
</script>

<style>
  nav {
    padding-top: 50px;
    position: relative;
  }
</style>