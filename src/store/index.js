import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentSong: {
      id: false,
      title: 'No song selected',
      src: false,
      index: false
    },
    songs: [
      {
        id: 14,
        title: 'Classmate',
        src: './files/Classmate.mp3'
      },
      {
        id: 16,
        title: 'Sanpo',
        src: './files/Sanpo.mp3'
      }
    ]
  },
  getters: {
    getCurrentSong: state => {
      return state.currentSong
    },
    getSongs: state => {
      return state.songs
    },
    getSongsCount: state => {
      return state.songs.length
    }
  },
  mutations: {
    setCurrentSong (state, songIndex) {
      state.currentSong = {
        id: state.songs[songIndex].id,
        title: state.songs[songIndex].title,
        src: state.songs[songIndex].src,
        index: songIndex
      }
      // console.log(state.songs[songIndex])

      // console.log('Play ' + songIndex)
      // console.log(state.songs[songIndex])
      // console.log('store -> setCurrentSong')
    }
  },
  actions: {},
  modules: {}
})
