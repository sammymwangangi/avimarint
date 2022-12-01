import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
    createPersistedState({
        key: 'liquorspring',
        paths: ['cart','favorite','menus'],
    })(store) // vuex plugins can be connected to store, even after creation

}
