<template>
  <div class="open-issues-container">
    <div class="open-issues-header">
      <h2 class="text">
        Open issues
      </h2>
    </div>
    <b-form inline class="add-form"
            @submit.prevent="handleAdd"
    >
      <b-form-group id="input-group">
        <b-form-input
                class="issue-input"
                id="input-2"
                v-model="formData.description"
                required
                placeholder="Add new issue"
        ></b-form-input>
        <b-button
                class="add-button"
                type="submit"
                variant="dark"
        >
          +
        </b-button>
      </b-form-group>
    </b-form>
    <div>
      <Issues :issues="getOpen"/>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import Issues from "@/components/IssuesList";

  export default {
    components: {
      Issues
    },

    data() {
      return {
        formData: {
          description: ''
        }
      }
    },

    computed: {
      ...mapGetters([
        'getOpen'
      ])
    },

    methods: {
      ...mapActions([
        'addIssue'
      ]),

      handleAdd() {
        const description = this.formData.description;
        const payload = {
          issue: {
            description
          }
        };

        this.addIssue(payload);
      }
    }
  }
</script>

<style scoped>
  .form-group {
    width: 100%;
    text-align: center;
  }

  .issue-input {
    display: inline-block;
    background-color:rgba(255, 255, 255, 0.5);
    border: none;
    border-radius: 0;
    margin-right: 2px;

    width: 74%;

  }

  .add-button {
    border-radius: 0;

  }

  .add-form {
    position: relative;
    width: 100%;
    background-color:rgba(225, 225, 225, 0.5);
    padding: 16px;
  }

  .open-issues-container {
    background: #4ecdc4;
    border: none;
    margin-top: 5%;
  }

  .open-issues-header {
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