import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from "../views/home/Home.vue";
// import About from "../views/home/About.vue";
// import Contact from "../views/home/Contact.vue";
// import Products from "../views/home/Products.vue";

Vue.use(VueRouter)

const routes = [

  // {
  //   path: "/home",
  //   component: Home,
  //   name: "home"
  // },
  // {
  //   path: "/about",
  //   component: About,
  //   name: "about"
  // },

  // {
  //   path: "/contact",
  //   component: Contact,
  //   name: "contact"
  // },

  // {
  //   path: "/products",
  //   component: Products,
  //   name: "products"
  // },


  {
    path: '/',
    component: () => import('../layouts/Base.vue'),
    children: [

      { path: '/', component: () => import('../views/home/Home.vue') },
      { path: '/login', component: () => import('../views/account/Login.vue') },
      { path: '/signup', component: () => import('../views/account/Signup.vue') },
      { path: '/about', component: () => import('../views/home/About.vue') },
      { path: '/contact', component: () => import('../views/home/Contact.vue') },
      { path: '/profile', component: () => import('../views/home/Profile.vue') },
      { path: '/details/:idProduct', component: () => import('../views/home/Details.vue') },
      { path: '/cart', component: () => import('../views/home/Cart.vue') }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.MONGO_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // let loggedIn = JSON.parse(localStorage.getItem('e-comKey'))
  const loggedIn = localStorage.getItem("e-comKeys");
  const publicPages = ['/login', '/signup', '/about', '/contact'];
  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !loggedIn) {
    return next('/login');
  }
  else

    next();
})

export default router
