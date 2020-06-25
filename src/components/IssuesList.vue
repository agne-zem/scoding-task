<template>
    <div class="issue-table-container">
        <div v-for="issue in issues" :key="issue.id" class="issue-item">
            <div>
                <b-form-checkbox class="toggle"
                                 v-model="issue.done"
                                 @change="handleToggleDone(issue)"
                >
                </b-form-checkbox>
            </div>
            <input class="edit-desc-area"
                   type="text"
                   :id="issue.id"
                   v-model="issue.description"
                   disabled
                   @blur="handleEditDisc()"
                   @keyup.enter="handleEditDisc()"
            />
            <div class="edit">
                <b-icon class="icon"
                        icon="pencil"
                        @click="editDescription(issue)"
                >
                </b-icon>
                <b-icon class="icon edit"
                        v-model="issue.trash"
                        icon="trash"
                        v-if="!issue.trash"
                        @click="handleToggleTrash(issue)"
                >
                </b-icon>
                <b-icon class="icon edit"
                        v-model="issue.trash"
                        icon="trash-fill"
                        v-if="issue.trash"
                        @click="handleToggleTrash(issue)"
                >
                </b-icon>
            </div>
        </div>
    </div>
</template>

<script>
    import { BIcon} from 'bootstrap-vue'
    import {mapActions} from 'vuex'
    export default {
        name: 'Issues',

        components: {
            BIcon
        },

        props: {
            issues: Array
        },

        methods: {
            ...mapActions([
                'editDone',
                'editTrashed',
                'editDesc'
            ]),

            editDescription(issue) {
                this.editedIssue = issue;
                document.getElementById(issue.id).disabled = false;
            },

            handleToggleTrash(issue) {
                const payload = {
                    issue: issue
                };

                this.editTrashed(payload);
            },

            handleToggleDone(issue) {
                const payload = {
                    issue: issue
                };

                this.editDone(payload);
            },

            handleEditDisc() {
                const issue = this.editedIssue
                const payload = {
                    issue: issue
                };

                this.editDesc(payload);
                document.getElementById(issue.id).disabled = true;
            }
        }
    }
</script>

<style>
    .hidden-header {
        display: none;
    }

    .issue-table-container {
        background-color:rgba(255, 255, 255, 0.5);
        padding-left: 15%;
        padding-right: 15%;
        padding-top: 4%;
        padding-bottom: 4%;
        margin-bottom: 4%;
    }

    .issue-item {
        padding: 8px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #2c3e50;
    }

    .desc-container {
        display: flex;
        text-align: left;
    }

    .icon {
        margin-left: 4px;
        margin-right: 4px;
        cursor: pointer;
    }

    .icon:hover {
        color: #fff;
    }

    .toggle {
        cursor: pointer;
    }

    input.edit-desc-area {
        text-align: center;
        background-color:rgba(255, 255, 255, 0.5);;
        border: none;
        width: 70%;
    }

    input.edit-desc-area {

    }

    input.edit-desc-area:disabled {
        background-color: transparent;
        border: none;
    }
</style>