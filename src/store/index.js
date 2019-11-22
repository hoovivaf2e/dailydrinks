import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: [{
      name: 'Soda',
      price: 20,
      notes: 'normal'
    }, {
      name: 'Orange juice',
      price: 50,
      notes: 'normal, no sugar'
    }, {
      name: 'Bubble Tea',
      price: 70,
      notes: 'normal, standard'
    }, {
      name: 'Fruit Tea',
      price: 40,
      notes: 'light ice, no sugar'
    }, {
      name: 'Milk Tea',
      price: 50,
      notes: 'hot, half sugar'
    }, {
      name: 'Green Tea Yakult',
      price: 60,
      notes: 'less ice, half sugar'
    }, {
      name: 'Honey Aloe Juice',
      price: 60,
      notes: 'less ice, light sugar'
    }]
  },
  mutations: {
    updateData (state, data) {
      state.tableData = data
    }
  },
  actions: {
  },
  modules: {
  }
})
