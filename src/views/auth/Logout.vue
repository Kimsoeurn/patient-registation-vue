<template>
  <li>
    <a @click.prevent="logout" class="dropdown-item"> Logout </a>
  </li>
</template>

<script>
export default {
  name: 'Logout',
  methods: {
    logout() {
      this.$store.dispatch('doLogout').then(() => {
        this.$router.push('/login')
      })
    },
  },
}
</script>

<style scoped></style>
