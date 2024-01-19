<script setup>
import { defineProps } from 'vue';

defineProps(['title'])

</script>

<template>
   <button id="btnCategory">{{ title }}</button>
</template>

<style scoped>
#btnCategory {
    width: 190px;
    height: 44px;
    font-size: 24px;
    display: flex;
    justify-content: left;
    margin-left: auto;
    margin-right: auto;
    background: #555;
    border: none;
    color: #FFFFFF;
}

</style>