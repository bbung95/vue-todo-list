<script setup lang="ts">
export interface ITodo {
    id: number;
    text: string | number;
    done?: boolean;
}

interface Props extends ITodo {
    handleChecked?: () => void;
    handeOnClick?: () => void;
}

const props = defineProps<Props>();
</script>

<template>
    <li class="item"><input class="check-box" type="checkbox" @change="handleChecked" :checked="done" /> {{ props.text }} <button @click="handeOnClick" class="button">X</button></li>
</template>

<style lang="css" scoped>
.item {
    list-style: none;

    width: 100%;
    height: 50px;

    padding: 8px 8px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    font-size: 1.8rem;
    text-align: left;

    border: 1px solid lightgrey;
    border-radius: 12px;
}

.check-box {
    width: 20px;
    height: 20px;
}

.button {
    box-sizing: border-box;
    cursor: pointer;

    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.4rem;

    border: 1px solid lightgray;
    border: none;
    border-radius: 8px;

    background-color: #ff5961;

    transition: all 0.1s;
}

.button:hover {
    scale: 1.1;
}
</style>
