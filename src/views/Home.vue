<template>
    <div class="container grid-xs py-2">
      <div class="text-center">
        <h1 class="mb-1">KanBAN</h1>
        <h5 class="m-5">Faça suas tarefas com organização!</h5>
      </div>
      <form @submit.prevent="add(todo)">
        <div class="input-group">
          <input type="text" v-model="todo.description" class="form-input" placeholder="Digite um novo Todo">
          <button class="btn btn-primary input-group-btn" :class="{ loading }">Adicionar</button>
        </div>
      </form>
      <div class="todo-list">
        <Todo v-for="t in todos" :key="t.id" :todo="t" @toggle="toggleTodo" @remove="removeTodo" />
      </div>
    </div>
</template>

<script>
import Todo from '@/components/Todo';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'App',
  components: {
    Todo: Todo
  },
  data() {
    return {
      todo: {
        checked: false,
      }
    }
  },
  computed: {
    ...mapState(['todos', 'loading'])
  },
  methods: {
    ...mapActions(['addTodo', 'toggleTodo', 'removeTodo']),
    
    async add(todo) {
        await this.addTodo(todo)
        this.todo = {checked: false }
    },

  }
}
</script>

<style scoped>
.m-5 {
  margin-bottom: 1.5em;
}

.todo-list {
  padding-top: 2rem;
}
</style>