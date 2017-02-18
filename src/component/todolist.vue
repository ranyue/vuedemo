<template>
<div>
    <input
    v-model="newTodoText"
    v-on:keyup.enter="addNewTodo"
    placeholder="Add a todo">
    <ul>
        <li
          v-for="(todo,index) in todos"
          v-bind:title="todo"
          v-on:remove="todos.splice(index,1)">{{todo}}
          <button v-on:click ="$emit('remove');">X</button>
          <button v-on:click ="todos.splice(index,1)">
        </li>
    </ul>

</div>
</template>

<script>
export default {
    data() {
        return {
            newTodoText: '',
            todos: [
                'Do the dishes',
                'Take out the trash',
                'Mow the lawn'
            ]
        }
    },
    methods: {
        addNewTodo: function() {
            this.todos.push(this.newTodoText);
            this.newTodoText = "";
        }
    }
}
</script>
