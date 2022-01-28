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
            <li class="nav-item">
              <router-link to="/patients" class="nav-link">
                {{ $t('navbar.patients') }}
              </router-link>
            </li>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <language></language>
            <b-nav-item-dropdown right v-if="token">
              <!-- Using 'button-content' slot -->
              <template #button-content>User</template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <logout></logout>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import Language from './Language.vue'
import Logout from '../views/auth/Logout'

export default {
  name: 'Navbar',
  computed: {
    token() {
      return this.$store.getters.token
    },
  },
  components: {
    Logout,
    Language,
  },
}
</script>
