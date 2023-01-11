<template>
  <div class="content">
    <HeaderVue />
    <router-view />
  </div>
</template>

<script>
import HeaderVue from "./components/Header.vue";

export default {
  name: "app",
  components: {
    HeaderVue,
  },
};
</script>
