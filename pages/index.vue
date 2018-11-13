<template>
  <div v-cloak>
    <HomePageMainBlog :mainBlog="mainBlog" />
    <div class="content-body">
      <div class="blogs-section">
        <h5>LATESTS</h5>
        <BlogList class="blog-list" :blogs='blogs' />
        <SidePosts class="side-posts-mobile" />
        <SubscribeSection class="subscribe-section" />
      </div>
      <SidePosts class="side-posts-desktop" />
    </div>
    <div class="more-posts-wrapper">
      <nuxt-link to="/blog" class="more-posts"><span>MORE</span>
        <i class="material-icons">arrow_forward_ios</i>
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

  // Fetch data from the content management system and fill in data

  async asyncData() {
    try {
      let response = await client.getEntries({
        /**get only the first 6 items for the homepage */
        limit: 6
      })
      let mainBlog = response.items.shift()
      /**The last blog item will be the main blog displayed on the homepage, seperate it and pass the others to the blog list
       */
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
  width: 75%;
  @media (max-width: 768px) {
    width: 100%;
  }
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
