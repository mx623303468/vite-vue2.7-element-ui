import Vue from 'vue';
import ElementUI from '/plugins/element-ui.js';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
