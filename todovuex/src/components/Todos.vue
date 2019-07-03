<template>
  <div class="overflow-auto">
    <h3>To Do:</h3>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>
    <b-table id="my-table" :items="items" :per-page="perPage" :current-page="currentPage" small></b-table>
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
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: "Fred", last_name: "Flintstone" },
        { id: 2, first_name: "Wilma", last_name: "Flintstone" },
        { id: 3, first_name: "Barney", last_name: "Rubble" },
        { id: 4, first_name: "Betty", last_name: "Rubble" },
        { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
        { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
        { id: 7, first_name: "The Great", last_name: "Gazzoo" },
        { id: 8, first_name: "Rockhead", last_name: "Slate" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" }
      ]
    };
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"])
  }, //we use spread operator here so we can keep adding on methods later
  //mapActions is exactly what it sounds like, get the
  computed: {
    ...mapGetters(["allTodos"]), //array because allTodos in an array of objects
    rows() {
      return this.items.length;
    }
  },

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
