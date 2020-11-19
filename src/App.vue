<!--
 * @author: gaozhan
 * @Date: 2019-12-31 20:30:09
 * @LastEditors: gaozhan
 * @LastEditTime: 2020-11-19 23:13:18
 * @FilePath: \mydemo\src\App.vue
 * @Description: In User Settings Edit
-->
<template>
  <div id="app">
    <div @click="isShow = !isShow" class="showbutton">{{isShow ? '隐藏':'显示'}}</div>
    <div class="box" v-if="isShow">
      <div v-for="(item, index) in listData" :key="index" @click="changeLink(item,index)" :style="{background: index  === activeIndex ? '#0087ff': '#cccccc'}">{{item.name}}</div>
    </div>
    <div class="route">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
    data () {
      return {
        listData: [
          {
            name:'地图',
            id:'HelloWorld',
          },
          {
            name:'适配',
            id:'shipei',
          }
        ],
        activeIndex:0,
        isShow:true
       }
    },
    mounted() {},
    created() {
     this.$nextTick(() => {
        if(sessionStorage.activeIndex) {
        this.activeIndex = sessionStorage.activeIndex
      }
     })
    },
    beforeDestroy() {
      sessionStorage.removeItem('activeIndex')
    },
    methods: {
      changeLink(item,index) {
        this.activeIndex = index
        this.$router.push(item.id)
        sessionStorage.setItem('activeIndex', this.activeIndex)
      }
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
}
.box {
  flex: 0 0 200px;
  font-size: 20px;
  height: 100%;
  background: #ddd;
  /* color: #ffffff; */
}
.box > div {
  height: 30px;
}
.route {
  flex: 1 0 0;
  position: relative;
}
.showbutton {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 1;
  width: 60px;
  height: 30px;
  background: #ccc;
  text-align: center;
  line-height: 30px;
}
</style>
