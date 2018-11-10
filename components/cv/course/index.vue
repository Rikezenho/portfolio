<template>
  <div class="course-item">
    <div class="logo">
      <img :src="`images/cv/${data.logo}`">
    </div>
    <div class="info">
      <div class="title">{{ data.course }}</div>
      <div class="subtitle">{{ data.institute }}</div>
      <div class="date">{{ data.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Course',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/cv/_variables.scss';

.course-item {
  padding: 10px 0;
  display: flex;
  align-items: flex-start;

  .logo,
  .info {
    font-size: $font-size;
  }

  .logo {
    width: 15%;
    text-align: center;

    img {
      max-width: 80%;
    }
  }

  .info {
    width: 85%;
    padding-left: 20px;

    .title {
      font-weight: 900;
      font-size: 18px;
    }
  }
}
</style>
