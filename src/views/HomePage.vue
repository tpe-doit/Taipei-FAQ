<script setup>
import SearchBar from "../components/SearchBar.vue";
import CategorySquare from "../components/CategorySquare.vue";

import { newThings } from "../assets/categories";
</script>

<template>
	<div>
		<div class="title">
			<img src="../../public/logo.svg" width="40" height="40" />
			<h1>臺北市局處知識通</h1>
		</div>
		<SearchBar></SearchBar>
		<div id="line">
			<h2>問題類別</h2>
		</div>
		<p>
			本網站是一個問題整合平台，統整臺北市政府各局處網站上的常見問答，讓民眾不用煩惱該到哪個局處查詢。
		</p>
		<div class="pageOne">
			<CategorySquare
				v-for="newThing in newThings"
				:key="newThing.title"
				:title="newThing.title"
				:src="newThing.src"
			></CategorySquare>
		</div>
		<div class="info">
			<h3>2023~2024 臺北市政府資訊局大數據中心 實習生專案</h3>
			<br />
			<div class="link">
				<a href="https://github.com/annieleeeee" target="_blank"
					>@李思橙</a
				>&nbsp;&nbsp;&nbsp;
				<a href="https://github.com/Lauren8799" target="_blank"
					>@吳亞融</a
				>
			</div>
		</div>
	</div>
</template>

<style scoped>
#line {
	width: 1400px;
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
.pageOne {
	width: 1400px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 30px;
	display: grid;
	grid-template-columns: repeat(5, 1fr); /* 使每行顯示四個方塊 */
	gap: 75px;
}
h3 {
	color: gray;
	font-size: 18px;
	text-align: center;
}
a {
	color: gray;
	font-size: 18px;
	color: rgb(57, 173, 245);
}
.link {
	display: flex;
	justify-content: center;
}
.info {
	padding-top: 50px;
	padding-bottom: 50px;
}
p {
	font-size: 20px;
	color: black;
	text-align: center;
	padding-bottom: 50px;
}
h1 {
	font-size: 25px;
	color: black;
	font-weight: normal;
	display: flex;
	align-items: center;
}
.title {
	display: flex;
	justify-content: left;
	padding: 15px;
}
</style>
