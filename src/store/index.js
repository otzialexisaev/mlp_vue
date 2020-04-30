import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
  actions: {
    async fetchSongs ({ commit }) {
      let response = await axios.get('http://mylaravelplaylist.com/api/songs')
      commit('setSongs', response.data)
    }
  },
  mutations: {
    setSongs (state, songs) {
      state.songs = songs
    },
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
  modules: {}
})
