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
    <div class="col-md-4 offset-md-4">
        <h1 class="text-center h3 mb-4">Task Detail</h1>
    
        <form 
            @submit.prevent="handleUpdate()"
            class="card card-body mb-5"
        >
            <input 
                type="text" 
                v-model="currentTask.title"
                placeholder="Write a Title..."
                class="form-control mb-4"
            />
    
            <textarea rows="3" v-model="currentTask.content" placeholder="Write Task..." class="form-control mb-4"></textarea>
    
            <button 
                :disabled="!currentTask.title || !currentTask.content"
                class="btn btn-primary"
            >
                Update
            </button>
        </form>
    
        <div class="text-center">
            <button 
                @click="handleDelete()"
                class="btn btn-danger"
            >
                Delete
            </button>
        </div>
    </div>
</template>