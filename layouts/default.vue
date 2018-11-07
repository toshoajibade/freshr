<template>
  <div class="body">
    <TheNavbar />
    <nuxt class="page-body" />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheFooter from '@/components/TheFooter'
export default {
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<style lang="scss">
* {
  font-family: Roboto;
}
.body {
  background-color: #f7faff;
}
.page-body {
  padding: 8rem 120px 2rem;
}
:root {
  font-size: 14px;
}
a,
button {
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  & :visited {
    color: inherit;
  }
}
h4 {
  font-size: 1.5rem;
  font-family: Roboto;
  font-weight: 400;
  color: #3c3c3c;
  margin-bottom: 0.5rem;
}
h5 {
  font-size: 1.2rem;
  font-family: Roboto;
  font-weight: 400;
  color: #3c3c3c;
  margin-bottom: 0.5rem;
}
p,
input,
textarea {
  line-height: 150%;
  color: #565656;
}
.main-content {
  width: 75%;
}
</style>
