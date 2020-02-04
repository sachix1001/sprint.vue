<template>
  <div>
    <img
      v-for="photo in photos"
      :src="'data:image/jpeg;base64,' + photo.url"
      :key="photo.key"
      @click="$emit('update-view', photo.url)"
    />
  </div>
</template>

<script>
export default {
  name: "allPhotos",
  props: ["photos"]
};
</script>
<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>
