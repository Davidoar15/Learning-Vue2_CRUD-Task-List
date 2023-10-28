<script lang="ts">
    import { defineComponent } from "vue";
    import { Task } from "../interfaces/task";
    import { createTask } from "../services/taskService";

    export default defineComponent({
        data() {
            return {
                task: {} as Task,
            };
        },

        methods: {
            async saveTask() {
                await createTask(this.task);
                this.$router.push({ name: "tasks" })
            },
        },
    });
</script>

<template>
    <div class="col-md-4 offset-md-4">
        <form 
            @submit.prevent="saveTask()"
            class="card card-body"
        >
            <h1 class="text-center mb-4">Create Task!</h1>

            <input 
                type="text"
                v-model="task.title"
                placeholder="Write a Title..."
                autofocus
                class="form-control mb-4"
            />
    
            <textarea rows="3" v-model="task.content" placeholder="Write Task..." class="form-control mb-4"></textarea>
    
            <button 
                :disabled="!task.title || !task.content"
                class="btn btn-primary"
            >
                Save
            </button>
        </form>
    </div>
</template>