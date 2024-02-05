<script setup>
import { defineProps } from "vue";
import router from "../router";

defineProps(["title"]);
</script>

<template>
	<RouterLink :to="`/${title}`">
		{{ title }}
	</RouterLink>
</template>

<style scoped>
a {
	color: white;
	font-size: 24px;
	width: 190px;
	height: 44px;
	font-size: 24px;
	display: flex;
	justify-content: left;
	margin-left: auto;
	margin-right: auto;
}
.router-link-active {
	color: lightgray !important;
}
</style>
