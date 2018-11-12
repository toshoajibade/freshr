<template>
  <div class="page">
    <div class="main">
      <h4 class="blog-title">{{title}}</h4>
      <no-ssr>
        <div class="blog-image-wrapper">
          <progressive-img :src="imageUrl" :placeholder="imageUrl" class="blog-image" :alt="title" />
        </div>
      </no-ssr>
      <p class="content">{{content}}</p>
      <SidePosts topic='Similar Posts' class="side-posts-mobile" />
    </div>
    <SidePosts topic='Similar Posts' class="side-posts-desktop" />
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
      blogUrl: '',
      blogId: '',
      content: '',
      title: '',
      imageUrl: ''
    }
  },

  /**If the user is navigating from other parts of the site, search the database by blogId but if the user is navigating from a url, extract the last part of the url and use it to query the database */

  async mounted() {
    let url = this.$route.path.split('/').pop()
    try {
      let res = await client.getEntries({
        content_type: 'author',
        'fields.blogurl': url
      })
      res = res.items[0]
        this.blogUrl = res.fields.blogurl,
        this.blogId = res.sys.id,
        this.content = res.fields.content,
        this.title = res.fields.title,
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
.blog-image-wrapper {
  position: relative;
  width: 100%;
  padding-top: 50%;
  @media (max-width: 768px) {
    padding-top: 60%;
  }
}
.blog-image {
  width: 100%;
  position: absolute;
  top: 0px;
  height: 100%;
  object-fit: cover;
  border-radius: 5% / 10%;
}
.main {
  width: 75%;
  @media (max-width: 768px) {
    width: 100%;
  }
}
.content {
  line-height: 1.6;
  margin-top: 1rem;
}
.blog-title {
  margin-bottom: 1rem;
}
</style>
