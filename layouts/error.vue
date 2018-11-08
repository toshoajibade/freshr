<template>
  <div class="error-page">
    <p class="four-oh-four">404</p>
    <p>An error has occured, please click the link below to redirect to the home page</p>
    <div>
      <nuxt-link to="/">
        <p class="home-link">HOME</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
export default {
  components: {
    TheNavbar
  },
  layout: 'errorlayout'
}
</script>
<style lang="scss" scoped>
.error-page {
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  & > .four-oh-four {
    font-size: 10rem;
  }
}
.home-link {
  color: #76a6ff;
  font-size: 2rem;
}
</style>


