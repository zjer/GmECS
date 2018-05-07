import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/views/404'
import Login from '@/components/views/Login'
import Home from '@/components/views/Home'
import Table from '@/components/views/Table'
import Charts from '@/components/views/Charts'
import Seeting from '@/components/views/Seeting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: '目录',
      component: Home,
      iconCls: 'el-icon-location',
      isLeftNav: true,
      children: [
        { path: '/table', name: 'Table', component: Table }
      ]
    },
    {
      path: '/',
      name: '',
      component: Home,
      iconCls: 'icon-settings',
      isLeftNav: true,
      leaf: true,
      children: [
        { path: '/charts', name: '图表', component: Charts }
      ]
    },
    {
      path: '/',
      name: '',
      component: Home,
      iconCls: 'icon-settings',
      isLeftNav: true,
      leaf: true,
      children: [
        { path: '/seeting', name: '设置', component: Seeting }
      ]
    },
    /*{
      path: '/',
      component: Home,
      name: '导航二',
      iconCls: 'fa fa-id-card-o',
      children: [
        { path: '/page4', component: Page4, name: '页面4' },
        { path: '/page5', component: Page5, name: '页面5' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: 'Charts',
      iconCls: 'fa fa-bar-chart',
      children: [
        { path: '/echarts', component: echarts, name: 'echarts' }
      ]
    },*/
    {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
    }
  ]
})
