<template>
  <div class="header">
    <div class="logo"><img :src="`images/${data.logo}`"></div>
    <h1>{{ data.name }}</h1>
    <div class="subtitulo">{{ data.subtitle }}, {{ getAge() }} anos.</div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Header',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    getAge() {
      return moment().diff(this.data.birthDate, 'years')
    }
  }
}
</script>
