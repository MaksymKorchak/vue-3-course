<template>
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
</template>

<script>
export default {};
</script>

<style scoped>

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