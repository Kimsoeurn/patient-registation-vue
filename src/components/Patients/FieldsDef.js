import Vue from 'vue'
import moment from 'moment'
import VuetableFieldSequence from 'vuetable-2/src/components/VuetableFieldSequence.vue'
import VuetableFieldCheckbox from 'vuetable-2/src/components/VuetableFieldCheckbox.vue'

Vue.component('vuetable-field-checkbox', VuetableFieldCheckbox)

export default (i18n) => {
  return [
    {
      name: 'vuetable-field-checkbox',
      title: 'checkbox',
      width: '3%',
    },
    {
      name: VuetableFieldSequence,
      title: i18n.t('app.id'),
      width: '5%',
    },
    {
      name: 'name_khmer',
      title: i18n.t('patients.name_khmer'),
      width: '20%',
      sortField: 'name_khmer',
    },
    {
      name: 'name_english',
      title: i18n.t('patients.name_english'),
      width: '20%',
      sortField: 'name_english',
    },
    {
      name: 'date_of_birth',
      title: i18n.t('patients.date_of_birth'),
      width: '15%',
      formatter: (value) => {
        return value === null
          ? ''
          : moment(value, 'YYYY-MM-DD').format('MMM Do, YYYY')
      },
    },
    {
      name: 'gender',
      title: i18n.t('patients.gender'),
      titleClass: 'center aligned',
      dataClass: 'center aligned',
      width: '15%',
      formatter(value) {
        return value === 'male' ? 'Male' : 'Female'
      },
    },
    {
      name: 'address',
      title: i18n.t('patients.address'),
      width: '20%',
    },
    {
      name: 'actions',
      title: i18n.t('app.actions'),
      titleClass: 'center aligned',
      dataClass: 'right aligned',
      width: '10%',
    },
  ]
}
