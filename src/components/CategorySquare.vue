<script setup>
import { defineProps } from "vue";
import router from "../router";

defineProps(["title", "src"]);
</script>

<template>
	<div>
		<RouterLink :to="`/${title}`">
			<span>{{ src }}</span>
			<h1>{{ title }}</h1>
		</RouterLink>
	</div>
</template>

<style scoped>
span {
	font-family: var(--font-icon);
	color: black;
	font-size: 100px;
}
h1 {
	color: black;
}
div {
	border: 1px solid #393939;
	width: 220px;
	height: 200px;
	border-radius: 5px;
	box-sizing: border-box; /* 避免寬度被邊框撐大 */
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
</style>
