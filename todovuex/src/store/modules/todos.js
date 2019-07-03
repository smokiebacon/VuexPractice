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
        commit('setTodos', response.data)
        //commit is basically throwing the response.data into a method we arbitrarily named setTodos, which
        //we'll use in mutations
    }
}

//mutations are what is going to actually MUTATE the state
const mutations = {
    setTodos: (state, todos) => (state.todos = todos)
    //taking in the state, and the todos array, 
    //take the state.todos and set it as the todos that are passed in
}


export default {
    state,
    getters,
    actions,
    mutations
}