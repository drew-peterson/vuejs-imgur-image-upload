import qs from 'qs';
import api from '../../api/imgur';
import { router } from '../../main';
const state = {
  token: window.localStorage.getItem('imgur_token')
};

const getters = {
  isLoggedIn: state => !!state.token // turn value in boolean w/ !!
};

const actions = {
  logout: ({ commit }) => {
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
  },
  login: () => api.login(),
  finalizeLogin({ commit }, hash) {
    const query = qs.parse(hash.replace('#', ''));
    commit('setToken', query.access_token); // update all getters, re-render components
    window.localStorage.setItem('imgur_token', query.access_token);
    router.push('/');
  }
};

const mutations = {
  setToken: (state, token) => (state.token = token)
};

export default {
  state,
  getters,
  actions,
  mutations
};
