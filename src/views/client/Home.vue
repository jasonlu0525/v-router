<template>
  <div class="home">
    <div class="d-flex justify-content-center">
      <router-link class="px-3" to="/cart">cart</router-link> |
      <router-link class="px-3" to="/">product</router-link> |
      <router-link class="px-3" to="/login">login</router-link> |
    </div>
  </div>
  <router-view />
</template>

<script>
// @ is an alias to /src

export default {
  components: {},
};
</script>
