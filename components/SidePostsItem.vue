<template>
  <li class="side-post-item">
    <nuxt-link :to="{name: 'blog-blogUrl', params: {blogUrl, blogId, title} }">{{title}}</nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'SidePostsItem',
  props: {
    blogId: {
      required: false,
      type: String
    },
    title: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      blogUrl: 'dating-101'
    }
  }
}
</script>

<style scoped>
</style>