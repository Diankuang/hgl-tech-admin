import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const key = 'user'
const isLogin = 'isLogin'
const userId = 'userId'
const store = new Vuex.Store({
  state () {
    return {
      user: null,
      isLogin: '0',
      userId: ''
    }
  },
  getters: {
    getStorage: function (state) {
      if (!state.user) {
        state.user = JSON.parse(sessionStorage.getItem(key))
        state.isLogin = sessionStorage.getItem(isLogin)
      }
      return state.user
    }
  },
  mutations: {
    $_setUserId (state, value) {
      state.userId = value
      sessionStorage.setItem(userId, value)
    },
    $_setLogin (state, value) {
      state.isLogin = value
      sessionStorage.setItem(isLogin, value)
    },
    $_setStorage (state, value) {
      state.user = value
      sessionStorage.setItem(key, JSON.stringify(value))
    },
    $_removeStorage (state) {
      state.user = null
      sessionStorage.removeItem(key)
    }
  }
})
export default store
