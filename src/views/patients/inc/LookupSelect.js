export default (i18n) => {
  return {
    genderOptions: [
      { value: null, text: i18n.t('patients.gender') },
      { value: 'male', text: i18n.t('patients.genders.male') },
      { value: 'female', text: i18n.t('patients.genders.female') },
    ],
    nationalities: [
      { value: null, text: i18n.t('patients.nationality') },
      { value: 'khmer', text: i18n.t('nation.khmer') },
      { value: 'cham', text: i18n.t('nation.cham') },
      { value: 'other', text: i18n.t('nation.other') },
    ],
    occupations: [
      { value: null, text: i18n.t('patients.occupation') },
      { value: 'employee_in', text: i18n.t('occupations.employee_in') },
      { value: 'employee_out', text: i18n.t('occupations.employee_out') },
      { value: 'other', text: i18n.t('occupations.other') },
    ],
    disables: [
      { value: 0, text: i18n.t('app.no') },
      { value: 1, text: i18n.t('app.yes') },
    ],
  }
}
