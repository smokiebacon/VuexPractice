<template>
  <div>
    <h3>To Do:</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
//similar to connect in Redux
export default {
  name: "Todos",
  computed: mapGetters(["allTodos"])
  //this allows us get the state of allTodos
};
</script>

<style>
</style>
