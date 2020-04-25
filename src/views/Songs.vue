<template>
  <div></div>
</template>

<script>
import Player from "@/assets/js/player/Player";
export default {
  mounted() {
    console.log(123);

    let player = new Player();
    player.init();
    // Player.init();
  }
};
</script>

<style>
</style>