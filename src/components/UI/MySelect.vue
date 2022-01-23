<template>
  <select v-model="modelValue" @change="changeoptions">
    <option disabled value="">Choose from List</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
      changeoptions (event) {
          this.$emit('update:modelValue', event.target.value)
      }
  }
};
</script>

<style scoped></style>
