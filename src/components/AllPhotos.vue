<template>
  <div>
    <img
      v-for="photo in photos"
      :src="'data:image/jpeg;base64,' + photo.url"
      :key="photo.key"
    />
  </div>
</template>

<script>
export default {
  name: "allPhotos",
  props: ["photos"]
};
</script>
<style>
img {
  width: 100px;
}
</style>
