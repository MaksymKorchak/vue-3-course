<template>
  <button>
    <slot />
  </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
button {
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
</style>