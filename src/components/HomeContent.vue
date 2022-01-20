<template>
  <div>
    <b-jumbotron header="PMRS" lead="Patient Registration Management System">
      <p>
        Simple Single Page Application Using VueJs Front-end and Laravel
        Back-end Restful API.
      </p>
      <router-link to="/login" class="btn btn-success mr-1">
        <b-icon icon="person"></b-icon> Login
      </router-link>
      <router-link to="/register" class="btn btn-primary">
        <b-icon icon="person-plus"></b-icon> Register
      </router-link>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
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
