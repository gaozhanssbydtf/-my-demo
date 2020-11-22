<!--
 * @author: gaozhan
 * @Date: 2020-11-21 21:46:51
 * @LastEditors: gaozhan
 * @LastEditTime: 2020-11-22 00:15:43
 * @FilePath: \mydemo\src\components\templatess.vue
 * @Description: In User Settings Edit
-->
<template>
  <div style="width:400px;height:100px">
    <swipe :data="data" :autoPlay="false" :isDots="true" :initHeight="100">
      <div class="slotBox" v-for="(item, index) of  data" :key="index" :style="{background:item.bgcolor || '#ffffff'}">
        <div class="slotBoxChild1">{{item.name}}</div>
      </div>
    </swipe>
  </div>
</template>

<script>
import swipe from '../assets/commonComponents/swipe'
export default {
  name: 'templatess',
  components: {
    swipe
  },
    data () {
      return {
        data: [
          {
            name:'123123123',
            bgcolor:'#0087ff'
          },
          {
            name:'456456456',
            bgcolor:'#ececec'
          },
          {
            name:'89898989',
            bgcolor:'#cbcbcb'

            
          }
        ]
      }
    },
    mounted() {},
}
</script>

<style>
.slotBox {
  width: 300px;
  height: 200px;
}
  .slotBoxChild1 {
    display: flex;
    align-items: center;
    flex: 1 0 0;
    justify-content: center;
    


    
  }
</style>