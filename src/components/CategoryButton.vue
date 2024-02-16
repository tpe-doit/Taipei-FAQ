<script setup>
import { defineProps } from "vue";
import router from "../router";

defineProps(["title", "src"]);
</script>

<template>
	<RouterLink :to="`/${title}`">
		<span>{{ src }}</span> {{ title }}
	</RouterLink>
</template>

<style scoped>
a {
	color: white;
	font-size: 22px;
	width: 200px;
	height: 44px;
	display: flex;
	justify-content: left;
	margin-left: auto;
	margin-right: auto;
	align-items: center;
}
.router-link-active {
	color: lightgray !important;
}
.router-link-active span {
	color: lightgray !important;
}
span {
	font-family: var(--font-icon);
	color: white;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
}
</style>
