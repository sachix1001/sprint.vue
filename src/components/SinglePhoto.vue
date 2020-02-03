<template>
  <div>
    <img :src="'data:image/jpeg;base64,' + selectedPhoto" />
  </div>
</template>

<script>
export default {
  name: "SinglePhoto",
  props: ["selectedPhoto"]
};
</script>

<style></style>
