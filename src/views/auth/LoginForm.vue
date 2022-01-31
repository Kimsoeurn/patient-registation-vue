<template>
  <form @submit.prevent="signIn" class="form-signin" autocomplete="off">
    <h1 class="h3 mb-3 fw-normal">{{ $t('auth.please_sign_in') }}</h1>
    <p v-if="authError" class="alert alert-danger">Invalid email / password</p>
    <div class="form-group">
      <label for="email">
        {{ $t('auth.email') }} <span class="text-danger">*</span>
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
        {{ $t('auth.password') }} <span class="text-danger">*</span>
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
    <button type="submit" class="w-100 btn btn-lg btn-primary">
      {{ $t('auth.sign_in') }}
    </button>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters({
      authError: 'auth/authError',
    }),
  },
  methods: {
    signIn() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        let data = {
          username: this.username,
          password: this.password,
        }
        this.$store
          .dispatch('auth/login', data)
          .then(() => {
            this.$store.dispatch('auth/profile')
            this.$router.push('/')
          })
          .catch(() => {
            this.$store.commit('auth/SET_AUTH_ERROR', true)
          })
      }
    },
  },
}
</script>

<style scoped></style>
