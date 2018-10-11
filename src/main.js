import Vue from 'vue';
import App from './App.vue';
import router from './routers';

/* eslint-disable no-new */
new Vue({
    router,
    el: '#app',
    template: '<App/>',
    components: {App}
})

