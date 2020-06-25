<template>
    <div class="trashed-issues-container">
        <div class="trashed-issues-header">
            <h2 class="text">
                Trashed issues
            </h2>
        </div>
        <Issues :issues="getTrashed"/>
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
                'getTrashed'
            ])
        }
    }
</script>

<style>
    .trashed-issues-container {
        background: #4ecdc4;
        border: none;
        margin-top: 5%;
    }

    .trashed-issues-header {
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