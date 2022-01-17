<template>
  <div class="home">
    <div id="nav">
      <router-link to="/cart">cart</router-link> |
      <router-link to="/">product</router-link> |
      <router-link to="/login">login</router-link> |
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
