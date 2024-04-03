<script setup lang="ts"></script>

<template>
    <TransitionGroup name="fade" appear>
        <slot />
    </TransitionGroup>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
