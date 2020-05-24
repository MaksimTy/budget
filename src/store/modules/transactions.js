import Vue from "vue";

const transactionsStore = {
  namespaced: true,
  state: {
    list: {
      1:{
       type: 'INCOME',
       value: 100,
       comment: 'comments',
       id: 1,
     },
     2:{
       type: 'OUTCOME',
       value: -50,
       comment: 'comments',
       id: 2,
     },
   },
  },
  getters: {
    TotalBalance: ({ list }) => Object.values(list).reduce((acc, item) => {
      acc = acc + item.value;
      return acc;
    }, 0),
    filteredList : ({ list }) => param => {
      if(param === 1){
        return Object.values(list)
        .filter(item => item.value > 0)
        .reduce((acc, val) => {
          acc[val.id] = val;
          return acc;
        },{});
      } else if(param === -1) {
        return Object.values(list)
        .filter(item => item.value < 0)
        .reduce((acc, val) => {
          acc[val.id] = val;
          return acc;
        },{});
      } else{
        return Object.values(list)
        .reduce((acc, val) => {
          acc[val.id] = val;
          return acc;
      },{});
      }
    },
  },
  mutations: {

    ADD_TRANSACTION(state, item) {
      Vue.set(state.list, item.id, item);
    },
    DEL_TRANSACTION (state, id) {
      Vue.delete(state.list, id);
    }
  },
  actions: {
    addNewItem({ commit }, item) {
      commit("ADD_TRANSACTION", item);
    },
    deleteItem({ commit }, id) {
      commit("DEL_TRANSACTION", id);
    }
  }
};

export default transactionsStore;