import { required } from 'vuelidate/lib/validators'

export default {
  form: {
    health_id_card: {
      required,
    },
    name_kh: {
      required,
    },
    name_en: {
      required,
    },
    gender: {
      required,
    },
    nationality: {
      required,
    },
    date_of_birth: {
      required,
    },
    occupation: {
      required,
    },
  },
}
