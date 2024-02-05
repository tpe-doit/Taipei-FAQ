<script setup>
import { defineProps, onMounted } from "vue";
import { useRoute } from "vue-router";
import router from "../router/index";
defineProps(["title", "content"]);

import { ref } from "vue";

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
	<form class="search" @submit.prevent="handleSearch">
		<input
			v-model="searchTerm"
			type="text"
			placeholder="QA"
			id="searchTerm"
		/>
		<button type="submit" id="searchButton">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 0 24 24"
				width="24px"
				fill="#000000"
			>
				<path d="M0 0h24v24H0V0z" fill="none" />
				<path
					d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
				/>
			</svg>
		</button>
	</form>
</template>

<style scoped>
.search {
	width: 585px;
	height: 40px;
	margin-top: 30px;
	border-radius: 30px;
	background: #555;
	display: flex;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
}
#searchButton {
	width: 30px;
	height: 30px;
	border-radius: 30px;
	border: 0px;
	margin-left: 15px;
	margin-top: 4px;
	background: #fff;
}
#searchTerm {
	width: 510px;
	height: 30px;
	border: 0px;
	background: #555;
	border-radius: 30px;
	font-size: 20px;
	color: white;
	padding-left: 15px;
}
</style>
