<script setup lang="ts">
defineProps<{ handleAddTodo: () => void }>();
const model = defineModel();
</script>

<template>
    <div class="input-box">
        <input type="text" class="input" v-model="model" />
        <button class="button" @click="handleAddTodo">추가</button>
    </div>
</template>

<style lang="scss" scoped>
.input-box {
    width: 100%;

    padding: 12px;

    display: flex;
    flex-direction: row;

    & > .input {
        flex: 1;

        padding-left: 24px;

        font-size: 1.8rem;

        border: none;
        border-top: 1px solid lightgrey;
        border-left: 1px solid lightgrey;
        border-bottom: 1px solid lightgrey;
        border-radius: 12px 0 0 12px;

        &:focus {
            outline: none;
        }
    }
}

.button {
    cursor: pointer;

    width: 80px;
    height: 40px;

    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;

    border: 1px solid lightgrey;
    border-radius: 0 12px 12px 0;

    background-color: #20c997;
}
</style>
