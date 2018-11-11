<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="company-description">FRESHR is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

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
  padding: 0px 10%;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    padding: 0px 5%
  }
}
p {
  text-align: center;
}
.footer-content {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 992px) {
    width: 100%;
  }
}
// .footer-contact-us {
//   display: none;
//   color: #76a6ff;
//   @media (max-width: 600px) {
//     display: block;
//   }
// }
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
