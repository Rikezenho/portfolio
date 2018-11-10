<template>
  <section class="container">
    <div>
      <h1 class="title">
        <img src="images/logo_symbol.png"> <span class="text">Henrique Kuwai</span>
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
        <a
          :href="contacts.gitlab"
          title="Gitlab">
          <font-awesome-icon :icon="['fab', 'gitlab']" />
        </a>
        <nuxt-link
          to="/cv"
          title="Full resumeé (CV)">
          <font-awesome-icon icon="file-alt" />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import cvData from '~/assets/json/cv.json'
export default {
  data() {
    return cvData
  }
}
</script>

<style lang="scss">
html {
  color: #333;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;

  @media screen and (min-width: 1100px) {
    padding: 0 10%;
  }

  @media screen and (max-width: 1099px) {
    padding: 0 5%;
  }

  @media screen and (max-width: 480px) {
    padding: 0 8%;
  }
}

.title {
  display: block;
  font-weight: 700;
  font-size: 80px;
  letter-spacing: 1px;

  @media screen and (max-width: 820px) {
    font-size: 70px;

    .text {
      display: block;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 50px;
  }
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;

  @media screen and (max-width: 820px) {
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
}

.highlight {
  text-decoration: underline;
  text-decoration-color: #a6e22e;
}

.links {
  font-size: 40px;
}
</style>
