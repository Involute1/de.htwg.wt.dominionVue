import Vue from 'vue'
import VueRouter from 'vue-router'
import Titlescreen from "@/components/Titlescreen";
import About from "@/components/About";
import Player from "@/components/Player";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/titlescreen"
  },
  {
    path: "/titlescreen",
    name: "titlescreen",
    component: Titlescreen
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/game',
    name: 'player',
    component: Player
  }
]

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
})

export default router
