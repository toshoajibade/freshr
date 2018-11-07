<template>
  <div class="blog-item">
    <no-ssr>
    <progressive-img class="blog-item-image" :src="imageSrc" :placeholder="imageSrc" :alt="title" /></no-ssr>
    <div class="blog-snippet">
      <h4>{{title}}</h4>
      <p>{{content}}..
        <nuxt-link :to="{name: 'blog-blogUrl', params: {blogUrl, blogId, title} }" class="see-more">see more</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogItem',
  props: {
    imageSrc: {
      required: true,
      type: String
    },
    content: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    blogId: {
      required: true,
      type: String
    }
  },
  computed: {
    blogUrl() {
      return this.title
        .toLowerCase()
        .replace(/[-:+=$#@]/g, '')
        .replace(/\s/g, '-')
    }
  }
}
</script>

<style lang='scss' scoped>
.blog-item {
  display: flex;
  flex-direction: row;
  border-top: 1px solid #e0e0e0;
  padding: 1rem 0rem;
}
.blog-item-image {
  width: 25%;
  height: 100%;
  border-radius: 25px;
}
.blog-snippet {
  width: 75%;
  margin-left: 1rem;
  height: 100%;
}
.see-more {
  color: #76a6ff;
}
h4 {
  font-size: 1.2rem;
}
</style>
