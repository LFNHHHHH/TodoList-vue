<template>
  <div class="hello">
    <h3>TodoList</h3>
    <div class="bgimg"></div>
    <div class="w100 flexcc">
      <!-- Todo -->
      <div class="minh900">
        <div class="mt20 flexcc">
          <el-input
            placeholder="Todo"
            v-model="msg"
            @keyup.enter.native="addItem"
            class="mr20"
            type="text"
            clearable>
          </el-input>
          <el-button type="primary" @click="addItem" icon="el-icon-plus"></el-button>
        </div>
        <!-- item -->
        <div class="flexc jcsa mt20">
          <router-link to="/daiban" tag="div" class="shou">待办事项</router-link>
          <router-link to="/yiwanc" tag="div" class="shou">已完成事项</router-link>
        </div>
        <transition name="el-fade-in-linear" appear mode="out-in">
          <router-view></router-view>
        </transition>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'todoList',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    addItem () {
      if (this.msg.trim() === '') {
        this.msg = ''
        return
      }
      this.$store.commit('addItem', this.msg)
      this.msg = ''
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
.minh900 {
  min-height: 900px;
}
.ml50 {
  margin-left: 50px;
}
.minw100 {
  min-width: 100px;
}
</style>
