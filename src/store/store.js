import Vue from "vue";
import Vuex from "vuex";
import { listObjects, getSingleObject, saveObject } from "../../utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photos: [],
    allPhotoView: true,
    selectedPhoto: "",
    loading: false
  },
  getters: {
    selectedPhoto: state => state.selectedPhoto,
    photos: state => state.photos,
    allPhotoView: state => state.allPhotoView,
    loading: state => state.loading
  },
  mutations: {
    updateView(state, photo) {
      state.allPhotoView = false;
      state.this.selectedPhoto = photo;
    },
    all(state) {
      state.allPhotoView = true;
      state.selectedPhoto = "";
    },
    uploadPhoto(state, inputPhoto) {
      state.allPhotoView = false;
      state.selectedPhoto = inputPhoto;
    },
    getPhoto(state, fetchedPhoto) {
      // state.loading = true;
      state.allPhotoView = true;
      state.photos = fetchedPhoto;
    }
  },
  actions: {
    updateView(context, photo) {
      context.commit("updateView", photo);
    },
    async uploadPhoto(context, file) {
      saveObject(file);
      const inputPhoto = `${await getSingleObject(file.name)}`;
      context.commit("uploadPhoto", inputPhoto);
    },
    async getPhoto(context) {
      const photoObj = await listObjects();
      const photo64 = await Promise.all(
        photoObj.map(async photo => {
          return { key: photo.Key, url: await getSingleObject(photo.Key) };
        })
      );
      const fetchedPhoto = await photo64;
      // this.$forceUpdate();
      context.commit("getPhoto", fetchedPhoto);
      // this.loading = false;
    }
  }
});
