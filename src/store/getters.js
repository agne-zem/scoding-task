export default {
    getOpen: (state) => {
        return state.issues.filter((issue) => {
            return issue.done === false &&
                issue.trash === false;
        })
    },

    getDone: (state) => {
        return state.issues.filter((issue) => {
            return issue.done === true &&
                issue.trash === false;
        })
    },

    getTrashed: (state) => {
        return state.issues.filter((issue) => {
            return issue.trash === true;
        })
    }
}