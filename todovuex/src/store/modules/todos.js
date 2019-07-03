//where our state, mutations, gettings, etc 
import axios from 'axios';

const state = {
    todos: [
        { id: 1, title: 'Todo One' },
        { id: 2, title: 'Todo Two' }
    ]
}

//getters, in order to get this into todo component to display, need to make a getter 
const getters = {
    allTodos: (state) => state.todos
    //we named it allTodos. needs to match in Todos.vue,  
    //computed: mapGetters(["allTodos"])

}
const actions = {}
const mutations = {}


export default {
    state,
    getters,
    actions,
    mutations
}