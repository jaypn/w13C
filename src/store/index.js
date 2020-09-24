import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songs: [{ name: "Single Ladies", author: "Beyonce" }, { name: "Better man", author: "virginia" }, { name: "I dont care", author: "Justin bieber" }],
    playlist: []
  },
  mutations: {
    addToplaylist: function (state, addedSong) {
      state.playlist.push(addedSong);
      for (let i = 0; i < state.songs.length; i++) {
        if (state.songs[i] == addedSong) {
          state.songs.splice(i, 1);
        }
      }


    },
    removefromplaylist: function (state, deletedSong) {

      state.songs.push(deletedSong);
      for (let i = 0; i < state.playlist.length; i++) {
        if (state.playlist[i] == deletedSong) {
          state.playlist.splice(i, 1);
        }
      }

    }
  },
  actions: {},
  modules: {}
});