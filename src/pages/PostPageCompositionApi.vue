<template>
  <div>
    <h1>Page with posts (using Composition API)</h1>
    <my-input
      v-focus
      v-model="searchQuery"
      placeholder="Search by ..."
      style="margin-bottom: 15px"
    />
    <div class="app__btns">
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <post-list v-if="!isPostsLoading" :posts="sortedAndSearchedPosts" />
    <h3 v-else>Loading ...</h3>
  </div>
</template>

<script>
import PostForm from "../components/PostForm.vue";
import PostList from "../components/PostList.vue";
import MyButton from "../components/UI/MyButton.vue";
import MyInput from "../components/UI/MyInput.vue";
import MyPaginationItem from "../components/UI/MyPaginationItem.vue";
import axios from "axios";
import {ref} from "vue";
import {usePosts} from "./../hooks/usePosts";
import {useSortedPosts} from "./../hooks/useSortedPosts";
import {useSortedAndSearchedPosts} from "./../hooks/useSortedAndSearchedPosts";

export default {
  components: {
    MyInput,
    PostForm,
    PostList,
    MyButton,
    MyPaginationItem,
  },

  data() {
    return {
      modalVisible: false,
      sortOptions: [
        {
          value: "title",
          name: "By name",
        },
        {
          value: "body",
          name: "By description",
        },
      ]
    }
  },
  setup(props) {
    const { posts, totalPages, isPostsLoading } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);
    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    };
  },
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