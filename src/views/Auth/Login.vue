<template>
  <div class="container my-3">
    <b-form :class="['form-signin']">
      <h3>{{ $t('auth.please_sign_in') }}</h3>
      <b-form-group id="email-group">
        <label for="email">
          {{ $t('auth.email') }} <span class="text-danger">*</span>
        </label>
        <b-form-input id="email" type="email" required />
      </b-form-group>
      <b-form-group id="password-group">
        <label for="password">
          {{ $t('auth.password') }} <span class="text-danger">*</span>
        </label>
        <b-form-input id="password" type="password" required />
      </b-form-group>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" />
          {{ $t('auth.remember_me') }}
        </label>
      </div>
      <b-button variant="primary" :class="['btn-block']" type="submit">
        {{ $t('auth.sign_in') }}
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
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
