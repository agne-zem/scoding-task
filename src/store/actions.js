export default {
    addIssue: ({commit}, payload) => {
        commit('ADD_ISSUE', payload)
    },

    editDone: ({commit}, payload) => {
        commit('EDIT_DONE', payload)
    },

    editTrashed: ({commit}, payload) => {
        commit('EDIT_TRASHED', payload)
    },

    editDesc: ({commit}, payload) => {
        commit('EDIT_DESC', payload)
    }
}