<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="company-description">FRESHR is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      <div class="social-media-logo-wrapper">
        <img src="@/assets/facebook.svg" class="social-media-logo" alt="facebook-logo"><p>freshr</p>
        <img src="@/assets/twitter.svg" class="social-media-logo" alt="twitter-logo"><p>freshr</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang='scss' scoped>
.footer {
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: row;
  background-color: #e6edfc;
  padding: 0px 120px;
  justify-content: center;
  align-items: center;
}
p {
  text-align: center;
}
.footer-content {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.social-media-logo {
  height: 1rem;
}
.social-media-logo-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  & > img {
    margin-left: 1rem;
    margin-right: 0.25rem;
  }
  & * {
    margin-bottom: 0px;
  }
}
</style>
