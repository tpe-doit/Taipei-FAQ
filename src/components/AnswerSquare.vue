<script setup>
import { defineProps, ref } from "vue";
import { objectsArray } from "../assets/question";

const props = defineProps(["title"]);

const isExpanded = ref(false);
const answer = ref("");
const hint = ref("");
const update = ref("");
const agency = ref("");
const link = ref("");
const maintain = ref("");

function toggleExpand() {
	isExpanded.value = !isExpanded.value;
	if (isExpanded.value) {
		const matchingObject = objectsArray.find((obj) => obj.問題 === props.title);
		if (matchingObject) {
			answer.value = matchingObject.答案;
			hint.value = matchingObject.點閱數;
			update.value = matchingObject.資料更新;
			agency.value = matchingObject.局處;
			link.value = matchingObject.網址;
			maintain.value = matchingObject.資料維護;
		}
	}
}
</script>

<template>
	<div id="question" @click="toggleExpand">
		<h1>{{ title }}</h1>
		<button v-if="!isExpanded">add</button>
		<button v-else>remove</button>
	</div>
	<div v-if="isExpanded" id="content">
		<div id="detail">
			{{ agency }} ｜ 點閱率：{{ hint }} ｜ 資料更新：{{ update }}
		</div>
		<br />
		<p id="answer">{{ `${answer}` }}</p>
		<br />
		<div>
			<a v-if="link" :href="link" target="_blank">原問答網址</a> |
			{{ maintain }}
		</div>
	</div>
</template>

<style scoped lang="scss">
#question {
	position: relative;
	border-radius: 5px;
	background: #ffffff;
	display: flex;
	align-items: center;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-right: 45px;
	margin: 8px 0;
	cursor: pointer;

	h1 {
		color: black;
		font-size: 20px;
		text-align: justify;
		margin-left: 10px;
		line-height: 1.2;
	}

	button {
		position: absolute;
		right: 10px;
		font-family: var(--font-icon);
		color: black;
		font-size: 24px;
	}
}

#content {
	color: black;
	font-size: 18px;
	background: #ececec;
	text-align: left;
	margin: 20px 10px 20px 15px;
	padding-right: 5px;
	overflow-y: scroll;
	max-height: 260px;

	&::-webkit-scrollbar {
		height: 4px;
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background-color: #ececec;
		border-radius: 10px;
		margin: 20px 130px;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: gray;
	}
}

#detail {
	color: gray;
}

#link {
	color: gray;
	margin-left: 15px;
}

#answer {
	color: black;
	font-size: 18px;
	background: #ececec;
	text-align: justify;
	line-height: 1.2;
	word-break: break-all;
	letter-spacing: 2px;
	white-space: pre-line
}

a {
	color: rgb(57, 173, 245);
}

div {
	color: gray;
	font-size: 18px;
}
</style>
