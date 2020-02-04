<template>
  <div id="app">
    <navbar @all="all" @get-photo="getPhoto" />
    <upload @upload-photo="uploadPhoto" />
    <img id="loading" v-if="loading" src="./33HU.gif" />
    <all-photos
      v-if="allPhotoView"
      :photos="photos"
      @update-view="updateView"
    />
    <single-photo v-if="!allPhotoView" :selectedPhoto="selectedPhoto" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import AllPhotos from "./components/AllPhotos";
import SinglePhoto from "./components/SinglePhoto";
import Upload from "./components/Upload";
import { listObjects, getSingleObject, saveObject } from "../utils";
// import {mapGetters}

export default {
  name: "App",
  components: {
    Navbar,
    AllPhotos,
    SinglePhoto,
    Upload
  },
  data: () => ({
    photos: [],
    allPhotoView: true,
    selectedPhoto: "",
    loading: false
  }),
  methods: {
    updateView(photo) {
      this.allPhotoView = false;
      this.selectedPhoto = photo;
    },
    all() {
      this.allPhotoView = true;
      this.selectedPhoto = "";
    },
    async uploadPhoto(file) {
      saveObject(file);
      this.selectedPhoto = `${await getSingleObject(file.name)}`;
      this.allPhotoView = false;
    },
    async getPhoto() {
      this.loading = true;
      console.log("getting photo");
      const photoObj = await listObjects();
      const photo64 = await Promise.all(
        photoObj.map(async photo => {
          return { key: photo.Key, url: await getSingleObject(photo.Key) };
        })
      );
      this.photos = await photo64;
      this.allPhotoView = true;
      this.$forceUpdate();
      this.loading = false;
    }
  },
  created: async function() {
    this.getPhoto();
  }
};
</script>

<style>
#app {
  text-align: center;
}
#loading {
  width: 10%;
}
</style>
