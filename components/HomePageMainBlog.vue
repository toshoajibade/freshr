<template>
  <div class="homepage-main-blog">
    <nuxt-link :to="{name: 'blog-blogUrl', params: {blogUrl: mainBlog.fields.blogurl, blogId: mainBlog.sys.id, title: mainBlog.fields.title} }">
      <h4>{{mainBlog.fields.title}}</h4>
    </nuxt-link>
    <div>
      <no-ssr>
        <progressive-img class="main-blog-image" :src="mainBlog.fields.image.fields.file.url" :placeholder="mainBlog.fields.image.fields.file.url" :alt="mainBlog.fields.title" />
      </no-ssr>
      <div>
        <p class="content">{{contentSummary}}...<nuxt-link :to="{name: 'blog-blogUrl', params: {blogUrl: mainBlog.fields.blogurl, blogId: mainBlog.sys.id, title: mainBlog.fields.title} }" class="see-more">see more
          </nuxt-link>
        </p>
      </div>
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
  flex-direction: column;
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
    & > * {
      width: 48%;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      & > * {
        width: 100%;
      }
    }
  }
  & p {
    line-height: 150%;
    color: #565656;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
}
.main-blog-image {
  border-radius: 5%;
  height: 300px;
  object-fit: cover;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
}
.see-more {
  color: #76a6ff;
}

</style>
