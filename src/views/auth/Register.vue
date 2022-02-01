<template>
  <div class="container my-3">
    <b-form class="form-signin" @submit.prevent="register">
      <h1 class="h3 mb-3 font-weight-normal">{{ $t('auth.form_register') }}</h1>
      <ul>
        <li v-for="error in errors" :key="error.message" class="text-danger">
          {{ error[0] }}
        </li>
      </ul>
      <div class="form-group">
        <label for="name">
          {{ $t('auth.name') }} <span class="text-danger">*</span>
        </label>
        <b-form-input
          v-model.trim="$v.user.name.$model"
          id="name"
          type="text"
          :class="{ 'is-invalid': $v.user.name.$error }"
        />
        <div class="invalid-feedback" v-if="!$v.user.name.required">
          {{ $t('validations.name_required') }}
        </div>
      </div>
      <div class="form-group">
        <label for="email">
          {{ $t('auth.email') }} <span class="text-danger">*</span>
        </label>
        <b-form-input
          v-model.trim="$v.user.email.$model"
          id="email"
          type="email"
          :class="{ 'is-invalid': $v.user.email.$error }"
        />
        <div class="invalid-feedback" v-if="!$v.user.email.required">
          {{ $t('validations.email_required') }}
        </div>
        <div class="invalid-feedback" v-if="!$v.user.email.email">
          {{ $t('validations.email_invalid') }}
        </div>
      </div>
      <div class="form-group">
        <label for="password">
          {{ $t('auth.password') }} <span class="text-danger">*</span>
        </label>
        <b-form-input
          v-model.trim="$v.user.password.$model"
          id="password"
          type="password"
          :class="{ 'is-invalid': $v.user.password.$error }"
        />
        <div class="invalid-feedback" v-if="!$v.user.password.required">
          {{ $t('validations.password_required') }}
        </div>
        <div class="invalid-feedback" v-if="!$v.user.password.minLength">
          {{ $t('validations.password_min_length') }}
        </div>
      </div>
      <div class="form-group">
        <label for="password_confirmation">
          {{ $t('auth.password_confirm') }} <span class="text-danger">*</span>
        </label>
        <b-form-input
          v-model.trim="$v.user.password_confirm.$model"
          id="password_confirmation"
          type="password"
          :class="{ 'is-invalid': $v.user.password_confirm.$error }"
        />
        <div class="invalid-feedback" v-if="!$v.user.password_confirm.required">
          {{ $t('validations.password_confirm_required') }}
        </div>
        <div
          class="invalid-feedback"
          v-if="!$v.user.password_confirm.sameAsPassword"
        >
          {{ $t('validations.password_not_same') }}
        </div>
      </div>
      <button class="btn btn-primary btn-block" type="submit">
        {{ $t('auth.create_account') }}
      </button>
    </b-form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'

export default {
  name: 'Register',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        password_confirm: '',
      },
    }
  },
  computed: {
    ...mapGetters({ errors: 'auth/errors' }),
  },
  validations: {
    user: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      password_confirm: {
        required,
        sameAsPassword: sameAs('password'),
      },
    },
  },
  methods: {
    register() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.$store
          .dispatch('auth/register', this.user)
          .then(() => {
            this.$router.push('/')
          })
          .catch((e) => {
            let response = e.response
            if (response.status === 422) {
              this.$store.commit('auth/SET_ERROR', response.data.errors)
            }
          })
      }
    },
  },
}
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
</style>
