<template>
  <v-bottom-navigation class="component-mobile">
    <v-btn value="recent">
      <v-icon>mdi-history</v-icon>
      <span>Recent</span>
    </v-btn>

    <v-btn value="favorites">
      <v-icon>mdi-heart</v-icon>

      <span>Favorites</span>
    </v-btn>

    <v-btn value="nearby">
      <v-icon>mdi-map-marker</v-icon>

      <span>Nearby</span>
    </v-btn>

    <TheSidebar />
  </v-bottom-navigation>
</template>
  
<script>
export default {
}
</script>

<style scoped>
@import '../sass/app-bar.scss';
</style>