<script setup lang="ts">
import { ref, watch } from "vue";
import TextInput from "@/components/TextInput.vue";
import TodoItem, { ITodo } from "@/components/TodoItem.vue";
import { TODOLIST_KEY } from "@/constants/index";
import { getStorage, setStorage } from "@/utils/localStorage";
import FadeMotion from "@/components/motion/FadeMotion.vue";

const inputValue = ref<string>("");
const todos = ref<Array<ITodo>>(getStorage(TODOLIST_KEY));

const handleAddTodo = () => {
    const id = new Date().getTime();

    const todo = { id, text: inputValue.value, done: false };
    todos.value.push(todo);

    inputValue.value = "";
};

const handleCheckedTodo = (id: number) => {
    todos.value = todos.value.map((todo) => {
        if (todo.id === id) todo.done = !todo.done;
        return todo;
    });
};

const handleRemoveTodo = (id: number) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
};

watch(
    todos,
    () => {
        console.log(todos.value);
        setStorage(TODOLIST_KEY, todos.value);
    },
    {
        deep: true,
    }
);
</script>

<template>
    <TextInput v-model="inputValue" :handleAddTodo="handleAddTodo" />
    <div>
        <ul class="todo-list">
            <FadeMotion>
                <TodoItem
                    v-for="todo in todos"
                    :key="todo.id"
                    :id="todo.id"
                    :text="todo.text"
                    :done="todo.done"
                    :handeOnClick="() => handleRemoveTodo(todo.id)"
                    :handleChecked="() => handleCheckedTodo(todo.id)"
                />
            </FadeMotion>
        </ul>
    </div>
</template>

<style lang="css" scoped>
.todo-list {
    margin: 0;
    padding: 0 20px;

    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>
