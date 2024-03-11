<script setup>
import { defineProps } from "vue";

defineProps(["title", "src"]);
</script>

<template>
	<div class="categorysquare">
		<RouterLink :to="`/${title}`">
			<span>{{ src }}</span>
			<br />
			<h1>{{ title }}</h1>
		</RouterLink>
	</div>
</template>

<style scoped lang="scss">
.categorysquare {
	width: 200px;
	height: 180px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 5px;
	border: 1px solid #393939;
	background: #555555;
	text-align: center;
	box-sizing: border-box;

	&:hover {
		background-color: var(--color-complement-text);
		transition: background-color 0.3s;
		cursor: pointer;
	}

	span {
		color: white;
		font-family: var(--font-icon);
		font-size: 75px;
	}

	h1 {
		padding: 10px;
		color: white;
	}

	@media screen and (max-width: 1280px) {
		width: 180px;
		height: 170px;

		span {
			font-size: 70px;
		}

		h1 {
			font-size: 20px;
		}
	}

	@media screen and (max-width: 750px) {
		width: 150px;
		height: 140px;

		span {
			font-size: 60px;
		}

		h1 {
			font-size: 15px;
		}
	}
}
</style>
