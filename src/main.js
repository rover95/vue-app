// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import router from './router';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from './components/goods/goods';
import seller from './components/seller/seller';
import radtings from './components/radtings/radtings';

import './conmmon/scss/index.scss';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  { path: '/', redirect: '/goods' },
  { path: '/goods', component: goods },
  { path: '/radtings', component: radtings },
  { path: '/seller', component: seller }
];
const router = new VueRouter({
  linkActiveClass: 'active',
  routes // （缩写）相当于 routes: routes
});

 /* eslint-disable no-new */
 /* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
