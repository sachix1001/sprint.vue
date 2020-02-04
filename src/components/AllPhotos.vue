<template>
  <div>
    <img
      v-for="photo in photos"
      :src="'data:image/jpeg;base64,' + photo.url"
      :key="photo.key"
      @click="update(photo.url)"
    />
  </div>
</template>

<script>
export default {
  name: "allPhotos",
  computed: {
    photos() {
      return this.$store.photos;
    }
  },
  methods: {
    update(photo) {
      this.$store.dispatch.updateView(photo);
    }
  }
};
</script>
<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>
