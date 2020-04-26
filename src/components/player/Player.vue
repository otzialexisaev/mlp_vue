<template>
  <div id="playercontainer">
    <div class="playerbuttons">
      <img
        @dragstart="preventDefault"
        src="../../assets/img/playercontainer/prevBtn.jpg"
        id="prevBtn"
        class="btnWrapper"
      />
      <img
        @dragstart="preventDefault"
        @click="playPause"
        src="../../assets/img/playercontainer/playBtn.jpg"
        id="playPauseBtn"
        class="btnWrapper"
      />
      <img
        @dragstart="preventDefault"
        src="../../assets/img/playercontainer/nextBtn.jpg"
        id="nextBtn"
        class="btnWrapper"
      />
    </div>
    <div class="songInfoContainer">
      <div class="titlePlusTime">
        <div id="songTitle">No song selected</div>
        <div id="songTime">0:00 - 0:00</div>
      </div>
      <div class="scrubber" id="scrubber">
        <div id="progressBar"></div>
      </div>
    </div>
    <div class="playerbuttons">
      <img
        @click="toggleRandom"
        @dragstart="preventDefault"
        :class="{ btnHighlight: random }"
        src="../../assets/img/playercontainer/randomBtn.jpg"
        id="randomBtn"
        class="btnWrapper"
      />
      <img
        @click="toggleRepeatOne"
        @dragstart="preventDefault"
        :class="{ btnHighlight: repeatOne }"
        src="../../assets/img/playercontainer/repeatAllBtn.jpg"
        id="repeatAllBtn"
        class="btnWrapper"
      />
      <img
        @click="toggleRepeatAll"
        @dragstart="preventDefault"
        :class="{ btnHighlight: repeatAll }"
        src="../../assets/img/playercontainer/repeatOneBtn.jpg"
        id="repeatOneBtn"
        class="btnWrapper"
      />
    </div>
    <div
      style="position: absolute;top: -16px;right: -164px;/* float: right; */"
    >
      <div id="audioSliderContainer">
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          class="slider"
          id="myRange"
        />
      </div>
    </div>
    <audio id="audio" controls :src="src"></audio>
  </div>
</template>

<script>
// import Player from "@/assets/js/player/newPlayer";
export default {
  data() {
    return {
      audio: null,
      random: false,
      repeatOne: false,
      repeatAll: false,
      src: "./files/Classmate.mp3",
    };
  },
  beforeMount() {},
  methods: {
    playPause() {
      if (this.audio.paused) this.audio.play();
      else this.audio.pause();
    },
    toggleRandom() {
      this.random = !this.random;
    },
    toggleRepeatOne() {
      this.repeatOne = !this.repeatOne;
    },
    toggleRepeatAll() {
      this.repeatAll = !this.repeatAll;
    },
    preventDefault(e) {
      e.preventDefault();
    },
  },
  mounted() {
    this.audio = document.getElementById("audio");
  },
};
</script>

<style>
#playercontainer {
  margin-top: 3px;
  width: 100%;
  min-width: 508px;
  height: 54px;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  position: sticky;
  top: 10px;
  background: white;
  z-index: 99998;
}

.playerbuttons {
  min-width: 150px;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
}

.leftSideBtns {
  min-width: 150px;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
}

.rightSideBtns {
  min-width: 150px;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
}

.btnWrapper {
  float: left;
  height: 46px;
  width: 46px;
  transition-duration: 0.3s;
  border: 3px solid #7fdbff;
  border-radius: 4px;
  cursor: pointer;
}

.btnHighlight {
  border: 3px solid black !important;
}

#scrubber {
  height: 20px;
  border-radius: 4px;
  background: -webkit-linear-gradient(left, #c9d6ff, rgb(201, 224, 255));
  width: 100%;
  margin-top: 3px;
  overflow: hidden;
}

#scrubber #progressBar {
  background: -webkit-linear-gradient(left, #2a2c97, #4155c5, #2a2c97);
  width: 0px;
  height: inherit;
  border-radius: 4px;
}

.songInfoContainer {
  flex-grow: 1;
  min-width: 208px;
  padding: 0px 5px;
}

.songInfoContainer .titlePlusTime {
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
}

#songTitle {
  /*flex-grow: 1;*/
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#songTime {
  flex-shrink: 0;
  /*float: right;*/
}

/*#playlistMenu {*/
/*padding: 10px 10px 1px 10px;*/
/*background: -webkit-linear-gradient(left, #D66D75, #E29587);*/
/*width: 200px;*/
/*border-radius: 10px;*/
/*margin-left: 950px;*/
/*position: fixed;*/
/*display: none;*/
/*z-index: 99998;*/
/*}*/

#audioSliderContainer {
  position: sticky;
  top: -4px;
  width: 150px;
  /* Width of the outside container */
  transform: rotate(90deg);
  transform-origin: left;
  /*position: relative;*/
  /*left: 1183px;*/
  /*top: -45px;*/
}

/* The slider itself */

.slider {
  -webkit-appearance: none;
  /* Override default CSS styles */
  width: 100%;
  /* Full-width */
  height: 25px;
  /* Specified height */
  background: #d3d3d3;
  /* Grey background */
  outline: none;
  /* Remove outline */
  opacity: 0.7;
  /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s;
  /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
}

/* Mouse-over effects */

.slider:hover {
  opacity: 1;
  /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  /* Override default look */
  width: 25px;
  /* Set a specific slider handle width */
  height: 25px;
  /* Slider handle height */
  background: #5d7ada;
  /* Green background */
  cursor: pointer;
  /* Cursor on hover */
}

#top-menu-container {
  margin: 3px 0px;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  padding: 10px 10px 10px 10px;
  grid-gap: 10px;
  background-color: #5d7ada;
  border-radius: 4px;
  height: 50px;
}

.top-menu-item {
  width: 100%;
  height: 30px;
  min-width: 100%;
  position: relative;
  background: rgb(223, 228, 248);
  text-align: center;
  border-radius: 10px;
  font-size: 15px;
  padding: 10px;
  transition-duration: 0.7s;
}

.top-menu-item:hover {
  background: -webkit-linear-gradient(
    left,
    #7f7fd5,
    #86a8e7,
    rgb(145, 201, 234)
  );
  color: white;
  border-radius: 4px;
}

.top-menu-item p {
  margin-top: -5px;
}
</style>
