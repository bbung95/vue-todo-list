<script setup lang="ts"></script>

<template>
    <div class="container">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.container {
    box-sizing: border-box;

    width: 475px;
    height: 100vh;

    margin: 0 auto;

    border: 1px solid lightgrey;
}
</style>
