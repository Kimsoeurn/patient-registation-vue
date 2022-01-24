<template>
  <div>
    <div class="table-responsive mb-0">
      <vuetable
        ref="vuetable"
        api-url="http://localhost/api/patients"
        :fields="fields"
        :sort-order="sortOrder"
        data-path="data"
        :per-page="5"
        pagination-path="meta"
        :css="css.table"
        @vuetable:pagination-data="onPaginationData"
      >
        <div slot="actions">
          <a href="" class="btn btn-sm btn-info mr-1">
            <i class="fa fa-edit"></i> {{ $t('app.edit') }}
          </a>
          <a href="" class="btn btn-sm btn-danger">
            <i class="fa fa-trash"></i> {{ $t('app.delete') }}
          </a>
        </div>
      </vuetable>
    </div>

    <div class="row no-gutters">
      <div class="col-lg-6 mt-3">
        <vuetable-pagination-info
          ref="paginationInfo"
        ></vuetable-pagination-info>
      </div>
      <div class="col-lg-6">
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
import VuetablePagination from '../PaginationB4.vue'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
import FieldsDef from './FieldsDef'
import cssConfig from './CssBootsrap4'

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
      sortOrder: [
        {
          field: 'name_kh',
          direction: 'asc',
        },
      ],
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
