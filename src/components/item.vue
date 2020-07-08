<template>
  <transition-group class="minw100" name="el-fade-in-linear" tag="div">
    <div class="mt20 fs12 flexcfs w100" v-for="item in itemList" :key="item">
      <div class="mr20">待完成</div>
      <div @click="delItem" class="shou flexcc shenhui">{{ item }}</div>
    </div>
  </transition-group>
</template>

<script>
export default {
  name: 'todoList-item',
  data () {
    return {
      itemList: []
    }
  },
  created () {
    this.getItemList()
    this.testActions()
  },
  methods: {
    testActions () {
      // this.$store.dispatch('testActions')
    },
    getItemList () { // 获取 stroe 中的数据
      this.itemList = this.$store.state.itemList
    },
    delItem (e) {
      this.$store.commit('delItem', e)
    }
  }
}
</script>

<style scoped>
.shou:hover {
  cursor:pointer;
}
</style>
