<template lang="html">
    <div class="ui secondary pointing menu">

    <router-link to="/" class="active item">Image Storage</router-link>

    <div class="right menu">
      <div class="horizontal" v-if="isLoggedIn">
        <router-link to='/' class="item" >Galleries</router-link>
        <router-link to='/upload' class="item">Upload</router-link>
        <a class="item" @click="logout">logout</a>
      </div>
      <!-- v-else has to be sibling to v-if -->
      <a class="ui item" @click="login" v-else>Log In</a>
    </div>
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'AppHeader',
  computed: mapGetters(['isLoggedIn']), // connect vuex getters
  methods: mapActions(['login', 'logout']) // connect vuex action with component
};
</script>

<style lang="css" scoped>
  .horizontal {
    display: flex;
    flex-direction: row;
  }

</style>
