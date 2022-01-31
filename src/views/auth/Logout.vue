<template>
  <li v-if="!isAuthenticated">
    <a @click.prevent="logout" class="dropdown-item"> Logout </a>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Logout',
  computed: {
    ...mapGetters('auth', {
      isAuthenticated: 'isAuthenticated',
    }),
  },
  methods: {
    logout() {
      let vm = this
      this.$store.dispatch('auth/logout').then(() => {
        vm.$router.push('/login')
      })
    },
  },
}
</script>

<style scoped></style>
