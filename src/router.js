import Vue from "vue";
import Router from 'vue-router'
import AboutPage from './components/AboutPage'
import LearningPlanPage from './components/LearningPlanPage'
import DictionaryPage from './components/DictionaryPage'
import GalleryPage from './components/GalleryPage'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            component: AboutPage
        },
        {
            path: '/plan',
            component: LearningPlanPage
        },
        {
            path: '/dictionary',
            component: DictionaryPage
        },
        {
            path: '/gallery',
            component: GalleryPage
        }
    ]
})