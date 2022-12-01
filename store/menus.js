export const state = () => ({
    all: [],
    liquorMenus:[]
})

export const mutations = {
    setMenus(state, menus) {
        state.all = menus
    },
      setLiquorMenus(state, menus) {
        state.liquorMenus = menus
    }

}
export const actions = {
    async getMenus({commit}) {
        const menus = await this.$http
            .$get('categories/get-by-menu', {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            })
            .then((response) => response.result)
            .catch(() => false);
        commit('setMenus', menus)
    },
      async getLiquorMenus({commit}) {
        const menus = await this.$http
            .$get('categories/liquor-menu', {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            })
            .then((response) => response.result)
            .catch(() => false);
        commit('setLiquorMenus', menus)
    }
}

