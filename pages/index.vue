<template>
  <div class="main">
    <section class="container">
      <div>
        <h1 class="title">
          <img :src="require('~/assets/images/logo.png')"> <span class="text">Henrique Kuwai</span>
        </h1>
        <h2 class="subtitle">
          JavaScript lover. Developer since {{ developingSince }}.<br>
          Focusing in front-end since {{ frontendSince }}.
          <template v-if="employee.name">
            <br>Currently employed at
            <a
              :href="employee.url"
              class="highlight">{{ employee.name }}</a>.
          </template>
          <template v-else>
            <br>Currenty <span class="highlight">available for jobs</span>.
          </template>
        </h2>
        <div class="links">
          <a
            :href="`mailto:${contacts.email}`"
            :title="contacts.email">
            <font-awesome-icon icon="envelope" />
          </a>
          <a
            :href="contacts.linkedin"
            title="LinkedIn">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <a
            :href="contacts.github"
            title="Github">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <nuxt-link
            to="/cv"
            title="Full resumeé (CV)">
            <font-awesome-icon icon="file-alt" />
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import cvData from '~/assets/json/cv.json'
export default {
  data() {
    return cvData
  }
}
</script>

<style lang="scss" src="~/assets/scss/index.scss" />
