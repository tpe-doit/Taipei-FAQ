<script setup>
import { defineProps } from 'vue';

defineProps(['title', 'content'])

</script>

<template>
    <button class="fancybutton"><h1>{{ title }}</h1><p><slot></slot></p></button>
</template>

<style scoped>
.fancybutton {
    background-color: aqua;
}
</style>