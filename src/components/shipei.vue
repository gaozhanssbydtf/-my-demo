<template>
  <div>
    <div class="title">设计图宽750px,实际开发代码中像素减半</div>
    <div class="box1">设计图宽度375px，代码中187.5px torem(屏幕一半)</div>
    <div class="box"></div>
  </div>
</template>

<script>
  

  export default {
    name: 'shipei',
    data () {
      return {
       }
    },

    watch: {},
    computed: {},
    mounted(){
    
    },
    methods: {},

    created: function () {},

    destroyed: function () {
      
    },
  }

</script>

<style scope>
  #projectPosition3D {
    width: 100%;
    height: 100%;
  }
  .box1 {
    width: 3.75rem /* 187.5/50 */;
    background: red;
    font-size: 12px;
  }
  .title {
    font-size: 16px;
  }
</style>
