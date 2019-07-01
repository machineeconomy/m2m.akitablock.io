<template>
  <div class="transfer_animation-container">
    <img
      class="transfer_animation transfer_animation__token"
      :class="{'active': active, ['transfer_animation__token__' + position]: position }"
      src="../../../../assets/img/iota_blue_small.png"
      alt
    />
    <img
      v-if="provider"
      class="transfer_animation transfer_animation__line"
      :class="{'active': active, ['transfer_animation__line__' + position]: position}"
      src="../../../../assets/img/value_transfer_anim_provider.gif"
      alt
    />
    <img
      class="transfer_animation transfer_animation__line"
      v-else
      :class="{'active': active, 'transfer_animation__flip_transfer_img': flip_transfer_img, ['transfer_animation__line__' + position]: position}"
      src="../../../../assets/img/value_transfer_anim_machine.gif"
      alt
    />
  </div>
</template>

<script>
export default {
  name: "MachineTransferAnimation",
  props: ["active", "provider", "flip_transfer_img", "position"],
  data() {
    return {};
  },
  created() {
    console.log("this.position", this.position);
  }
};
</script>

<style lang="scss" scoped>
.transfer_animation-container {
  .transfer_animation {
    position: relative;
    visibility: hidden;
    left: 180px;

    &__flip_transfer_img {
      -webkit-transform: scaleY(-1);
      transform: scaleY(-1);
    }
    &__token {
      left: 90%;
      width: 50px;
      height: 50px;
       &__top {
        top: 120px;
      }
      &__bottom {
        top: 80px;
      }
    }
    &__line {
      padding-right: 30px;
      &__top {
        top: 120px;
      }
      &__bottom {
        top: 80px;
      }
    }
  }
  .active {
    visibility: visible;
  }
}
</style>
