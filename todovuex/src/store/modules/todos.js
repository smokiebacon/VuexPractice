//where our state, mutations, gettings, etc 
import axios from 'axios';

const state = {
    todos: []
}

//getters, in order to get this into todo component to display, need to make a getter 
const getters = {
    allTodos: (state) => state.todos
    //we named it allTodos. needs to match in Todos.vue,  
    //computed: mapGetters(["allTodos"])

}

//actions are API requests basically
const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
        console.log(response.data)
    }
}

//mutations are what is going to actually MUTATE the state
const mutations = {}


export default {
    state,
    getters,
    actions,
    mutations
}