<template>
  <div class="blog-page">
    <BlogList class="blog-list" />
    <SidePosts class="side-posts"/>
  </div>
</template>

<script>
import BlogList from '@/components/BlogList'
import SidePosts from '@/components/SidePosts'
export default {
  components: {
    BlogList,
    SidePosts
  }
}
</script>

<style scoped>
.blog-item:first-child {
  border-top: 0px;
}
.blog-page {
  display: flex;
  flex-direction: row;
}
.blog-list {
  width: 75%;
}
.side-posts {
  width: 25%;
}
</style>
