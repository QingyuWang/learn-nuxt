<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" class="toggle-btn" :checked="todo.done" @change="toggle(todo)" />
      <span :class="{ done: todo.done }">{{todo.text}}</span>     
    </li>
    <li>
      <input type="text" @keyup.enter="addTodo">
    </li>
  </ul>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState({
      todos: state => state.list
    })
  },
  methods: {
    addTodo (event) {
      const res = this.$store.commit('add', event.target.value);
    },
    test () {
      console.log('test')
    },
    ...mapMutations({
      toggle: 'toggle'
    })
  },
  async fetch ({ store }) {
    store.dispatch('fetchList', {});
  }
}
</script>
<style lang="less">
.toggle-btn {
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
}
.done {
  text-decoration: line-through;
}
</style>