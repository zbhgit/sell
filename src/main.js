import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from 'components/goods/goods';
import seller from 'components/seller/seller';
import ratings from 'components/ratings/ratings';
import VueResource from 'vue-resource';

import 'common/stylus/index.styl';

Vue.use(VueResource);
// 启用路由
Vue.use(VueRouter);
/* eslint-disable no-new */
let app = Vue.extend(App);

// 创建实例
let router = new VueRouter({
  //  设定呗选中时添加的类名
  linkActiveClass: 'active'
});

// 配置路由
router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  'seller': {
    component: seller
  }
});
// 路由启用
router.start(app, '#app');

