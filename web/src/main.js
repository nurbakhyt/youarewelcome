import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
import Chat from './Chat.vue';

new Vue({
  el: '#app',
  render: h => h(Chat)
});
