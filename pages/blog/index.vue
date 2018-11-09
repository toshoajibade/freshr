<template>
  <div class="blog-page">
    <BlogList class="blog-list" :blogs='blogs' />
    <SidePosts class="side-posts" />
  </div>
</template>

<script>
import BlogList from '@/components/BlogList'
import SidePosts from '@/components/SidePosts'
import { client } from '@/middleware/contentManagement'

export default {
  components: {
    BlogList,
    SidePosts
  },
  async asyncData() {
    try {
      let response = await client.getEntries({
        limit: 6
      })
      return {
        blogs: response.items
      }
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped lang='scss'>
.blog-item:first-child {
  border-top: 0px;
}
.blog-page {
  display: flex;
  flex-direction: row;
}
.blog-list {
  width: 75%;
  @media(max-width: 768px) {
    width: 100%;
  }
}
.side-posts {
  width: 25%;
}
</style>
