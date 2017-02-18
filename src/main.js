import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// 开启DeBug 模式

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = {
    template: '<div><h2>我是第 1 个子页面</h2></div>'
};

import secondcomponent from './component/secondcomponent.vue';
import thirdcomponent from './component/thirdcomponent.vue';
import vforcom from './component/vforcom.vue';
import todolist from './component/todolist.vue';
//创建一个路由器实例
// 并且配置路由器规则

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/first',
        component: First,
    }, {
        path: '/second',
        component: secondcomponent,
    },{
      path : '/third',
      component : thirdcomponent,
    },
    {
      path : '/4',
      component : vforcom
    },
    {
      path : '/todo',
      component : todolist
    }
  ]
});

const app = new Vue({
    router: router,
}).$mount('#app');
