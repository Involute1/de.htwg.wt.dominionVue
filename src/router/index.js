import Vue from 'vue'
import VueRouter from 'vue-router'
import Titlescreen from "@/components/Titlescreen";
import About from "@/components/About";
import GameView from "@/views/GameView";
import Authentication from "@/components/Authentication";

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
    name: 'game',
    component: GameView
  },
  {
    path: '/auth',
    name: 'auth',
    component: Authentication
  }
]

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
})

export default router
