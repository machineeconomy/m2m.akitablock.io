<template>
  <button class="standart__button" path=".LiveDemo" block="start" @click="scroll">Live Demo</button>
</template>

<script>
export default {
  name: "StandartButton",
  methods: {
    scroll(e) {
      e.preventDefault();
      let path = e.target.attributes.path.value,
        block = e.target.attributes.block.value;
      document
        .querySelector(path)
        .scrollIntoView({ block: block, behavior: "smooth" });
    }
  }
};
</script>

<style>
.standart__button {
  background-color: #eb479d;
  width: 190px;
  height: 60px;
  border: 1px solid #eb479d;
  border-radius: 10px;
  color: #fff;
  font-size: 24px;
  text-transform: uppercase;
}
.standart__button:hover {
  border: 1px solid #fff;
}
</style>