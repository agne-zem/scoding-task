<template>
    <div class="done-issues-container">
        <div class="done-issues-header">
            <h2 class="text">
                Done issues
            </h2>
        </div>
        <Issues :issues="getDone"/>
    </div>
</template>

<script>
    import { mapGetters} from 'vuex'
    import Issues from "@/components/IssuesList";

    export default {
        components: {
            Issues
        },

        computed: {
            ...mapGetters([
                'getDone'
            ])
        }
    }
</script>

<style scoped>
    .done-issues-container {
        background: #4ecdc4;
        border: none;
        margin-top: 5%;
        margin-bottom: 15%;
    }

    .done-issues-header {
        background-color:rgba(225, 225, 225, 0.5);
        padding: 0;
    }

    .text {
        margin: 0;
        padding: 16px;
        font-weight: bolder;
        color: #1a535c;
    }
</style>