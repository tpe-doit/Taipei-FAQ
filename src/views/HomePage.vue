<script setup>
import SearchBar from "../components/SearchBar.vue";
import CategorySquare from "../components/CategorySquare.vue";
import { newThings } from "../assets/categories";
</script>

<template>
	<div class="base">
		<div class="title">
			<img src="../../public/logo.svg" width="30" height="30" />
			<h1>臺北市局處知識通</h1>
		</div>
		<SearchBar></SearchBar>
		<div id="line">
			<h2>問題類別</h2>
		</div>
		<p>
			本網站是一個問題整合平台，彙整臺北市政府各局處網站上的常見問答，讓民眾不用煩惱該到哪個局處查詢。
		</p>
		<div class="pageOne">
			<CategorySquare v-for="newThing in newThings" :key="newThing.title" :title="newThing.title"
				:src="newThing.src"></CategorySquare>
		</div>
		<div class="info">
			<h3>2023~2024 臺北市政府資訊局大數據中心 實習生專案</h3>
			<br />
			<div class="link">
				<a href="https://github.com/annieleeeee" target="_blank">@李思橙</a>&nbsp;&nbsp;&nbsp;
				<a href="https://github.com/Lauren8799" target="_blank">@吳亞融</a>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.base {
	width: 1200px;
	margin-left: auto;
	margin-right: auto;
}

.title {
	display: flex;
	padding: 15px;
	padding-left: 0;
	column-gap: 10px;

	h1 {
		font-size: 25px;
		color: black;
		font-weight: normal;
		display: flex;
		align-items: center;
		user-select: none;
	}
}

#line {
	margin-left: auto;
	margin-right: auto;
	margin-top: 50px;
	margin-bottom: 20px;
}

h2 {
	font-size: 32px;
	text-align: center;
	color: black;
	padding-bottom: 13px;
}

.pageOne {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	column-gap: 50px;
	row-gap: 50px
}

.info {
	padding-top: 50px;
	padding-bottom: 50px;
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



p {
	font-size: 20px;
	color: black;
	text-align: center;
	padding-bottom: 50px;
}



@media (max-width: 1280px) {
	.base {
		width: 90vw;
		max-width: 90vw;
	}

	.pageOne {
		column-gap: 30px;
		row-gap: 30px;
	}
}
</style>
