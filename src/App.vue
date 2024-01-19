<script setup>
import { onMounted } from "vue";
import { useAppStore } from "./store/appStore";
import { RouterView } from "vue-router";

const appStore = useAppStore();

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
		<RouterView></RouterView>
	</div>
</template>

<style lang="scss" scoped>
.app {
	width: 100vw;
	height: 100vh;
	height: calc(var(--vh) * 100);
	background-color: white;
}
</style>
