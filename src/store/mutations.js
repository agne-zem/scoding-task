export default {
    ADD_ISSUE: (state, payload) => {
        var newIssue = {
            id: state.issues.length,
            done: false,
            trash: false,
            description: payload.issue.description
        };

        state.issues.push(newIssue);
    },

    EDIT_DONE: (state, payload) => {
        var issue = state.issues.find(issue => issue.id === payload.issue.id);
        issue.done = !issue.done;
    },

    EDIT_TRASHED: (state, payload) => {
        var issue = state.issues.find(issue => issue.id === payload.issue.id);
        issue.trash = !issue.trash;
    },

    EDIT_DESC: (state, payload) => {
        var issue = state.issues.find(issue => issue.id === payload.issue.id);

        issue.description = payload.issue.description;
    }
}