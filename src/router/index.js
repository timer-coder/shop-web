import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import HomeLogin from '../components/HomeLogin.vue'
import SignUp from '../components/SignUp.vue'
import UserHome from '../components/UserHome.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/homelogin', component: HomeLogin },
  { path: '/signup', component: SignUp },
  { path: '/userhome', component: UserHome }
]

const router = new VueRouter({
  routes
})

export default router
