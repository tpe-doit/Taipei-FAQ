<script setup>
import SearchBar from "../components/SearchBar.vue";
import CategoryButton from "../components/CategoryButton.vue";
import TopQuestion from "../components/TopQuestion.vue";
import { objectsArray } from "../assets/question";

import { useRoute } from "vue-router";

import { onMounted, ref } from "vue";
import AnswerSquare from "../components/AnswerSquare.vue";
import { newThings } from "../assets/categories";

const route = useRoute();
const { category } = route.params;

const questions = ref([]);
const TopQuestions = ref([]);

onMounted(() => {
	if (!route.query.search) {
		questions.value = objectsArray.filter(
			(obj) =>
				obj.類別一 === category ||
				obj.類別二 === category ||
				obj.類別三 === category
		);
	} else {
		questions.value = objectsArray.filter(
			(obj) =>
				obj["問題"].includes(route.query.search) ||
				toString(obj["答案"]).includes(route.query.search)
		);
	}
	TopQuestions.value = [...questions.value]
		.sort((a, b) => b.點閱數 - a.點閱數)
		.splice(0, 3);

	console.log(TopQuestions.value);
});
</script>

<template>
	<div>
		<RouterLink to="/" class="toHome"
			><img src="../../public/logo.svg" width="40" height="40" />
			<h1>臺北市局處知識通</h1></RouterLink
		>
	</div>

	<div>
		<SearchBar></SearchBar>
	</div>
	<div class="content">
		<div class="category">
			<h2>問答類別</h2>
			<CategoryButton
				v-for="newThing in newThings"
				:key="newThing.title"
				:title="newThing.title"
				:src="newThing.src"
			></CategoryButton>
		</div>
		<div class="rightWrapper">
			<div class="hotQuestion">
				<h2>{{ category }}熱門問題</h2>
				<div
					class="hotQuestion-question"
					v-if="TopQuestions.length > 0"
				>
					<TopQuestion
						v-for="TopQuestion in TopQuestions"
						:key="TopQuestion.question"
						:question="TopQuestion.問題"
						:content="TopQuestion.答案"
						:link="TopQuestion.網址"
					></TopQuestion>
				</div>
				<div v-else class="noResponse">
					查無相符問答，建議使用其他關鍵字重新搜尋
				</div>
			</div>
			<div class="answer">
				<h2>{{ category }}{{ route.query.search ? "結果" : "類" }}</h2>
				<div v-if="questions.length > 0">
					<AnswerSquare
						v-for="question in questions"
						:key="question.問題"
						:title="question.問題"
					>
					</AnswerSquare>
				</div>
				<div v-else class="noResponse">
					查無相符問答，建議使用其他關鍵字重新搜尋
				</div>
			</div>
		</div>
	</div>
	<div class="info">
		<h3>2023~2024 臺北市政府資訊局大數據中心 實習生專案</h3>
		<br />
		<div class="link">
			<a href="https://github.com/annieleeeee" target="_blank">@李思橙</a
			>&nbsp;&nbsp;&nbsp;
			<a href="https://github.com/Lauren8799" target="_blank">@吳亞融</a>
		</div>
	</div>
</template>

<style scoped>
.rightWrapper {
	display: block;
	margin-left: 40px;
	margin-right: 40px;
}
.content {
	width: 100%;
	max-width: 1500px;
	height: auto;
	border: 10px;
	margin-top: 30px;
	margin-left: auto;
	margin-right: auto;
	display: grid;
	grid-template-columns: 222px 1fr;
}

.category {
	width: 205px;
	height: 500px;
	background: #555;
	border-radius: 20px;
	margin-top: 15px;
	color: #ffffff;
}
.category h2 {
	color: #ffffff;
	margin: 10px;
	padding-left: 5px;
	padding-top: 5px;
}
.hotQuestion {
	width: 1050px;
	height: 340px;
	border-radius: 20px;
	background: #ececec;
	margin-top: 15px;
	padding-top: 2px;
}

.hotQuestion-question {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	column-gap: 15px;
	margin: 0 15px;
}

h2 {
	margin: 15px;
	color: black;
	font-size: 23px;
}
.answer {
	width: 1050px;
	height: auto;
	border-radius: 20px;
	background: #ececec;
	margin-top: 10px;
	padding-top: 2px;
	padding-bottom: 2px;
	margin-bottom: 10px;
	overflow: hidden;
}
h3 {
	color: gray;
	font-size: 18px;
	text-align: center;
}
.link a {
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
span {
	font-family: var(--font-icon);
	color: white;
	font-size: 30px;
	display: flex;
	align-items: center;
	padding-left: 10px;
	padding-top: 10px;
}
h1 {
	font-size: 25px;
	color: black;
	font-weight: normal;
	display: flex;
	align-items: center;
}
.toHome {
	width: fit-content;
	font-size: 25px;
	color: black;
	font-weight: normal;
	display: flex;
	justify-content: left;
	padding: 15px;
}
.noResponse {
	color: gray;
	margin: 15px;
	font-size: 20px;
}
</style>
