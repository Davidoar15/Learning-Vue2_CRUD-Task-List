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
    <ul class="list-group">
        <li 
            v-for="(task, index) in tasks"
            :key="task._id"    
            @click="$router.push(`/tasks/${task._id}`)"
            class="list-group-item list-group-item-action"
        >
            {{ index + 1 }}.
            {{ task.title }}
        </li>
    </ul>
</template>