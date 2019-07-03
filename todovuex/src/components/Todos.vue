<template>
  <div>
    <h3>To Do:</h3>

    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{todo.title}}
        <i v-b-popover.hover="'Edit Todo'" class="far fa-edit"></i>
        <i
          @click.prevent="deleteTodo(todo.id)"
          v-b-popover.hover="'Delete Todo'"
          class="fas fa-trash"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
//similar to connect in Redux
export default {
  name: "Todos",
  data() {
    return {
      hover: false
    };
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"])
  }, //we use spread operator here so we can keep adding on methods later
  //mapActions is exactly what it sounds like, get the
  computed: mapGetters(["allTodos"]), //array because allTodos in an array of objects

  //created is the same as ComponentDidMount lifecyle method in React
  created() {
    this.fetchTodos();
  }
  //this allows us get the state of allTodos
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid white;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  position: relative;
}

.fa-edit {
  position: absolute;
  bottom: 0.5em;
  right: 1.6em;
  color: white;
  cursor: pointer;
}
.fa-trash {
  position: absolute;
  bottom: 0.5em;
  right: 0.5em;
  color: white;
  cursor: pointer;
}

@media (max-width: 560px) {
  .todos {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 360px) {
  .todos {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
