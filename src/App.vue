<template>
  <navbar></navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style>
Navbar * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}
</style>