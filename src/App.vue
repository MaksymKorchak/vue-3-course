<template>
  <div class="app">
    <post-form />
    <post-list />
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      title: "",
      body: "",
      posts: [
        {
          id: 1,
          title: "Post 1",
          body: "Description for Post 1",
        },
        {
          id: 2,
          title: "Post 2",
          body: "Description for Post 2",
        },
        {
          id: 3,
          title: "Post 3",
          body: "Description for Post 3",
        },
      ],
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.posts.push(newPost);
      this.title = "";
      this.body = "";
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>