<template>
  <div class="page">
    <div class="main">
      <h4>{{title}}</h4>
      <no-ssr>
        <progressive-img :src="imageUrl" :placeholder="imageUrl" class="blog-image" :alt="title" />
      </no-ssr>
      <p class="content">{{content}}</p>
      <SidePosts topic='Similar Posts' class="side-posts-mobile"/>
    </div>
    <SidePosts topic='Similar Posts' class="side-posts-desktop"/>
  </div>
</template>

<script>
import SidePosts from '@/components/SidePosts'
import { client } from '@/middleware/contentManagement'

export default {
  components: {
    SidePosts
  },
  data() {
    return {
      blogId: '',
      imageUrl: '',
      content: '',
      title: '',
      blogUrl: ''
    }
  },

/**If the user is navigating from other parts of the site, search the database by blogId but if the user is navigating from a url, extract the last part of the url and use it to query the database */

  async created() {
    this.blogId = this.$route.params.blogId
    this.title = this.$route.params.title
    this.blogUrl = this.$route.params.blogUrl
    let url = this.$route.path.split('/').pop()
    try {
      let res = null
      if (this.blogId) {
        res = await client.getEntry(this.blogId)
      } else {
        res = await client.getEntries({
          content_type: 'author',
          'fields.blogurl': url
        })
        res = res.items[0]
      }
      this.blogUrl = res.fields.blogurl
      this.blogId = res.sys.id
      this.content = res.fields.content
      this.title = res.fields.title
      this.imageUrl = res.fields.image.fields.file.url
    } catch (error) {
      // console.log(error)
    }
  }
}
</script>

<style scoped lang='scss'>
.page {
  display: flex;
}
.blog-image {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 5%;
  margin-bottom: 2rem;
  margin-top: 1rem;
}
.main {
  width: 75%;
  @media (max-width: 768px) {
    width: 100%
  }
}
.content {
  line-height: 1.6;
}

</style>
