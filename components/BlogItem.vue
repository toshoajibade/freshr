<template>
  <div class="blog-item">

    <!--Use the no ssr flag to lazy load the image on the front end the progressive-img tab is the tag from the lazy loading plugin-->

    <no-ssr>
      <progressive-img class="blog-item-image" :src="imageSrc" :placeholder="imageSrc" :alt="title" />
    </no-ssr>
    <div class="blog-snippet">
      <nuxt-link :to="{name: 'blog-blogUrl', params: {blogUrl, blogId, title} }" class="see-more">
        <h4>{{title}}</h4>
      </nuxt-link>
      <p class="blog-item-content">{{content}}..
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
    },
    blogUrl: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang='scss' scoped>
.blog-item {
  display: flex;
  flex-direction: row;
  border-top: 1px solid #f3f3f3;
  padding: 1rem 0rem;
  height: 150px;
  @media (max-width: 1200px) {
    height: 100px;
  }
}
.blog-item-image {
  width: 150px;
  height: 100%;
  border-radius: 10%;
  @media (max-width: 1200px) {
    width: 100px;
  }
}
.blog-snippet {
  width: calc(100% - 150px);
  margin-left: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1200px) {
    width: calc(100% - 100px);
  }
}
.see-more {
  color: #76a6ff;
}
h4 {
  font-size: 1.2rem;
  line-height: 1.6;
}
.blog-item-content {
  @media (max-width: 1200px) {
    display: none;
  }
}
</style>
