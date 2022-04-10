<script>
import TodoInput from './TodoInput.vue'
import TodoItem from './TodoItem.vue'

export default {
    components: {
        TodoInput,
        TodoItem,
    },
    data(){
        return {
            tasks: [],
        };
    },
    methods: {
        addTask(item){
            this.tasks.push(item)
        },
        removeTask(index){
            this.tasks.splice(index,1)
        },
    },
}
</script>
<template>
    <div>
        <todo-input @abc="addTask"></todo-input>
        <ol>
            <!--<todo-item v-for="task in tasks" v-bind:xyz="task"></todo-item>-->
            <todo-item v-for="(task,index) in tasks" :xyz="task" @click.native="removeTask(index)"></todo-item>
        </ol>
    </div>
</template>