<template>
  <div class="navbar">
    <div class="navbar__btns">
      <my-button  @click="$router.push('/')">Main</my-button>
      <router-link to="/posts"><my-button>Posts</my-button></router-link>
      <router-link to="/about"> <my-button>About</my-button></router-link>
      <router-link to="/store"> <my-button>Store</my-button></router-link>
      <router-link to="/composition"> <my-button>Composition</my-button></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar__btns {
  display: flex;
  gap: 30px;
}
</style>