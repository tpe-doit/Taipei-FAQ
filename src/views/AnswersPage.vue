<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import SearchBar from "../components/SearchBar.vue";
import CategoryButton from "../components/CategoryButton.vue";
import TopQuestion from "../components/TopQuestion.vue";
import AnswerSquare from "../components/AnswerSquare.vue";

import { objectsArray } from "../assets/question";
import { categories } from "../assets/categories";

const route = useRoute();
const { category } = route.params;

const questions = ref([]);
const TopQuestions = ref([]);

onMounted(() => {
	if (!route.query.search && route.query.search !== "") {
		questions.value = objectsArray.filter(
			(obj) =>
				obj.類別一 === category ||
				obj.類別二 === category ||
				obj.類別三 === category
		).sort((a, b) => b.點閱數 - a.點閱數);
	} else {
		questions.value = objectsArray.filter(
			(obj) =>
				obj["問題"].includes(route.query.search) ||
				obj["答案"].toString().includes(route.query.search)
		).sort((a, b) => b.點閱數 - a.點閱數);
	}
	TopQuestions.value = [...questions.value]
		.sort((a, b) => b.點閱數 - a.點閱數)
		.splice(0, 3);
});
</script>

<template>
	<div class="answerspage">
		<div>
			<RouterLink to="/" class="answerspage-home"><img src="../../public/logo.svg" width="30" height="30" />
				<h1>臺北市局處知識通</h1>
			</RouterLink>
		</div>
		<div>
			<SearchBar></SearchBar>
		</div>
		<div class="answerspage-content">
			<div class="answerspage-content-category">
				<h2>問答類別</h2>
				<CategoryButton v-for="category in categories" :key="category.title" :title="category.title"
					:src="category.src"></CategoryButton>
			</div>
			<div class="answerspage-content-cont">
				<div class="answerspage-content-hot">
					<h2>{{ category }}熱門問題</h2>
					<div class="answerspage-content-hot-question" v-if="TopQuestions.length > 0">
						<TopQuestion v-for="TopQuestion in TopQuestions" :key="TopQuestion.question"
							:question="TopQuestion.問題" :content="TopQuestion.答案" :link="TopQuestion.網址"></TopQuestion>
					</div>
					<div v-else class="answerspage-content-noresponse">
						查無相符問答，建議使用其他關鍵字重新搜尋
					</div>
				</div>
				<div class="answerspage-content-answer">
					<h2>{{ category }}{{ route.query.search || route.query.search === "" ? "結果" : "類" }}</h2>
					<div v-if="questions.length > 0">
						<p>共 {{ questions.length }} 筆問題</p>
						<AnswerSquare v-for="question in questions" :key="question.問題" :title="question.問題">
						</AnswerSquare>
					</div>
					<div v-else class="answerspage-content-noresponse">
						查無相符問答，建議使用其他關鍵字重新搜尋
					</div>
				</div>
			</div>
		</div>
		<div class="answerspage-info">
			<h3>2023~2024 臺北市政府資訊局大數據中心 實習生專案</h3>
			<br />
			<div class="answerspage-info-link">
				<a href="https://github.com/annieleeeee" target="_blank">@李思橙</a>&nbsp;&nbsp;&nbsp;
				<a href="https://github.com/Lauren8799" target="_blank">@吳亞融</a>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.answerspage {
	width: 1200px;
	margin-left: auto;
	margin-right: auto;

	&-home {
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

	&-content {
		width: 100%;
		height: auto;
		display: grid;
		grid-template-columns: 200px 1fr;
		column-gap: 20px;
		margin-top: 30px;
		border: 10px;

		&-category {
			height: fit-content;
			padding: 15px;
			border-radius: 20px;
			background: gray;
			color: #ffffff;

			h2 {
				margin-bottom: 8px;
				color: #ffffff;
				font-size: 24px;
			}
		}

		&-cont {
			width: calc(100% - 35px);
			display: flex;
			flex-direction: column;
			row-gap: 20px;

			h2 {
				margin-bottom: 15px;
				color: black;
				font-size: 24px;
			}

			p {
				margin-bottom: 15px;
				color: gray;
				font-size: 1rem;
			}
		}

		&-hot {
			padding: 15px;
			border-radius: 20px;
			background: #ececec;

			&-question {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				column-gap: 15px;
			}
		}

		&-answer {
			height: auto;
			padding: 15px;
			border-radius: 20px;
			background: #ececec;
			overflow: hidden;
		}

		&-noresponse {
			margin: 20px 0 10px;
			color: gray;
			font-size: 20px;
		}
	}

	&-info {
		padding-top: 50px;
		padding-bottom: 50px;

		h3 {
			color: gray;
			font-size: 18px;
			text-align: center;
		}

		&-link {
			display: flex;
			justify-content: center;

			a {
				color: rgb(57, 173, 245);
				font-size: 18px;
			}
		}
	}


	@media (max-width: 1280px) {
		width: 90vw;
		max-width: 90vw;

		&-content {
			grid-template-columns: 1fr;
			row-gap: 20px;

			&-category {
				position: relative;
				display: flex;
				justify-content: center;
				column-gap: 25px;
				flex-wrap: wrap;
				padding-top: 48px;

				h2 {
					position: absolute;
					top: 15px;
				}
			}

			&-cont {
				width: 100%;
			}
		}
	}

	@media (max-width: 750px) {
		&-content {
			&-category {
				justify-content: space-around;
				column-gap: 0;
			}

			&-hot-question {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				row-gap: 15px;
			}
		}
	}
}
</style>
