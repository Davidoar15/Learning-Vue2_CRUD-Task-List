<script lang="ts">
    import { defineComponent } from "vue";
    import { getTasks } from "../services/taskService";
    import { Task } from "@/interfaces/task";


    export default defineComponent({
        data() {
            return {
                tasks: [] as Task[]
            };
        },

        methods: {  
            async loadTasks() {
                const res = await getTasks();
                this.tasks = res;
            }
        },

        mounted() {
            this.loadTasks()
        },
    });
</script>

<template>
    <ul>
        <li 
            v-for="task in tasks"
            :key="task._id"    
            @click="$router.push(`/tasks/${task._id}`)"
        >
            {{ task.title }}
        </li>
    </ul>
</template>