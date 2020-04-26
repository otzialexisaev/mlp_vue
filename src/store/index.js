import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: {
      14: {
        title: 'Classmate',
        src: './files/Classmate.mp3'
      },
      15: {
        title: 'Sanpo',
        src: './files/Sanpo.mp3'
      }
    }
  },
  mutations: {
    playPause (state, songId) {
      console.log('Play ' + songId)
      console.log(state.songs[songId])
    }
  },
  actions: {},
  modules: {}
})
