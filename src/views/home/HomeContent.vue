<template>
  <div>
    <b-jumbotron header="PMRS" :lead="$t('application_name')">
      <p>
        {{ $t('application_detail') }}
      </p>
      <div v-if="!isAuthenticated">
        <router-link to="/login" class="btn btn-success mr-1">
          <b-icon icon="person"></b-icon> {{ $t('auth.login') }}
        </router-link>
        <router-link to="/register" class="btn btn-primary">
          <b-icon icon="person-plus"></b-icon> {{ $t('auth.register') }}
        </router-link>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HomeContent',
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters({ isAuthenticated: 'auth/isAuthenticated' }),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
