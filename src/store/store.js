import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allPhotoView: true,
    selectedPhoto: ""
  },
  getters: {
    selectedPhoto: state => state.selectedPhoto
  },
  mutations: {
    updateView(state, photo) {
      state.allPhotoView = false;
      state.this.selectedPhoto = photo;
    }
  },
  actions: {
    updateView(context, photo) {
      context.commit("updateView", photo);
    }
  }
});
