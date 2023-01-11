<template>
  <div>
    <!-- Imagens -->
    <ImagesPreview />
  </div>
</template>
<script>
import ImagesPreview from "../components/ImagesPreview.vue";
export default {
  name: "HomeView",
  components: {
    ImagesPreview,
  },
};
</script>

<style>
.home_container {
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
