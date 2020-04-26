<template>
  <div class="songs-grid">
    <div :key="id" v-for="(value, id) in $store.state.songs">
      <SongItem :title="value.title" :songId="id">song</SongItem>
    </div>
  </div>
</template>

<script>
import SongItem from "@/components/player/SongItem";
export default {
  components: {
    SongItem,
  },
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
