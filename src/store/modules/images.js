import api from '../../api/imgur';
import { router } from '../../main';
const state = {
  images: []
};
const getters = {
  allImages: state => state.images
};
const mutations = {
  setImages: (state, images) => (state.images = images)
};
const actions = {
  
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const {
      data: { data }
    } = await api.fetchImages(token);
    commit('setImages', data);
  },

  async uploadImages({rootState, commit}, images) {
    const { token } = rootState.auth;
    await api.uploadImages(token, images);
    router.push('/');
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
