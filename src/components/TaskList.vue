<script lang="ts">
    import { defineComponent } from "vue";
    import { getTasks, updateTask } from "../services/taskService";
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
            },
            async toggleTaskStatus(task: Task) {
                task.done = !task.done;
                await updateTask(task._id, task);
            },
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
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    {{ index + 1 }}. {{ task.title }}
                </div>
                <button 
                    @click.stop="toggleTaskStatus(task)" 
                    class="btn btn-sm rounded" 
                    :class="{ 'btn-success': task.done, 'btn-danger': !task.done }"
                >
                    {{ task.done ? 'Done' : 'Not Done' }}
                </button>
            </div>
        </li>
    </ul>
</template>