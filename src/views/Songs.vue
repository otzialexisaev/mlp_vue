<template>
  <div>
    <PlayerContainer
      ref="PlayerContainer"
      :newCurrentSong="newCurrentSong"
    ></PlayerContainer>
    <SongsContainer @song-clicked="songClicked"></SongsContainer>
  </div>
</template>

<script>
import PlayerContainer from "@/components/player/Player";
import SongsContainer from "@/components/player/SongsContainer";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      newCurrentSong: {},
    };
  },
  components: {
    PlayerContainer,
    SongsContainer,
  },
  methods: {
    ...mapActions(["fetchSongs"]),
    songClicked() {
      this.$refs.PlayerContainer.playPause();
    },
  },
  mounted() {},
  created() {
    console.log("created");
    this.fetchSongs();
  },
};
</script>

<style></style>
