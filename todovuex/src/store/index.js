//will be our Entry point into Vuex
import Vuex from 'vuex';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import todos from './modules/todos';

//load Vuex
Vue.use(Vuex);
Vue.use(BootstrapVue)

//create our store
export default new Vuex.Store({
    modules: {
        todos
    }
})
