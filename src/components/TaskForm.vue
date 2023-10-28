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
                const res = await createTask(this.task);
                console.log(res);
            },
        },
    });
</script>

<template>
    <form @submit.prevent="saveTask()">
        <input 
            type="text"
            v-model="task.title"
            placeholder="Write a Title..."
        />

        <textarea rows="3" v-model="task.content" placeholder="Write Task..."></textarea>

        <button>Save</button>
    </form>
</template>