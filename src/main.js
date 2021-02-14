import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store/index';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: ImageList },
    { path: '/oauth2/callback', component: AuthHandler },
    { path: '/upload', component: UploadForm },
  ],
});

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App),
});
