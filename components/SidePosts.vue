<template>
  <div class="side-posts">
    <h5>Trending</h5>
    <ul v-for="post in posts" :key="post">
      <SidePostsItem blogId='3CpfyViJ1K2OeUCkkUgkAQ' :title="post" />
    </ul>
  </div>
</template>

<script>
import SidePostsItem from '@/components/SidePostsItem'
export default {
  name: 'SidePosts',
  components: {
    SidePostsItem
  },
  data() {
    return {
      posts: [
        'Honeymoon: Your guide to dreamland',
        'Preparing for retirement at 40',
        'Creating a bucket list',
        'When to take the dive',
        'Choosing a life partner',
        'Exploring Africa',
        'Productivity at Work'
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.side-post-item {
  color: #76a6ff;
  & :visited {
    color: #76a6ff;
  }
}
li {
  list-style: none;
  padding-bottom: 1rem;
}
ul {
  padding-left: 0px;
  margin-left: 0px;
}
.side-posts {
  width: 25%;
  margin-left: 4rem;
  @media(max-width: 768px) {
    display: none;
  }
}
</style>
