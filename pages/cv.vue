<template>
  <div class="cv">
    <header>
      <div class="content">
        <cv-header :data="personal" />
      </div>
      <about :data="contacts" />
    </header>
    <div class="conteudo">
      <div class="content">
        <div
          v-if="!!description && (!!languages.length)"
          class="bio-wrapper">
          <h2>Sobre</h2>
          <div class="flex-wrapper">
            <div class="sobre">
              <span v-html="description" />
            </div>
            <div class="bio">
              <div
                v-if="!!languages.length"
                class="item">
                <strong>Idiomas:</strong><br>
                <span
                  v-for="(language, index) in languages"
                  :key="`language-${index}`">
                  {{ language }}<span v-if="index != languages.length - 1">,</span>
                </span>
              </div>
              <br>
              <div
                v-if="!!school"
                class="item">
                <strong>Formação acadêmica:</strong><br>
                <course :data="school" />
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="!!history.length"
          class="history-wrapper has-hr">
          <h2>Experiência profissional</h2>
          <ul class="ul-history">
            <li
              v-for="(history, index) in history"
              :key="`history-${index}`"
              class="item">
              <job :data="history" />
            </li>
          </ul>
        </div>

        <div
          v-if="!!complementary.length"
          class="complementary-wrapper has-hr avoid-page-break">
          <h2>Cursos complementares</h2>
          <ul class="ul-complementary-courses">
            <li
              v-for="(course, index) in complementary"
              :key="`course-${index}`"
              class="item">
              <course :data="course" />
            </li>
          </ul>
        </div>

        <div
          v-for="(nodeList, index) in nodeLists"
          :key="nodeList.title"
          :class="`${index}-wrapper has-hr avoid-page-break`">
          <h2>{{ nodeList.title }}</h2>
          <ul class="ul-nodelists">
            <li
              v-for="(node, key) in nodeList.items"
              :key="`node-${key}`"
              class="item">
              <div class="box">{{ node }}</div>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <footer class="footer">
      <div class="content">
        <div
          v-if="!!contacts.linkedin"
          class="additional-info linkedIn-info">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
          Veja mais no meu
          <a
            :href="contacts.linkedin"
            target="_blank">{{ contacts.linkedin }}</a>
        </div>
        <div
          v-if="!!repository"
          class="additional-info gitlab-info">
          <font-awesome-icon :icon="['fab', 'github']" />
          Código-fonte do currículo:
          <a
            :href="repository"
            target="_blank">{{ repository }}</a>
        </div>
        <div
          v-if="!!contacts.codesandbox"
          class="additional-info codesandbox-info">
          Tenho mais alguns experimentos aqui:
          <a
            :href="`https://codesandbox.io/u/${contacts.codesandbox}`"
            target="_blank">https://codesandbox.io/u/{{ contacts.codesandbox }}</a>
        </div>
        <br>
        Última atualização em {{ lastUpdate }}.
      </div>
    </footer>
  </div>
</template>

<script>
import cvHeader from '~/components/cv/header'
import about from '~/components/cv/about'
import course from '~/components/cv/course'
import job from '~/components/cv/job'
import cvData from '~/assets/json/cv.json'

export default {
  name: 'CV',
  components: {
    'cv-header': cvHeader,
    about,
    course,
    job
  },
  data() {
    return cvData
  }
}
</script>

<style lang="scss" src="~/assets/scss/cv/main.scss" />
