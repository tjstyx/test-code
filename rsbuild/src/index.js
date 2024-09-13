import Vue from 'vue';
import App from './App.vue';
import './index.css';

import router from './router/index'

new Vue({
  router,
  el: '#root',
  render: (h) => h(App),
});
