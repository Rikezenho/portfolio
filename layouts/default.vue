<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Fira Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  color: #333;
  transition: opacity 0.2s ease, transform 0.2s ease;
  display: inline-block;

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px) scale(1.02);
  }
}
</style>
