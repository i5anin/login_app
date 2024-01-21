import { createRouter, createWebHistory } from "vue-router";

import HomeView from './views/HomeView.vue'
import LoginView from "./views/LoginView.vue"
import NotFoundView from "./views/NotFoundView.vue"


const routes = [
    { name: 'home', path: '/', component: HomeView },
    { path: '/login', component: LoginView },
    { path: '/:pathMath(.*)*', component: NotFoundView }
]
export default createRouter({
    history: createWebHistory(),
    routes
})