<template>
  <div class="songs-grid">
    <div :key="index" v-for="(value, index) in $store.state.songs">
      <SongItem @song-clicked="songClicked" :title="value.title" :songIndex="index"></SongItem>
    </div>
  </div>
</template>

<script>
import SongItem from "@/components/player/SongItem";
export default {
  components: {
    SongItem
  },
  methods: {
    songClicked() {
      this.$emit("song-clicked");
    }
  }
};
</script>

<style>
.songs-grid {
  margin: 3px 0px;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  padding: 10px 10px 10px 10px;
  grid-gap: 10px;
  background-color: #5d7ada;
  border-radius: 4px;
}
</style>
