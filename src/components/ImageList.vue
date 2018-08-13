<template lang="html">
  <div class="">
    <div v-if="isLoggedIn" class="image-container">
      <img v-for="image in allImages" :src="image.link" :key="image.id"/>
    </div>
    <h2 v-else>Please Login to view gallery</h2>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'ImageList',
  computed: mapGetters(['allImages', 'isLoggedIn']),
  methods: mapActions(['fetchImages']),
  created(){
    this.fetchImages();
  }
}
</script>

<style lang="css" scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}

img {
  max-width: 100%;
  padding: 5px;
}
</style>
