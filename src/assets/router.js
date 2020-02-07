import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import E404 from "./pages/E404";

const routes = [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '*',
      component: E404
    }
  ];


export const router = new VueRouter({
  routes,
  mode: 'history'
});
