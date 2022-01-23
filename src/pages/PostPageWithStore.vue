<template>
  <div>
    <h1>Page with posts (using Store)</h1>
    <my-input
      v-focus
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Search by ..."
      style="margin-bottom: 15px"
    />
    <div class="app__btns">
      <my-button @click="showDialog">Create new Post</my-button>
      <my-select model:value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions" />
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
    <div v-intersection="loadMorePosts" class="observer"></div>


  </div>
</template>

<script>
import PostForm from "../components/PostForm.vue";
import PostList from "../components/PostList.vue";
import MyButton from "../components/UI/MyButton.vue";
import axios from "axios";
import MyPaginationItem from "../components/UI/MyPaginationItem.vue";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    PostForm,
    PostList,
    MyButton,
    MyPaginationItem,
  },

  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    ...mapMutations({
       setPage: 'post/setPage',
       setSearchQuery: 'post/setSearchQuery',
       setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
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
  },

  mounted() {
      this.fetchPosts();
  },

  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    }),
  },

  watch: {},
};
</script>

<style>
.app__btns {
  display: flex;
  justify-content: space-between;
}

h1,
h3 {
  padding: 15px 0;
}

.page__wrapper {
  display: flex;
  gap: 5px;
  margin: 15px 0;
}

.observer {
  height: 20px;
  background: transparent;
  opacity: 50%;
  margin: 15px 0;
}
</style>