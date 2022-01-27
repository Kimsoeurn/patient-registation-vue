<template>
  <div class="home text-center">
    <home-content></home-content>
  </div>
</template>

<script>
import HomeContent from '../components/HomeContent.vue'

export default {
  name: 'Home',
  components: {
    HomeContent,
  },
}
</script>
