import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let itemList = JSON.parse(window.localStorage.getItem('itemList')) ? JSON.parse(window.localStorage.getItem('itemList')) : []
let delItemList = JSON.parse(window.localStorage.getItem('delItemList')) ? JSON.parse(window.localStorage.getItem('delItemList')) : []

var store = new Vuex.Store({
  state: {
    itemList,
    delItemList
  },

  mutations: {
    addItem (state, msg) {
      let itemList2 = state.itemList
      itemList2.push(msg)
      state.itemList = itemList2
      window.localStorage.setItem('itemList', JSON.stringify(state.itemList))
    },
    delItem (state, e) {
      let item = e.target.innerHTML.trim()
      let index = state.itemList.findIndex(item2 => {
        return item2 === item
      })
      state.itemList.splice(index, 1)

      let delItemList2 = state.delItemList
      delItemList2.push(item)
      state.delItemList = delItemList2

      window.localStorage.setItem('itemList', JSON.stringify(state.itemList))
      window.localStorage.setItem('delItemList', JSON.stringify(state.delItemList))
    },
    remove (state, e) {
      let item = e.target.innerHTML.trim()
      let index = state.delItemList.findIndex(item2 => {
        return item2 === item
      })
      state.delItemList.splice(index, 1)

      let itemList2 = state.itemList
      itemList2.push(item)
      state.itemList = itemList2
      window.localStorage.setItem('itemList', JSON.stringify(state.itemList))
      window.localStorage.setItem('delItemList', JSON.stringify(state.delItemList))
    }
  },

  getters: {
    // getters 类似 computed
    // 在这里面写个方法
  },

  actions: {
    // actions 类似methods
    // 写方法对数据做出更改(异步操作)
    testActions () {
      setTimeout(() => {
        alert('Actions 的方法被调用了')
      }, 1500)
    }
  }
})

export default store
