import Vue from "vue";
import Router from 'vue-router'
import AboutPage from './components/AboutPage'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            component: AboutPage
        }
    ]
})