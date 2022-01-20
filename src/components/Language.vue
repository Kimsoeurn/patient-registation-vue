<template>
  <div>
    <b-nav-item-dropdown right>
      <template #button-content>{{ $t(lang) }}</template>
      <b-dropdown-item
        href="#"
        @click="handleChange('kh')"
        v-show="lang == 'en'"
        >Khmer</b-dropdown-item
      >
      <b-dropdown-item
        href="#"
        @click="handleChange('en')"
        v-show="lang == 'kh'"
        >English</b-dropdown-item
      >
    </b-nav-item-dropdown>
  </div>
</template>

<script>
export default {
  name: 'language',
  data() {
    const lang = localStorage.getItem('lang') || 'kh'
    return {
      lang: lang,
    }
  },
  methods: {
    handleChange(lang) {
      localStorage.setItem('lang', lang)
      window.location.reload()
    },
  },
}
</script>
