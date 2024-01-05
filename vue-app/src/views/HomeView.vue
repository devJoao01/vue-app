<template>
  <Header />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Header from '../components/The-Header';

export default defineComponent({
  name: 'HomeView',

  components: {
    Header,
  },
});
</script>
