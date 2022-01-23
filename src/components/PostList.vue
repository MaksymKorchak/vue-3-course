<template>
  <div v-if="posts.length > 0">
    <h3>List</h3>
    <transition-group name="posts-list">
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h3 v-else>There is no Items in the List ;(</h3>
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

.posts-list-item {
  display: inline-block;
  margin-right: 10px;
}
.posts-list-enter-active,
.posts-list-leave-active {
  transition: all 0.4s ease;
}
.posts-list-enter-from,
.posts-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.posts-list-move {
  transition: transform 0.4s ease;
}
</style>
