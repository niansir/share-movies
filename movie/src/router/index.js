import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Movielist from '@/components/movie/movie_list'
import MoviePlayer from '@/components/movie/movie_player'
import Self from '@/components/self/self'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/movielist',
      name: 'Movielist',
      component: Movielist
    },
    {
      path: '/movieplayer',
      name: 'MoviePlayer',
      component: MoviePlayer
    },
    {
      path: '/self',
      name: 'Self',
      component: Self
    }
  ]
})
