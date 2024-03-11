<script setup>
import SearchBar from "../components/SearchBar.vue";
import CategorySquare from "../components/CategorySquare.vue";
import { categories } from "../assets/categories";
</script>

<template>
	<div class="homepage">
		<div class="homepage-title">
			<img src="../../public/logo.svg" width="30" height="30" />
			<h1>臺北市局處知識通</h1>
		</div>
		<SearchBar></SearchBar>
		<div class="homepage-subtitle">
			<h2>問題類別</h2>
		</div>
		<p>
			本網站是一個問題整合平台，彙整臺北市政府各局處網站上的常見問答，讓民眾不用煩惱該到哪個局處查詢。
		</p>
		<div class="homepage-content">
			<CategorySquare v-for="category in categories" :key="category.title" :title="category.title"
				:src="category.src"></CategorySquare>
		</div>
		<div class="homepage-info">
			<h3>2023~2024 臺北市政府資訊局大數據中心 實習生專案</h3>
			<br />
			<div class="homepage-info-link">
				<a href="https://github.com/annieleeeee" target="_blank">@李思橙</a>&nbsp;&nbsp;&nbsp;
				<a href="https://github.com/Lauren8799" target="_blank">@吳亞融</a>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.homepage {
	width: 1200px;
	margin-left: auto;
	margin-right: auto;

	&-title {
		display: flex;
		column-gap: 10px;
		padding: 15px;
		padding-left: 0;

		h1 {
			display: flex;
			align-items: center;
			color: black;
			font-size: 25px;
			font-weight: normal;
			user-select: none;
		}
	}

	&-subtitle {
		margin-left: auto;
		margin-right: auto;
		margin-top: 50px;
		margin-bottom: 20px;
	}

	&-content {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		column-gap: 50px;
		row-gap: 50px
	}

	&-info {
		padding-top: 50px;
		padding-bottom: 50px;

		&-link {
			display: flex;
			justify-content: center;
		}
	}

	h2 {
		padding-bottom: 13px;
		color: black;
		font-size: 32px;
		text-align: center;
	}

	h3 {
		color: gray;
		font-size: 18px;
		text-align: center;
	}

	p {
		padding-bottom: 50px;
		color: black;
		font-size: 20px;
		text-align: center;
	}

	a {
		color: rgb(57, 173, 245);
		font-size: 18px;
	}

	@media (max-width: 1280px) {
		width: 90vw;
		max-width: 90vw;

		&-content {
			column-gap: 30px;
			row-gap: 30px;
		}
	}
}
</style>
