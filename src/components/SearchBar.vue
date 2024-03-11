<script setup>
import { defineProps, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import router from "../router/index";

defineProps(["title", "content"]);

const searchTerm = ref("");
const route = useRoute();

const handleSearch = () => {
	router.push(`/搜尋?search=${searchTerm.value}`);
};

onMounted(() => {
	if (route.query.search) {
		searchTerm.value = route.query.search;
	}
});
</script>

<template>
	<form class="searchbar" @submit.prevent="handleSearch">
		<input v-model="searchTerm" type="text" placeholder="輸入搜尋" class="searchbar-term" />
		<button type="submit" class="searchbar-button">
			<span>search</span>
		</button>
	</form>
</template>

<style scoped lang="scss">
.searchbar {
	width: min(585px, 90vw);
	height: 40px;
	position: relative;
	display: flex;
	align-items: center;
	margin-top: 30px;
	margin-left: auto;
	margin-right: auto;
	border-radius: 30px;
	background: #555;

	&-term {
		width: 510px;
		height: 30px;
		padding-left: 20px;
		border: 0px;
		border-radius: 30px;
		background: #555;
		color: white;
		font-size: 20px;
	}

	&-button {
		width: 30px;
		height: 30px;
		position: absolute;
		right: 5px;
		top: 5px;
		border-radius: 50%;
		background: #fff;

		span {
			color: black;
			font-family: var(--font-icon);
			font-size: var(--font-xl);
		}
	}
}
</style>
