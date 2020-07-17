import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store/store' //引入状态管理
import NProgress from 'nprogress' //引入进度条组件 cnpm install nprogress --save
import 'nprogress/nprogress.css'
Vue.use(Router)
/**
 *@parma {String} name 文件夹名称
 *@parma {String} component 视图组件名称
 */
const getComponent = (name,component) => () => import(`@/views/${name}/${component}.vue`);


//自定义router
const myRouter=new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: getComponent('login', 'index')
        },
        {
            path: '/',
            redirect: '/login',
            component: getComponent('login','index')
        },
        {
            path:'/home',
            component: getComponent('layout','Layout'),
            children:[{
                path: '/home',
                component: getComponent('index', 'index'),
                meta: {
                    title: '主页面'
                }
                },

                {
                    path: '/test1-1',
                    component: getComponent('test1/test1-1', 'index'),
                    meta: {
                        title: '测试页面1'
                    }
                },

                {
                    path: '/test1-2',
                    component: getComponent('test1/test1-1', 'index'),
                    meta: {
                        title: '测试页面2'
                    }
                }

            ]

        }

    ]
})
// 后续token验证拦截a
myRouter.beforeEach((to,from,next)=>{
    // 进度条gongju
    NProgress.start()
    // if (to.path !== '/login' && !store.state.token) {
    //     next('/login')     //跳转登录
    //     NProgress.done()   // 结束Progress
    // }
    next()
})
myRouter.afterEach(() => {
    NProgress.done() // 结束Progress
})

export  default myRouter