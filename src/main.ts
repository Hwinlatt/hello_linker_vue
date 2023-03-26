import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  'jquery/dist/jquery.min.js'
import "vue-awesome-paginate/dist/style.css";

import VueAweSomePaginate from 'vue-awesome-paginate'
createApp(App).use(store).use(router).use(VueAweSomePaginate).mount('#app')
