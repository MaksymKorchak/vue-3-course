<template>
  <div class="app">
    <h1>Page with posts</h1>
    <my-input v-model="searchQuery" placeholder="Search by ..." style="margin-bottom:15px"/>
    <div class="app__btns">
      <my-button @click="showDialog">Create new Post</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:showModal="modalVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list
      v-if="!isPostsLoading"
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
    />
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
      selectedSort: "",
      searchQuery: "",
      sortOptions: [
        {
          value: "title",
          name: "By name",
        },
        {
          value: "body",
          name: "By description",
        },
      ],
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
        const response = await axios.get(
          "https:jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
      } catch (e) {
        console.log(e.message);
      } finally {
        this.isPostsLoading = false;
      }
    },
  },

  mounted() {
    this.fetchPosts();
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },

  //   watch: {
  //     selectedSort(newValue) {
  // 		this.posts.sort((post1,post2) => post1[newValue]?.localeCompare(post2[newValue]))
  //     },
  //   },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.app__btns {
  display: flex;
  justify-content: space-between;
}

h1,
h3 {
  padding: 15px 0;
}

</style>