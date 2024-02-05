<script setup>
import SearchBar from "../components/SearchBar.vue";
import CategorySquare from "../components/CategorySquare.vue";
import { srcs } from "../assets/categories";
import { newThings } from "../assets/categories";
</script>

<template>
	<div>
		<RouterLink to="/next">Next</RouterLink>
		<SearchBar></SearchBar>
		<div id="line">
			<h2>問題類別</h2>
		</div>
		<div class="pageOne">
			<CategorySquare
				v-for="newThing in newThings"
				:key="newThing.title"
				:title="newThing.title"
				:src="newThing.src"
			></CategorySquare>
		</div>
	</div>
</template>

<style scoped>
#line {
	width: 1100px;
	border-bottom: 2px solid #393939;
	margin-left: auto;
	margin-right: auto;
	margin-top: 50px;
	margin-bottom: 50px;
}
h2 {
	font-size: 24px;
	text-align: center;
	color: black;
	padding-bottom: 13px;
}
.frame {
	border: 1px solid #393939;
	width: 220px;
	height: 200px;
	border-radius: 5px;
}
.pageOne {
	width: 1100px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 30px;
	display: grid;
	grid-template-columns: repeat(4, 1fr); /* 使每行顯示四個方塊 */
	gap: 60px;
}
</style>
