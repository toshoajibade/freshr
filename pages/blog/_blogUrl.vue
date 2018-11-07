<template>
  <div class="page">
    <div class="main">
      <h4>{{title}}</h4>
<<<<<<< HEAD
      <progressive-img :src="imageUrl" :placeholder="imageUrl" class="blog-image" :alt="title" />
=======
      <no-ssr>
      <progressive-img :src="imageUrl" :placeholder="imageUrl" class="blog-image" :alt="title" /></no-ssr>
>>>>>>> reversal
      <p class="content">{{content}}</p>
    </div>
    <SidePosts />
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
      title: ''
    }
  },
  async created() {
    this.blogId = this.$route.params.blogId
    this.title = this.$route.params.title
    try {      
      let res = await client.getEntry(this.blogId)
      this.content = res.fields.content
      this.imageUrl = res.fields.image.fields.file.url
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>
.page {
  display: flex;
}
.blog-image {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 25px;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
.main {
  width: 75%;
}
.content {
  line-height: 1.6;
}
</style>
