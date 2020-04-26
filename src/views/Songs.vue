<template>
  <div>
    <PlayerContainer></PlayerContainer>
    <SongsContainer></SongsContainer>
  </div>
</template>

<script>
import PlayerContainer from "@/components/player/Player";
import SongsContainer from "@/components/player/SongsContainer";
export default {
  components: {
    PlayerContainer,
    SongsContainer,
  },
  mounted() {
    console.log(this.$store);
    for (let value in this.$store.state.songs) {
      console.log(value);
    }
    // player.init();
    // Player.init();
  },
};
</script>

<style></style>
