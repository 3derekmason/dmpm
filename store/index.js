export const state = () => ({
  search: '',
  filter: '',
})

export const getters = {
  getSearch(state) {
    return state.search
  },
  getFilter(state) {
    return state.filter
  },
}

export const mutations = {
  setSearch(state, string) {
    state.search = string
  },
  setFilter(state, string) {
    state.filter = string.toLowerCase()
  },
}
