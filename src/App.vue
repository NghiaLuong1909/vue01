<template>
  <theHeader></theHeader>
  <theMenu></theMenu>
  <theMain></theMain>
</template>

<script>
import theHeader from './components/layout/theHeader.vue';
import theMain from './components/layout/theMain.vue';
import theMenu from './components/layout/theMenu.vue';

export default {
  name: 'App',
  components: {
    theHeader,
    theMenu,
    theMain
  },
  data() {
    return {
      
    }
  },
}
</script>

<style scoped>
#app {
  margin: 0;
}
</style>
