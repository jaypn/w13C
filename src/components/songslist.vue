<template>
  <div id="song_list">
    <h1>this is the Songs list</h1>
    <song-item v-for=" song in songs " :key=" song.author " :song="song" :isplaylist="false" />
  </div>
</template>

<script>
import songItem from "./songs.vue";
export default {
  name: "song-list",
  components: {
    songItem
  },
  computed: {
    songs: function() {
      return this.$store.state.songs;
    }
  }
};
</script>

<style scoped>
#song_list {
  display: block;
}
</style>
