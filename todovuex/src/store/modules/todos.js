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
    },
    async addTodo({ commit }, title) {
        //post because when we hit submit, its gonna be a post request
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos/',
            { title, completed: false });
        //we also want to send along the title (reponse.title). completed: false is there because for any
        //new to dos, we don't want to complete it.
        commit('newTodo', response.data)
        //remember, commit is basically throwing the response.data into a method we arbitrarily named newTodo, which
        //we'll use in mutations
    },

    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('removeTodo', id)
    }
}

//mutations are what is going to actually MUTATE the state
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    //taking in the state, and the todos array, 
    //take the state.todos and set it as the todos that are passed in
    newTodo: (state, todo) => (state.todos.unshift(todo)),
    //newTodo will take in state and a SINGLE todo
    //want to UNSHIFT (put in beggining on array, not the end. push will put at the end) 
    //it to state.todos
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
}


export default {
    state,
    getters,
    actions,
    mutations
}