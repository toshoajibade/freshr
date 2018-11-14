<template>
  <div>
    <TheNavbar />
    <div v-show="isLoading">
      <nuxt class="page-body" />
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheFooter from '@/components/TheFooter'
export default {
  components: {
    TheNavbar,
    TheFooter
  },
  data() {
    return {
      isLoading: false
    }
  },
  mounted() {
    this.isLoading = true
  }
}
</script>

