// src/router/index.js

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import CompanyView from '../views/CompanyView.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/company', name: 'Company', component: CompanyView }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
