import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    todos: [],
    loading: false
}

const mutations = {
    setLoading(state, payload) {
        state.loading = payload
    },

    addTodo(state, payload) {
        state.todos.push(payload)
    },
    
    toggleTodo(state, payload) {
        const index = state.todos.findIndex(item => item.id === payload.id)
        if (index >= -1) {
            const checked = !state.todos[index].checked
            Vue.set(state.todos, index, {...state.todos[index], checked })
        }
    },

    removeTodo(state, payload) {
        state.todos = state.todos.filter(item => item.id !== payload.id)
    },

    toggleList(state, todosIds) {
        const todos = state.todos.map(item => {
            return todosIds.includes(item.id) ? {...item, checked: !item.checked} : item
        })
        state.todos = todos
    },

    removeList(state, todosIds) {
        const todos = state.todos.filter(item => !todosIds.includes(item.id))
        state.todos = todos
    }
}

const getters = {
    uncheckeds(state) {
        return state.todos.filter(todo => todo.checked === false)
    },

    checkeds(state) {
        return state.todos.filter(todo => todo.checked === true)
    }
}

const actions = {
    addTodo({commit}, todo) {
        commit('setLoading', true)
        return new Promise(resolve => {
            setTimeout(() => {
                todo.id = Date.now()
                commit('addTodo', todo)
                commit('setLoading', false)
                resolve(todo)
            }, 700)
        })
    },

    toggleTodo({commit}, todo) {
        commit('toggleTodo', todo)
    },

    removeTodo({commit}, todo) {
        commit('removeTodo', todo)
    },

    checkAll({commit}) {
        const uncheckedsIds = state.todos.filter(item => !item.checked).map(item => item.id)
        commit('toggleList', uncheckedsIds)        
    },

    uncheckAll({commit}) {
        const checkedsIds = state.todos.filter(item => item.checked).map(item => item.id)
        commit('toggleList', checkedsIds)        
    },

    removecheckAll({commit, state}) {
        const checkedsIds = state.todos.filter(item => item.checked).map(item => item.id)
        commit('removeList', checkedsIds)
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})

export default store