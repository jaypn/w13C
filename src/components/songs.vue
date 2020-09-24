<template>
<div id="song">
    <h2> {{ song.name }}</h2>
    <h3> {{song.author }}</h3>

    <button @click="addToPlaylist(song)"  v-if="!isplaylist"> add to playlist </button>
    <button @click="removefromplaylist(song)" v-else> remove from playlist </button>

</div>
    
</template>

<script>
export default {
    name:"song-item",
    props:{
        song : {
            type : Object,
            required : true
        },
        isplaylist : { 
            type : Boolean,
            required:true
        }
    },
    methods:{
      addToPlaylist:function(song){
          this.$store.commit('addToplaylist', song);
      },
      removefromplaylist : function(song){
          this.$store.commit('removefromplaylist', song);
      }  
    }
    
    
}
</script>

<style scoped>
</style>