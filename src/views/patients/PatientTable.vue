<template>
  <div>
    <div class="table-responsive mb-0">
      <vuetable
        ref="vuetable"
        api-url="http://localhost/api/patients"
        :http-options="httpHeader"
        :fields="fields"
        :sort-order="sortOrder"
        data-path="data"
        :per-page="5"
        pagination-path="meta"
        :css="css.table"
        @vuetable:pagination-data="onPaginationData"
      >
        <div slot="actions" slot-scope="props">
          <router-link
            :to="`patients/show/${props.rowData.id}`"
            class="btn btn-sm btn-secondary mr-1"
          >
            <i class="fa fa-th-list"></i> {{ $t('app.show') }}
          </router-link>
          <router-link
            :to="`patients/edit/${props.rowData.id}`"
            class="btn btn-sm btn-info mr-1"
          >
            <i class="fa fa-edit"></i> {{ $t('app.edit') }}
          </router-link>
          <a
            @click.prevent="confirmDelete(props.rowData.id)"
            href=""
            class="btn btn-sm btn-danger"
          >
            <i class="fa fa-trash"></i> {{ $t('app.delete') }}
          </a>
        </div>
      </vuetable>
    </div>

    <div class="row no-gutters">
      <div class="col-lg-6 mt-3 pl-3">
        <vuetable-pagination-info
          ref="paginationInfo"
        ></vuetable-pagination-info>
      </div>
      <div class="col-lg-6 pl-3">
        <vuetable-pagination
          ref="pagination"
          :css="css.pagination"
          @vuetable-pagination:change-page="onChangePage"
        ></vuetable-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from '../../components/PaginationB4.vue'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
import FieldsDef from './inc/FieldsDef'
import cssConfig from './inc/CssBootsrap4'
import Swal from 'sweetalert2'
import TokenService from '../../services/TokenService'

export default {
  name: 'TablePatient',
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo,
  },
  data() {
    return {
      css: cssConfig,
      fields: FieldsDef(this.$i18n),
      sortOrder: [],
      httpHeader: {
        headers: { Authorization: 'Bearer ' + TokenService.getToken() },
      },
    }
  },
  methods: {
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
      this.$refs.paginationInfo.setPaginationData(paginationData)
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page)
    },
    onUpdate(page) {
      this.$refs.vuetable.refresh(page)
    },

    confirmDelete(id) {
      let me = this
      Swal.fire({
        title: `${this.$i18n.t('app.do_you_want_delete')} ${id}?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: `${this.$i18n.t('app.cancel')}`,
        confirmButtonText: `${this.$i18n.t('app.yes')}`,
      }).then(function (result) {
        if (result.isConfirmed) {
          me.$store
            .dispatch('patient/deletePatient', id)
            .then(() => {
              me.$refs.vuetable.refresh()
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
            })
            .catch((e) => console.log(e))
        }
      })
    },
  },
}
</script>

<style>
.pagination {
  margin-top: 1rem;
  cursor: pointer;
}

.vuetable-head-wrapper table.vuetable th.sortable {
  cursor: pointer;
}
</style>
