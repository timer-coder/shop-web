import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import HomeLogin from '../components/HomeLogin.vue'
import SignUp from '../components/SignUp.vue'
import UserHome from '../components/UserHome.vue'
import HaveBuy from '../components/HaveBuy.vue'
import HaveSell from '../components/HaveSell.vue'
import Like from '../components/Like.vue'
import SellingGoods from '../components/SellingGoods.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import BoyShirt from '../goods/clothes/BoyShirt.vue'
import Earphone from '../goods/phone/Earphone.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/homelogin', component: HomeLogin },
  { path: '/signup', component: SignUp },
  { path: '/userhome', component: UserHome },
  { path: '/havebuy', component: HaveBuy },
  { path: '/havesell', component: HaveSell },
  { path: '/like', component: Like },
  { path: '/sellinggoods', component: SellingGoods },
  { path: '/shoppingcart', component: ShoppingCart },
  { path: '/boyshirt', component: BoyShirt },
  { path: '/earphone', component: Earphone }
]

const router = new VueRouter({
  routes
})

export default router
