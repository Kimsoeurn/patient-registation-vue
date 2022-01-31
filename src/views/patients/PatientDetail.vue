<template>
  <div>
    <div v-if="!getError" class="card">
      <div class="card-header">
        <i class="fa fa-th-list"></i> {{ $t('patients.detail') }}
      </div>
      <div class="card-body p-0">
        <table class="table table-striped mb-0">
          <tr>
            <th style="width: 30%">{{ $t('app.id') }}</th>
            <td>{{ getPatient.id }}</td>
          </tr>
          <tr>
            <th>{{ $t('patients.name_khmer') }}</th>
            <td>{{ getPatient.name_kh }}</td>
          </tr>
          <tr>
            <th>{{ $t('patients.name_english') }}</th>
            <td>{{ getPatient.name_en }}</td>
          </tr>
          <tr>
            <th>{{ $t('patients.gender') }}</th>
            <td>
              {{ $t(`patients.genders.${getPatient.gender}`) }}
            </td>
          </tr>
          <tr>
            <th>{{ $t('patients.nationality') }}</th>
            <td>
              {{ getPatient.nationality }}
            </td>
          </tr>
          <tr>
            <th>{{ $t('patients.date_of_birth') }}</th>
            <td>
              {{ getPatient.date_of_birth }}
            </td>
          </tr>
          <tr>
            <th>{{ $t('patients.occupation') }}</th>
            <td>
              {{ getPatient.occupation }}
            </td>
          </tr>
          <tr>
            <th>{{ $t('patients.phone_number') }}</th>
            <td>
              {{ getPatient.phone_number }}
            </td>
          </tr>
          <tr>
            <th>{{ $t('patients.other_id_card') }}</th>
            <td>
              {{ getPatient.other_id_card }}
            </td>
          </tr>
          <tr>
            <th>{{ $t('patients.is_disabled') }}</th>
            <td>
              {{ getPatient.is_disabled ? $t('app.yes') : $t('app.no') }}
            </td>
          </tr>
          <tr>
            <th>{{ $t('patients.address') }}</th>
            <td>{{ getPatient.address }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div v-else>
      <page404></page404>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Page404 from '../../components/Page404'

export default {
  name: 'PatientDetail',
  components: { Page404 },
  computed: {
    ...mapGetters({
      getPatient: 'patient/getPatient',
      getError: 'patient/getError',
    }),
  },
  methods: {
    ...mapActions({ fetchPatient: 'patient/fetchPatient' }),
  },
  async created() {
    await this.fetchPatient(this.$route.params.id)
  },
}
</script>

<style scoped></style>
