<template>
  <div>
    <h3>Add To Do</h3>
    <div class="add">
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo..." />
        <input type="submit" value="submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit() {
      this.addTodo(this.title);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 8;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}

input[type="submit"] {
  flex: 3;
  background: #41b883;
  color: white;
  border: 1px solid #41b883;
  outline: 0;
  cursor: pointer;
}
</style>
