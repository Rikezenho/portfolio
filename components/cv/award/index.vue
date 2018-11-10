<template>
  <div class="award-item">
    <font-awesome-icon icon="trophy" /> <span class="info">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'Award',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/cv/_variables.scss';

.award-item {
  display: block;
  padding: 10px 0;

  .fa-trophy {
    color: #ffcb00;
  }
}
</style>
