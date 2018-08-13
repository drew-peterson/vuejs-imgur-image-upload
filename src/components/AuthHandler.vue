<template lang="html">
  <div class="">
    Please wait...
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'AuthHandler',
  methods: mapActions(['finalizeLogin']),
  // lifecyle method
  created(){
    this.finalizeLogin(window.location.hash);
  }
}
</script>

<style lang="css">
</style>
