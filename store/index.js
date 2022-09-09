export const state = () => ({
  search: '',
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
