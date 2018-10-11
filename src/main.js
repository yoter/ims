import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router/index'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueRouter);


new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
