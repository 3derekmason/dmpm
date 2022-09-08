export const state = () => ({
  search: 'hello world',
})

export const getters = {
  getSearch(state) {
    return state.search
  },
}

export const mutations = {
  setSearch(state, string) {
    state.search = string
  },
}
