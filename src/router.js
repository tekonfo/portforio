import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import ProductList from '@/views/ProductList' // 商品一覧
import Product from '@/views/Product' // 商品情報（親ルート）
import About from '@/views/About/About'
import Portforio from '@/views/Portforio'
import Contact from '@/views/Contact'
import Detail from '@/views/Detail/Detail'
// Productの子ルートたち
import ProductHome from '@/views/Product/Home'
import ProductReview from '@/views/Product/Review'
import ProductReviewDetail from '@/views/Product/ReviewDetail'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    // 自己紹介ページ
    {
      path: '/about',
      component: About,
    },
    // メールでやり取りするページ
    {
      path: '/contact',
      component: Contact,
    },
    // ポートフォリオページ
    {
      path: '/portforio',
      component: Portforio,
    },
    // 商品情報ページ
    {
      path: '/portforio/:id',
      component: Detail,
      props: route => ({
        id: Number(route.params.id)
      })
    }
  ]
})
export default router
