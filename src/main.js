import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import navbar from 'bootstrap-vue/es/components/navbar/navbar';
import container from 'bootstrap-vue/es/components/layout/container';
import row from 'bootstrap-vue/es/components/layout/row';
import col from 'bootstrap-vue/es/components/layout/col';
import img from 'bootstrap-vue/es/components/image/img';
import card from 'bootstrap-vue/es/components/card/card';
import cardImg from 'bootstrap-vue/es/components/card/card-img';

Vue.component('b-navbar', navbar);
Vue.component('b-container', container);
Vue.component('b-row', row);
Vue.component('b-col', col);
Vue.component('b-img', img);
Vue.component('b-card', card);
Vue.component('b-card-img', cardImg);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
}).$mount('#app')

