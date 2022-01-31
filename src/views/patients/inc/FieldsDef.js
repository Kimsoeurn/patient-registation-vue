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
      name: 'health_id_card',
      title: i18n.t('patients.health_id_card'),
      width: '15%',
    },
    {
      name: 'name_kh',
      title: i18n.t('patients.name_khmer'),
      width: '15%',
    },
    {
      name: 'name_en',
      title: i18n.t('patients.name_english'),
      width: '15%',
    },
    {
      name: 'date_of_birth',
      title: i18n.t('patients.date_of_birth'),
      width: '12%',
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
      width: '10%',
      formatter(value) {
        return i18n.t('patients.genders.' + value)
      },
    },
    {
      name: 'address',
      title: i18n.t('patients.address'),
      width: '15%',
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
