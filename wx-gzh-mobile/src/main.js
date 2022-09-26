// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App'; // 路由挂载
import router from './router'; // 路由列表
import Navigation from 'vue-navigation'; //	路由缓存
import store from './store';
// import _ from 'lodash';

import VueLazyload from 'vue-lazyload';
import infiniteScroll from 'vue-infinite-scroll';
// import VueAMap from 'vue-amap';
import VueWechatTitle from 'vue-wechat-title';
Vue.use(VueWechatTitle);

import preview from 'vue-photo-preview';
import 'vue-photo-preview/dist/skin.css';
Vue.use(preview);

// 懒加载
Vue.use(VueLazyload, {
  loading: '/static/loading-svg/loading-bubbles.svg',
});
// 滚动加载
Vue.use(infiniteScroll);

// 高德地图
// Vue.use(VueAMap);
// VueAMap.initAMapApiLoader({
//   // 高德的key
//   key: '136c762cc9e992e58f9f78fcccc2bf44',
//   plugin: [
//     'Autocomplete',
//     'PlaceSearch',
//     'Scale',
//     'OverView',
//     'ToolBar',
//     'MapType',
//     'PolyEditor',
//     'AMap.CircleEditor',
//     'Geolocation',
//   ],
// });

/*引用iview UI库*/
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'	// 使用 iview CSS
// Vue.use(iView)

Vue.use(Navigation, {
  router,
  store,
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App,
  },
});
