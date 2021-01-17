import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/recommend',
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: Recommend
  },
  {
    path: '/singer',
    name: 'singer',
    component: Singer
  },
  {
    path: '/rank',
    name: 'rank',
    component: Rank
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  }
]

export default new VueRouter({routes})
