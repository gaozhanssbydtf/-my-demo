<!--
 * @author: gaozhan
 * @Date: 2019-12-31 20:30:09
 * @LastEditors: gaozhan
 * @LastEditTime: 2020-11-22 12:13:54
 * @FilePath: \mydemo\src\components\HelloWorld.vue
 * @Description: In User Settings Edit
-->
<template>
<div id="projectPosition3D"></div>

</template>

<script>
  import CesiumViewer from "../assets/js/cesiumViewer.js";

  export default {
    name: 'HELLOworld',

    

    data () {
      return {
       }
    },

    watch: {},
    computed: {},
    mounted(){
    window.CesiumViewerLoader = new CesiumViewer("projectPosition3D");
    CesiumViewerLoader.setHome()
    // CesiumViewerLoader.drawAndShareLine()
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
</style>
