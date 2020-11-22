/*
 * @author: gaozhan
 * @Date: 2019-12-31 20:30:09
 * @LastEditors: gaozhan
 * @LastEditTime: 2020-11-21 22:49:40
 * @FilePath: \mydemo\src\router\index.js
 * @Description: In User Settings Edit
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shipei from '@/components/shipei'
import templatess from '@/components/templatess'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'HelloWorld'
    }
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/shipei',
      name: 'shipei',
      component: shipei
    },
    {
      path: '/templatess',
      name: 'templatess',
      component: templatess
    }
  ]
})
