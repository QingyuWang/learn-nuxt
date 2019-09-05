import { getList } from '../api/index';
export const state = () => ({
  list: []
})

export const mutations = {
  set (state, data) {
    state.list = data
  },
  add (state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove (state, todo) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}

export const actions = {
  async fetchList ({ commit }, params) {
    const data = await getList(params);
    data !== null && commit('set', data);
  }
}