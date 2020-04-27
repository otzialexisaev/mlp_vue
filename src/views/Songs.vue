<template>
  <div>
    <PlayerContainer ref="PlayerContainer" :newCurrentSong="newCurrentSong"></PlayerContainer>
    <SongsContainer @song-clicked="songClicked"></SongsContainer>
  </div>
</template>

<script>
import PlayerContainer from "@/components/player/Player";
import SongsContainer from "@/components/player/SongsContainer";
export default {
  data() {
    return {
      newCurrentSong: {}
    };
  },
  components: {
    PlayerContainer,
    SongsContainer
  },
  methods: {
    songClicked() {
      this.$refs.PlayerContainer.playPause();
    }
  },
  mounted() {}
};
</script>

<style></style>
