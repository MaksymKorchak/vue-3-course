<template>
  <div class="app">
    <h1>Page with posts</h1>
    <my-button @click="showDialog">Create new Post</my-button>
    <my-dialog v-model:showModal="modalVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list v-if="!isPostsLoading" :posts="posts" @remove="removePost" />
    <h3 v-else>Loading ...</h3>
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import MyButton from "./components/UI/MyButton.vue";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
    MyButton,
  },

  data() {
    return {
      posts: [],
      modalVisible: false,
      isPostsLoading: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modalVisible = false;
    },

    removePost(post) {
      this.posts = this.posts.filter((item) => item.id !== post.id);
    },

    showDialog() {
      this.modalVisible = true;
    },

    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get("https:jsonplaceholder.typicode.com/posts?_limit=10");
        this.posts = response.data
      } catch (e) {
        console.log(e.message);
      } finally {
		  this.isPostsLoading = false
      }
    },
  },

  mounted() {
    this.fetchPosts();
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

h1,
h3 {
  padding: 15px 0;
}
</style>