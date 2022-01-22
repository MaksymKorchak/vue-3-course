<template>
  <div>
    <h3>List</h3>
    <post-item v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>

<script>
import PostItem from "../components/PostItem.vue";

export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

h3 {
  padding: 15px 0;
  font-weight: bold;
}

</style>
