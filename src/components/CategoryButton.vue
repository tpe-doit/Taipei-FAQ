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
	padding: 8px 0;
	display: flex;
	justify-content: left;
	align-items: center;
}

.router-link-active {
	color: black !important;
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

@media (max-width: 750px) {
	a {
		font-size: 18px;
	}
}
</style>
