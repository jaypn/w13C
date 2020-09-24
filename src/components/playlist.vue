<template>
  <div id="playlist">
    <h2>Playlist</h2>
    <song-item v-for="song in songs" :key="song.author" :song="song" :isplaylist="true" />
  </div>
</template>

<script>
import songItem from "./songs.vue";
export default {
  name: "play-list",
  components: {
    songItem
  },
  computed: {
    songs: function() {
      return this.$store.state.playlist;
    }
  }
};
</script>
