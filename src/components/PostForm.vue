<template>
  <form @submit.prevent>
    <h4>Create Post</h4>
    <input
      v-model="post.title"
      class="input"
      type="text"
      placeholder="Post name ..."
    />
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Post description ..."
    />
    <button @click="createPost">Create Post</button>
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

form button {
  cursor: pointer;
  width: 150px;
  padding: 10px;
  outline: none;
  border: 2px solid teal;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  background: none;
}

.input {
  width: 50%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>