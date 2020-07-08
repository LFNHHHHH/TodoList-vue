<template>
  <transition-group class="minw100" name="el-fade-in-linear" tag="div">
    <div v-for="item in delItemList" :key="item" class="flexcfs shou fs12 mt20 shenhui w100">
      <div class="mr20">已完成</div>
      <div @click="remove" class="huadiao">{{ item }}</div>
    </div>
  </transition-group>
</template>

<script>
export default {
  data () {
    return {
      delItemList: []
    }
  },
  created () {
    this.getDelItemList()
  },
  methods: {
    getDelItemList () { // 获取 stroe 中的数据
      this.delItemList = this.$store.state.delItemList
    },
    remove (e) {
      this.$store.commit('remove', e)
    }
  }
}
</script>

<style scoped>
.shou:hover {
  cursor:pointer;
}
.huadiao {
  text-decoration: line-through;
}
</style>
