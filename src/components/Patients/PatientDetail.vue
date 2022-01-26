<template>
  <div>
    <table v-if="!getError" class="table table-striped mb-0">
      <tr>
        <th style="width: 30%">{{ $t('app.id') }}</th>
        <td>{{ patient.id }}</td>
      </tr>
      <tr>
        <th>{{ $t('patients.name_khmer') }}</th>
        <td>{{ patient.name_kh }}</td>
      </tr>
      <tr>
        <th>{{ $t('patients.name_english') }}</th>
        <td>{{ patient.name_en }}</td>
      </tr>
      <tr>
        <th>{{ $t('patients.gender') }}</th>
        <td>
          {{ $t(`patients.genders.${patient.gender}`) }}
        </td>
      </tr>
      <tr>
        <th>{{ $t('patients.nationality') }}</th>
        <td>
          {{ patient.nationality }}
        </td>
      </tr>
      <tr>
        <th>{{ $t('patients.date_of_birth') }}</th>
        <td>
          {{ patient.date_of_birth }}
        </td>
      </tr>
      <tr>
        <th>{{ $t('patients.occupation') }}</th>
        <td>
          {{ patient.occupation }}
        </td>
      </tr>
      <tr>
        <th>{{ $t('patients.phone_number') }}</th>
        <td>
          {{ patient.phone_number }}
        </td>
      </tr>
      <tr>
        <th>{{ $t('patients.other_id_card') }}</th>
        <td>
          {{ patient.other_id_card }}
        </td>
      </tr>
      <tr>
        <th>{{ $t('patients.is_disabled') }}</th>
        <td>
          {{ patient.is_disabled ? $t('app.yes') : $t('app.no') }}
        </td>
      </tr>
      <tr>
        <th>{{ $t('patients.address') }}</th>
        <td>{{ patient.address }}</td>
      </tr>
    </table>
    <div v-else>
      <page404></page404>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Page404 from '../Page404'

export default {
  name: 'PatientDetail',
  components: { Page404 },
  computed: {
    ...mapGetters(['patient', 'getError']),
  },
  methods: {
    ...mapActions(['fetchPatient']),
  },
  created() {
    this.fetchPatient(this.$route.params.id)
  },
}
</script>

<style scoped></style>
