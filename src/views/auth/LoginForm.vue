<template>
  <form @submit.prevent="doLogin" class="form-signin" autocomplete="off">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-group">
      <label for="email">
        Email address <span class="text-danger">*</span>
      </label>
      <input
        v-model="username"
        type="email"
        class="form-control"
        id="email"
        :class="{ 'is-invalid': $v.username.$error }"
      />
      <div class="invalid-feedback" v-if="!$v.username.required">
        {{ $t('validations.username_required') }}
      </div>
    </div>
    <div class="form-group">
      <label for="password">
        Password <span class="text-danger">*</span>
      </label>
      <input
        v-model="password"
        type="password"
        class="form-control"
        id="password"
        :class="{ 'is-invalid': $v.password.$error }"
      />
      <div class="invalid-feedback" v-if="!$v.password.required">
        {{ $t('validations.password_required') }}
      </div>
    </div>
    <button type="submit" class="w-100 btn btn-lg btn-primary">Sign in</button>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  validations: {
    username: {
      required,
    },
    password: {
      required,
    },
  },
  methods: {
    ...mapActions(['login']),
    doLogin() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        let data = {
          username: this.username,
          password: this.password,
        }
        this.login(data)
      }
    },
  },
}
</script>

<style scoped></style>
