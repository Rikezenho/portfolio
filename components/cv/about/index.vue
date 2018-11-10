<template>
  <div class="about">
    <div class="content">
      <div class="block">
        <div
          v-if="!!data.phone"
          class="item"
          title="WhatsApp">
          <font-awesome-icon :icon="['fab', 'whatsapp']" /> {{ data.phone }}
        </div>
        <div
          v-if="!!data.mail"
          class="item"
          title="E-mail">
          <font-awesome-icon icon="envelope" />
          <a :href="`mailto:${data.mail}`">{{ data.mail }}</a>
        </div>
        <div
          v-if="!!data.web"
          class="item"
          title="Website">
          <font-awesome-icon icon="globe" />
          <a
            :href="data.web"
            target="_blank">{{ data.web }}</a>
        </div>
        <div
          v-if="!!data.github"
          class="item"
          title="Github">
          <font-awesome-icon :icon="['fab', 'github']" />
          <a
            :href="`https://github.com/${data.github}`"
            target="_blank">{{ data.github }}</a>
        </div>
        <div
          v-if="!!data.gitlab"
          class="item"
          title="Gitlab">
          <font-awesome-icon :icon="['fab', 'gitlab']" />
          <a
            :href="`https://gitlab.com/${data.gitlab}`"
            target="_blank">{{ data.gitlab }}</a>
        </div>
      </div>
      <div
        v-if="!!data.address"
        class="block"
        title="Endereço">
        <font-awesome-icon icon="map-marker" /> {{ data.address }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
