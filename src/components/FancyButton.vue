<script setup>
import { defineProps } from 'vue';

defineProps(['title', 'content'])

</script>

<template>
    <button class="fancybutton"></button>
</template>

<style scoped>
.fancybutton {
    text-align: center;
    width: auto;
    font-size: 22px;
}
</style>