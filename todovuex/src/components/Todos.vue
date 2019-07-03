<template>
  <div>
    <h3>To Do:</h3>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">{{todo.title}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
//similar to connect in Redux
export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos"])
  },
  computed: mapGetters(["allTodos"]), //array because allTodos in an array of objects
  created() {
    this.fetchTodos();
  }
  //this allows us get the state of allTodos
};
</script>

<style scoped>
.todos {
  display: grid;
  display-template-columns: repeat(3, 1fr);
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
</style>
