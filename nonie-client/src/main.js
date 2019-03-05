import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);

import Dashboard from './components/Dashboard';

const routes = [
  { path: '/', component: Dashboard }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(Dashboard)
}).$mount('#app');