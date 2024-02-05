<script setup>
import { onMounted } from "vue";
import { useAppStore } from "./store/appStore";
import { RouterView, useRoute } from "vue-router";

const appStore = useAppStore();
const route = useRoute();

onMounted(() => {
	appStore.checkIfMobile();

	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty("--vh", `${vh}px`);

	window.addEventListener("resize", () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	});
});
</script>

<template>
	<div class="app">
		<RouterView :key="route.fullPath"></RouterView>
	</div>
</template>

<style lang="scss" scoped>
.app {
	width: 100vw;
	min-height: 100vh;
	min-height: calc(var(--vh) * 100);
	background-color: white;
}
</style>
