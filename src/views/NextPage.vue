<script setup>
import SearchBar from "../components/SearchBar.vue";
import CategoryButton from "../components/CategoryButton.vue";
import TopQuestion from "../components/TopQuestion.vue";
import { objectsArray } from "../assets/question";

import { useRoute } from "vue-router";

import { onMounted, ref } from "vue";
import AnswerSquare from "../components/AnswerSquare.vue";

const catos = [
	"法律與賠償問題",
	"政府組織職責",
	"城市建設規劃",
	"文化教育活動",
	"環境衛生管理",
	"交通設施服務",
	"社會福利服務",
	"經濟發展就業",
	"科技通訊問題",
	"安全應急管理",
];

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
	TopQuestions.value = questions.value
		.sort((a, b) => b.點閱數 - a.點閱數)
		.splice(0, 3);

	console.log(TopQuestions.value);
});
</script>

<template>
	<div>
		<RouterLink to="/">Home</RouterLink>
		<SearchBar></SearchBar>
	</div>
	<div class="content">
		<div class="category">
			<h2>類別</h2>
			<CategoryButton
				v-for="cato in catos"
				:key="cato"
				:title="cato"
			></CategoryButton>
		</div>
		<div class="rightWrapper">
			<div class="hotQuestion">
				<h2>{{ category }}熱門問題</h2>
				<div class="hotQuestion-question">
					<TopQuestion
						v-for="TopQuestion in TopQuestions"
						:key="TopQuestion.question"
						:question="TopQuestion.問題"
						:content="TopQuestion.答案"
						:link="TopQuestion.網址"
					></TopQuestion>
				</div>
			</div>
			<div class="answer">
				<h2>{{ category }}{{ route.query.search ? "結果" : "類" }}</h2>
				<AnswerSquare
					v-for="question in questions"
					:key="question.問題"
					:title="question.問題"
				>
				</AnswerSquare>
			</div>
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
	width: 222px;
	height: 540px;
	background: #555;
	border-radius: 20px;
	margin-top: 15px;
	color: #ffffff;
}
.category h2 {
	color: #ffffff;
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
	font-size: 24px;
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
#topOne {
	width: 300px;
	height: 250px;
	background: #ffffff;
	margin-right: 15px;
	margin-left: 15px;
	border-radius: 10px;
	overflow-y: auto;
}

#topTwo {
	width: 300px;
	height: 250px;
	background: #ffffff;
	margin-right: 15px;
	margin-left: 15px;
	border-radius: 10px;
	overflow-y: auto;
}

#topThree {
	width: 300px;
	height: 250px;
	background: #ffffff;
	margin-right: 15px;
	margin-left: 15px;
	border-radius: 10px;
	overflow-y: auto;
}
p {
	text-align: left;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 10px;
	width: 270px;
	font-size: 20px;
	color: black;
}
#question {
	width: 940px;
	font-size: 20px;
	text-align: left;
	margin-left: 10px;
	color: black;
	margin-right: 30px;
}
#first {
	width: 1020px;
	height: auto;
	border-radius: 5px;
	background: #ffffff;
	margin-top: 8px;
	margin-bottom: 8px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
}

#second {
	width: 1020px;
	height: auto;
	border-radius: 5px;
	background: #ffffff;
	margin-top: 8px;
	margin-bottom: 8px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: left;
}
#answerDetail {
	width: 940px;
	font-size: 16px;
	text-align: left;
	color: #393939;
	margin-left: 10px;
}

#detail {
	width: 940px;
	font-size: 16px;
	text-align: left;
	color: #6e6e6e;
	margin-left: 10px;
}
#plusBtn {
	background: #ffffff;
	border: none;
	float: right;
	display: table-cell;
	vertical-align: middle;
}
#fontPlus {
	display: flex;
	justify-content: center;
}

#removeBtn {
	background: #ffffff;
	border: none;
	float: right;
	display: table-cell;
	vertical-align: middle;
}

#fontRemove {
	display: flex;
	align-items: center;
}
h3 {
	margin-top: 5px;
	margin-bottom: 5px;
}
</style>
