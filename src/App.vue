<template>
  <div id="app">
    <login />
    <tab />
  </div>
</template>

<script>
import login from "./components/login/login";
import tab from "./components/tab/tab"
export default {
  name: "app",
  components: {
    login,
    tab
  }
};
</script>

<style lang="stylus"></style>
