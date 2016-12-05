import Vue from 'vue';
import App from './App';
import router from './router/index';
import './assets/css/weui.min.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
