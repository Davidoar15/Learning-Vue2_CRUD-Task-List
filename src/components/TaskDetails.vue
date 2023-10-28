<scrip lang="ts">
    import { Task } from "@/interfaces/task";
    import { defineComponent } from "vue";
    import { getTask, updateTask, deleteTask } from "../services/taskService";

    export default defineComponent({
        data() {
            return {
                currentTask: {} as Task
            };
        },

        methods: {
            async loadTask(id: string) {
                const res = await getTask(id); 
                this.currentTask = res;
            },

            async handleUpdate() {
                if (typeof this.$route.params.id === "string") {
                    const res = await updateTask(this.$route.params.id, this.currentTask);
                    this.$router.push("/");
                }
            },

            async handleDelete() {
                if (typeof this.$route.params.id === "string") {
                    const res = await deleteTask(this.$route.params.id);
                    this.$router.push("/");
                }
            },
        },

        mounted() {
            if (typeof this.$route.params.id === "string") {
                this.loadTask(this.$route.params.id)
            };
        },
    });
</scrip>

<template>
    <h1>Task Detail</h1>

    <form @submit.prevent="handleUpdate()">
        <input 
            type="text" 
            v-model="currentTask.title"
        />

        <textarea rows="3" v-model="currentTask.content"></textarea>

        <button>Update</button>
    </form>

    <button @click="handleDelete()">Delete</button>
</template>