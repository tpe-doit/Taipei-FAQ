<script setup>
import { defineProps } from "vue";

defineProps(["title", "src"]);
</script>

<template>
	<div class="category">
		<RouterLink :to="`/${title}`">
			<span>{{ src }}</span>
			<br />
			<h1>{{ title }}</h1>
		</RouterLink>
	</div>
</template>

<style scoped lang="scss">
span {
	font-family: var(--font-icon);
	color: white;
	font-size: 75px;
}

h1 {
	color: white;
	padding: 10px;
}

div {
	border: 1px solid #393939;
	background: #555555;
	width: 200px;
	height: 180px;
	border-radius: 5px;
	box-sizing: border-box;
	/* 避免寬度被邊框撐大 */
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.category:hover {
	background-color: var(--color-complement-text);
	transition: background-color 0.3s;
	cursor: pointer;
}

@media screen and (max-width: 1280px) {
	div {
		width: 180px;
		height: 170px;
	}

	span {
		font-size: 70px;
	}

	h1 {
		font-size: 20px;
	}
}

@media screen and (max-width: 750px) {
	div {
		width: 150px;
		height: 140px;
	}

	span {
		font-size: 60px;
	}

	h1 {
		font-size: 15px;
	}
}
</style>
