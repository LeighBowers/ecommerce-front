import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import account from './account'
import product from './product'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: "e-commerce",
  storage: window.localStorage,
})
export default function () {
  const Store = new Vuex.Store({
    modules: {
      account,
      product
    },
    plugins: [vuexLocalStorage.plugin],

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.MONGO_URL
  })

  return Store
}
