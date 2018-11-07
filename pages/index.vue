<template>
  <div>
    <HomePageMainBlog :mainBlog="mainBlog" />
    <div class="content-body">
      <div class="blogs-section">
        <h5>LATESTS</h5>
        <BlogList :blogs='blogs' />
        <SubscribeSection class="subscribe-section" />
      </div>
      <SidePosts />
    </div>
    <div class="more-posts-wrapper">
      <nuxt-link to="/blog" class="more-posts"><span>MORE</span>
        <v-icon>arrow_forward_ios</v-icon>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import HomePageMainBlog from '@/components/HomePageMainBlog'
import BlogList from '@/components/BlogList'
import SidePosts from '@/components/SidePosts'
import SubscribeSection from '@/components/SubscribeSection'
import { client } from '@/middleware/contentManagement'

export default {
  components: {
    HomePageMainBlog,
    BlogList,
    SidePosts,
    SubscribeSection
  },
  async asyncData() {
    try {
      let response = await client.getEntries({
        limit: 6
      })
      let mainBlog = response.items.shift()
      return {
        mainBlog,
        blogs: response.items
      }
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style lang="scss" scoped>
.blogs-section {
  margin-bottom: 3rem;
  width: 75%;
}
.content-body {
  display: flex;
  flex-direction: row;
}
.more-posts-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & * {
    color: #76a6ff;
  }
}
.more-posts {
  display: flex;
  align-items: center;
  & > * {
    font-size: 1.2rem;
    padding: 0.25rem;
  }
}
</style>
