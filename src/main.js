import Vue from 'vue';
import App from './App.vue';

navigator.serviceWorker.getRegistrations()
  .then((registrations) => {
    registrations.forEach((registration) => {
      registration.unregister();
    });
  });

new Vue({
  render: h => h(App),
}).$mount('#app');
