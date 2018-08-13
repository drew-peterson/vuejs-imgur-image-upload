<template lang="html">
  <div class="">
    <AppHeader />
    <div class="ui container">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style lang="css">
</style>
