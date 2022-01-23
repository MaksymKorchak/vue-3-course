<template>
  <div v-if="showModal" class="dialog" @click="hideModal">
    <div @click.stop class="dialog__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "my-dialog",
  props: {
    showModal: Boolean,
    default: false,
  },
  methods: {
    hideModal() {
        this.$emit('update:showModal', false)
    },
  },
};
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
}
.dialog__content {
  padding: 20px;
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
}
</style>