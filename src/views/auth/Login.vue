<template>
  <div class="container my-3">
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from './LoginForm'

export default {
  name: 'Login',
  components: { LoginForm },
}
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
</style>
