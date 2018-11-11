<template>
  <div class="homepage-main-blog">
    <nuxt-link :to="{name: 'blog-blogUrl', params: {blogUrl: mainBlog.fields.blogurl, blogId: mainBlog.sys.id, title: mainBlog.fields.title} }">
      <h4>{{mainBlog.fields.title}}</h4>
    </nuxt-link>
    <div>
      <no-ssr>
        <div class="main-blog-image-wrapper">
          <progressive-img class="main-blog-image" :src="mainBlog.fields.image.fields.file.url" :placeholder="mainBlog.fields.image.fields.file.url" :alt="mainBlog.fields.title" />
        </div>
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
  data() {
    return {
      contentSummary: this.mainBlog.fields.summary
    }
  },
  props: {
    mainBlog: {
      required: true,
      type: Object
    }
  },
  mounted() {
    this.checkWindowWidth()
    window.addEventListener('resize', () => {
      this.checkWindowWidth()
    })
  },
  methods: {
    checkWindowWidth() {
      let width = window.innerWidth
      switch (true) {
        case width > 1000:
          this.updateContentSummary(100)
          break
        case width > 900:
          this.updateContentSummary(75)
          break
        case width > 600:
          this.updateContentSummary(50)
          break
        default:
          this.updateContentSummary(25)
      }
    },
    updateContentSummary(length) {
      this.contentSummary = this.mainBlog.fields.content
        .split(' ')
        .slice(0, length)
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
    margin-bottom: 2rem;
  }
}
.see-more {
  color: #76a6ff;
}
.main-blog-image-wrapper {
  position: relative;
  width: 100%;
  padding-top: 35%;
  @media (max-width: 768px) {
    padding-top: 60%;
    margin-bottom: 1rem;
  }
}

.main-blog-image {
  width: 100%;
  position: absolute;
  top: 0px;
  height: 100%;
  object-fit: cover;
  border-radius: 5% / 10%;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
}
</style>
