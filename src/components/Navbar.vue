<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div class="container-fluid">
        <b-navbar-brand href="#">PMRS</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                {{ $t('navbar.home') }}
              </router-link>
            </li>
            <li class="nav-item" v-if="isAuthenticated">
              <router-link to="/patients" class="nav-link">
                {{ $t('navbar.patients') }}
              </router-link>
            </li>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <language></language>
            <b-nav-item-dropdown right v-if="isAuthenticated">
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>{{ currentUser.name }}</em>
              </template>
              <b-dropdown-item @click.prevent="logout" href="#">
                Sign Out
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import Language from './Language.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  components: {
    Language,
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      currentUser: 'auth/currentUser',
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
