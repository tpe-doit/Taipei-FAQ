<script setup>
import { defineProps } from "vue";

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
	height: 44px;
	display: flex;
	justify-content: left;
	margin-left: 20px;
	margin-right: auto;
	align-items: center;
}
.router-link-active {
	color: black !important;
	font-style: italic;
}
.router-link-active span {
	color: black !important;
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
