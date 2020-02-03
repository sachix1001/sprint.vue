<template>
  <div>
    <img
      v-for="photo in photos"
      :src="'data:image/jpeg;base64,' + photo.url"
      :key="photo.key"
      v-on:click="$emit(switchView(photo.url))"
    />
  </div>
</template>

<script>
export default {
  name: "allPhotos",
  props: ["photos", "allPhotoView", "selectedPhoto"]
  // methods: {
  //   // switchView(photo) {
  //   //   this.allPhotoView = false;
  //   //   this.selectedPhoto = photo;
  //   //   this.$emit('clicked-switch-view', photo);
  //   //   console.log(this.selectedPhoto);
  //   // }
  // }
};
</script>
<style>
img {
  width: 100px;
}
</style>
