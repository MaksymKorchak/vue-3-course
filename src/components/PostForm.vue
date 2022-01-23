<template>
  <form @submit.prevent>
    <h4>Create Post</h4>
    <my-input
      v-model="post.title"
      type="text"
      placeholder="Post name ..."
    />
    <my-input
      v-model="post.body"
      type="text"
      placeholder="Post description ..."
    />
    <my-button @click="createPost">Create Post</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: null,
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      if (!this.post.title || !this.post.body) {
        return;
      }
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

</style>