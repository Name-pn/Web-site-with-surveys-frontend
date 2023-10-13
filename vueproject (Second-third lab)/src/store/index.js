import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuth: false,
    User: '',
  },
  getters: {
    getAuth(state) {
      return state.isAuth
    },
    getUserName(state) {
      return state.User
    }
  },
  mutations: {
    toggleAuth(state) {
      state.isAuth = !state.isAuth;
    },
    setUserName(state, name) {
      state.User = name
    }

  },
  actions: {
  },
  modules: {
  }
})
