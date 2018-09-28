import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
    title: 'Mycustome title',
    links: [
        'http://google.com',
        'http://yahoo.com',
        'http://bing.com'
    ]
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
  })

  export default store