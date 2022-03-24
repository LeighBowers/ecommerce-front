import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/account/Login.vue";
import Home from "../views/home/Home.vue";
import About from "../views/home/About.vue";
import Contact from "../views/home/Contact.vue";
// import Profile from "../views/home/Profile.vue";
// import Products from "../views/home/Products.vue";

Vue.use(VueRouter)

const routes = [

  {
    path: "/home",
    component: Home,
    name: "home"
  },
  {
    path: "/about",
    component: About,
    name: "about"
  },

  // {
  //   path: "/profile",
  //   component: Profile,
  //   name: "profile"
  // },
  {
    path: "/contact",
    component: Contact,
    name: "contact"
  },
  {
    path: "/login",
    component: Login,
    name: "login"
  },
  // {
  //   path: "/products",
  //   component: Products,
  //   name: "products"
  // },


  {
    path: '/',
    component: () => import('../layouts/Base.vue'),
    children: [
      { path: '', component: () => import('../views/home/Home.vue') },
      { path: '', component: () => import('../views/home/Profile.vue') },
      {
        path: '/', component: () => import('../views/home/Products.vue')
      },
      { path: 'details/:idProduct', component: () => import('../views/home/Details.vue') },
      { path: 'cart', component: () => import('../views/home/Cart.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/account/Login.vue')
  },
  {
    path: '/signup',
    component: () => import('../views/account/Signup.vue')
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.MONGO_URL,
  routes
})

export default router
