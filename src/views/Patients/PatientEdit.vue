<template>
  <div class="container-fluid my-3">
    <div class="row">
      <div class="col-lg-12">
        <go-back></go-back>
      </div>
    </div>
    <form-edit-patient :id="id"></form-edit-patient>
  </div>
</template>

<script>
import GoBack from '../../components/GoBack'
import FormEditPatient from '../../components/Patients/FormEditPatient'
export default {
  name: 'PatientEdit',
  data() {
    return {
      id: Number.parseInt(this.$route.params.id),
    }
  },
  components: {
    FormEditPatient,
    GoBack,
  },
}
</script>

<style scoped></style>
