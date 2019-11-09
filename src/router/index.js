import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "group-foo" */ '../views/home')
const Cinema = () => import(/* webpackChunkName: "group-foo" */ '../views/cinema')
const Mine = () => import(/* webpackChunkName: "group-foo" */ '../views/mine')
const Error = () => import(/* webpackChunkName: "group-foo" */ '../views/error')
const HomeComing = () => import(/* webpackChunkName: "group-foo" */ '../views/home/HomeComing')
const HomeHot = () => import(/* webpackChunkName: "group-foo" */ '../views/home/HomeHot')
const City = () => import(/* webpackChunkName: "group-foo" */ '../views/city')
const Search = () => import(/* webpackChunkName: "group-foo" */ '../views/search')

Vue.use(VueRouter)

const router = new VueRouter({
    mode:  'history',
    routes:[
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            name: 'home',
            redirect:'/home/p-hot',
            children: [
                {
                    path: 'p-coming',
                    component: HomeComing,
                    name: 'p-coming'
                },
                {
                    path: 'p-hot',
                    component: HomeHot,
                    name: 'p-hot'
                }
            ]
        },
        {
            path:'/cinema',
            component: Cinema,
            name: 'cinema'
        },
        {
            path:'/mine',
            component: Mine,
            name: 'mine'
        },
        {
            path:'/city',
            component: City,
            name: 'city'
        },
        {
            path:'/search',
            component: Search,
            name: 'search'
        },
        {
            path: '*',
            component: Error
        }
    ]
})
export default router