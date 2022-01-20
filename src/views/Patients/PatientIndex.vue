<template>
  <div class="container-fluid mt-3">
    <h2>
      Patients
      <router-link to="/patients/create" class="btn btn-primary float-right">
        <b-icon icon="plus"></b-icon> Add New
      </router-link>
    </h2>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name Khmer</th>
            <th>Name English</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="5">No Reslult...</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PatientIndex',
  data() {
    return {
      items: [
        { ID: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { ID: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { ID: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { ID: 38, first_name: 'Jami', last_name: 'Carney' },
      ],
    }
  },
}
</script>
