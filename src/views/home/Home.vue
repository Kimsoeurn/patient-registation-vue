<template>
  <div class="home text-center">
    <home-content></home-content>
  </div>
</template>

<script>
import HomeContent from './HomeContent.vue'

export default {
  name: 'Home',
  components: {
    HomeContent,
  },
}
</script>
