<template>
  <div class="app">
    <form @submit.prevent>
      <h4>Create Post</h4>
      <input
        v-bind:value="title"
        @input="title = $event.target.value"
        class="input"
        type="text"
        placeholder="Post name ..."
      />
      <input
        v-bind:value="body"
        @input="body = $event.target.value"
        class="input"
        type="text"
        placeholder="Post description ..."
      />
      <button @click="createPost">Save Post</button>
    </form>
    <div class="post" v-for="post in posts" :key="post.id">
      <div><strong>Name: </strong>{{ post.title }}</div>
      <div><strong>Description: </strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
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

.post {
  padding: 15px;
  margin-top: 15px;
  border: 2px solid teal;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

form button {
  cursor: pointer;
  width: 100px;
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