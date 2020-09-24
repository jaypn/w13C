<template>
  <div>
    <h1>DJ Jaypzo</h1>
    <div id="layout">
      <song-list />
      <play-list />
    </div>
  </div>
</template>

<script>
import playList from "./playlist.vue";
import songList from "./songslist.vue";
export default {
  name: "page-body",
  components: {
    songList,
    playList
  }
};
</script>

<style scoped>
#layout {
  display: block;
}
</style>
