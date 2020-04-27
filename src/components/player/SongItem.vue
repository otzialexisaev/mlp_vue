<template>
  <div @click="songClicked" class="song-wrapper">
    <div
      class="song-container notextselect"
      :class="{selected: checkSelected}"
      :data-songId="songIndex"
    >{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    songIndex: {}
  },
  methods: {
    async songClicked() {
      await this.$store.commit("setCurrentSong", this.$props.songIndex);
      this.$emit("song-clicked");
    }
  },
  computed: {
    checkSelected() {
      return this.$props.songIndex === this.$store.getters.getCurrentSong.index;
    }
  }
};
</script>

<style>
.song-wrapper {
  position: relative;
  height: 100%;
}

.song-container {
  width: 100%;
  height: 100%;
  min-width: 100%;
  position: relative;
  background: rgb(223, 228, 248);
  text-align: center;
  border-radius: 10px;
  font-size: 15px;
  padding: 10px;
  transition: 0.4s ease-out;
}

.selected {
  /*font-weight: bold;*/
  color: white;
  background: #2b3492 !important;
}

.selected:hover,
.song-container-selected {
  background: #2f53d0 !important;
  color: white;
  border-radius: 4px;
}

/* Правила чтобы запретить юзеру выделять названия песен */
.notextselect {
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -khtml-user-select: none;
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently
        supported by Chrome and Opera */
}
</style>
