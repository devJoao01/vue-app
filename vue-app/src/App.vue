<template>
  <v-app>
    <Header />
    <appBar />
    <router-view />
  </v-app>
</template>

<script>
import Header from './components/The-Header';
import appBar from './components/AppBar.vue';

export default {
  name: 'App',

  components: {
    Header,
    appBar,
  },
}
</script>
