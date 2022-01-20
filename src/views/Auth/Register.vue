<template>
  <div class="container my-3">
    <b-form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">Form Register</h1>
      <b-form-group id="name-group">
        <label for="name">Name <span class="text-danger">*</span></label>
        <b-form-input id="name" type="text" required />
      </b-form-group>
      <b-form-group id="email-group">
        <label for="email">Email <span class="text-danger">*</span></label>
        <b-form-input id="email" type="email" required />
      </b-form-group>
      <b-form-group id="password-group">
        <label for="password">
          Password <span class="text-danger">*</span>
        </label>
        <b-form-input id="password" type="password" required />
      </b-form-group>
      <b-form-group id="password-confirmation-group">
        <label for="password_confirmation">
          Password Cofirmation <span class="text-danger">*</span>
        </label>
        <b-form-input id="password_confirmation" type="password" required />
      </b-form-group>
      <button class="btn btn-primary btn-block" type="submit">
        Create Account
      </button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
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
