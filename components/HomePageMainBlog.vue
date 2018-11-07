<template>
  <div class="homepage-main-blog">
    <progressive-img class="main-blog-image" :src="mainBlog.fields.image.fields.file.url" :alt="mainBlog.fields.title" />
    <div>
      <h4>{{mainBlog.fields.title}}</h4>
      <p class="content">{{contentSummary}}...<nuxt-link to="/blog/1" class="see-more">see more
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePageMainBlog',
  props: {
    mainBlog: {
      required: true,
      type: Object
    }
  },
  computed: {
    contentSummary() {
      return this.mainBlog.fields.content
        .split(' ')
        .slice(0, 100)
        .join(' ')
    }
  }
}
</script>

<style lang='scss' scoped>
.homepage-main-blog {
  margin: 0rem 0rem 3rem 0rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > * {
    width: 48%;
  }
  & p {
    line-height: 150%;
    color: #565656;
  }
}
.main-blog-image {
  border-radius: 25px;
  height: 300px;
  object-fit: cover;
}
.see-more {
  color: #76a6ff;
}
</style>
