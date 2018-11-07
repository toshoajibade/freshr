<template>
  <div class="blog-list">
    <div v-for="blog in blogs" :key="blog.sys.id">
      <BlogItem :title="blog.fields.title" :content="blog.fields.summary" :imageSrc="blog.fields.image.fields.file.url" :blogId="blog.sys.id" />
    </div>
  </div>
</template>

<script>
import BlogItem from '@/components/BlogItem'

export default {
  components: {
    BlogItem
  },
  props: {
    blogs: {
      type: Array,
      required: true
    }
  }
}
</script>
