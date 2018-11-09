<template>
  <div class="page">
    <div class="main">
      <h4>We will definitely love to hear from you</h4>
      <div class="contact-us">
        <p>Email: inquiries@freshr.com</p>
        <p>Phone Number: 08099999999</p>
        <p>Address: No 2, Block C, Third Mainland Bridge, Lagos, Nigeria</p>
      </div>
    </div>
    <SidePosts class="side-posts-desktop" />
  </div>
</template>

<script>
import SidePosts from '@/components/SidePosts'
export default {
  components: {
    SidePosts
  }
}
</script>

<style lang='scss' scoped>
.contact-us {
  & > * {
    margin: 2rem 0rem;
  }
}
.page {
  display: flex;
  height: 100vh;
}
p {
  font-size: 1.2rem;
}
.main {
  width: 75%;
  @media (max-width: 768px) {
    width: 100%;
  }
}

</style>
