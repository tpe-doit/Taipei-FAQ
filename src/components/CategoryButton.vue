<script setup>
import { defineProps } from "vue";

defineProps(["title", "src"]);
</script>

<template>
	<RouterLink :to="`/${title}`" class="categorybutton">
		<span>{{ src }}</span> {{ title }}
	</RouterLink>
</template>

<style scoped>
.categorybutton {
	display: flex;
	justify-content: left;
	align-items: center;
	padding: 8px 0;
	color: white;
	font-size: 22px;

	span {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 10px;
		color: white;
		font-family: var(--font-icon);
		font-size: 20px;
	}

	@media (max-width: 750px) {
		font-size: 18px;
	}
}

.router-link-active {
	color: black !important;
}

.router-link-active span {
	color: black !important;
}
</style>
