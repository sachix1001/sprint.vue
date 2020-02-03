<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <navbar />
    <h1>Hi</h1>
    <all-photos
      v-if="allPhotosView"
      :photos="photos"
      :allPhotosView="allPhotosView"
      :selectedPhoto="selectedPhoto"
      v-on:switchView="switchView"
    />
    <single-photo v-if="!allPhotosView" :selectedPhoto="selectePhoto" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import AllPhotos from "./components/AllPhotos";
import SinglePhoto from "./components/SinglePhoto";
import { listObjects, getSingleObject } from "../utils";

export default {
  name: "App",
  components: {
    Navbar,
    AllPhotos,
    SinglePhoto
  },
  data: () => ({
    photos: [],
    allPhotosView: true,
    selectedPhoto: ""
  }),
  methods: {
    switchView(photo) {
      this.allPhotoView = false;
      this.selectedPhoto = photo;
      console.log(this.selectedPhoto);
    }
  },
  created: async function() {
    const photoObj = await listObjects();
    const photo64 = await Promise.all(
      photoObj.map(async photo => {
        return { key: photo.Key, url: await getSingleObject(photo.Key) };
      })
    );
    this.photos = await photo64;
  }
};
</script>

<style>
#app {
  text-align: center;
}
</style>
