<template>
  <div
    v-for="pageNumber in totalPages"
    :key="pageNumber"
    class="page"
    :class="{ current__page: page === pageNumber }"
     @click="$emit('changePage', pageNumber)"
  >
    {{ pageNumber }}
  </div>
</template>

<script>
export default {
  name: "my-pagination-item",
  props: {
    totalPages: {
      type: [String, Number],
      required: true,
    },
    page: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style scoped>
.page {
  border: 1px solid black;
  padding: 5px;
  cursor: pointer;
}
.current__page {
  border: 2px solid teal;
}
</style>