<template>
  <div class="blog-page" v-cloak>
    <!--The BlogList Component contains the main bloglist and the SidePosts component is the aside posts-->
    <BlogList :blogs='blogs' />
    <SidePosts class="side-posts" />
  </div>
</template>

<script>
import BlogList from '@/components/BlogList'
import SidePosts from '@/components/SidePosts'

// The client is the plugin from the content management system (contentful)

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
  @media (max-width: 768px) {
    flex-direction: column
  }
}


</style>
