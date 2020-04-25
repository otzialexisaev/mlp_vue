<template>
  <div>
    <PlayerContainer></PlayerContainer>
    <SongsContainer> </SongsContainer>
  </div>
</template>

<script>
import PlayerClass from "@/assets/js/player/newPlayer";
import PlayerContainer from "@/components/player/Player";
import SongsContainer from "@/components/player/SongsContainer";
export default {
  components: {
    PlayerContainer,
    SongsContainer,
  },
  mounted() {
    let player = new PlayerClass();
    console.log(player);

    // player.init();
    // Player.init();
  },
};
</script>

<style></style>
