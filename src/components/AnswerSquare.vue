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

function handleExpand() {
	console.log(props.title);
	isExpanded.value = true;
	const matchingObject = objectsArray.find((obj) => obj.問題 === props.title);
	if (matchingObject) {
		answer.value = matchingObject.答案;
		hint.value = matchingObject.點閱數;
		update.value = matchingObject.資料更新;
		agency.value = matchingObject.局處;
		link.value = matchingObject.網址;
		maintain.value = matchingObject.資料維護;
	}
	console.log(typeof link.value);
}

function handleRetract() {
	isExpanded.value = false;
}
</script>

<template>
	<div id="question">
		<h1>{{ title }}</h1>
		<button v-if="!isExpanded" @click="handleExpand">add</button>
		<button v-else @click="handleRetract">remove</button>
	</div>
	<div v-if="isExpanded" id="content">
		<div id="detail">
			{{ agency }} ｜ 點閱率：{{ hint }} ｜ 資料更新：{{ update }}
		</div>
		<div id="answer">{{ answer }}</div>
		<br />
		<div>
			<a v-if="link" :href="link" target="_blank">原問答網址</a> |
			{{ maintain }}
		</div>
	</div>
</template>

<style scoped>
button {
	font-family: var(--font-icon);
	color: black;
	font-size: 24px;
}
h1 {
	color: black;
	width: 940px;
	font-size: 20px;
	text-align: left;
	margin-left: 10px;
	color: black;
	margin-right: 30px;
	line-height: 1.2;
}
#question {
	width: 1020px;
	height: auto;
	border-radius: 5px;
	background: #ffffff;
	margin-top: 8px;
	margin-bottom: 8px;
	margin-right: auto;
	display: flex;
	color: black;
	margin-left: auto;
	padding-top: 10px;
	padding-bottom: 10px;
}
#content {
	color: black;
	width: 1000px;
	font-size: 18px;
	background: #ececec;
	text-align: left;
	margin-left: 25px;
	margin-bottom: 25px;
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
	width: 980px;
	font-size: 18px;
	background: #ececec;
	text-align: justify;
	line-height: 1.2;
	word-break: break-all;
	letter-spacing: 2px;
}
a {
	color: rgb(57, 173, 245);
}
div {
	color: gray;
	font-size: 18px;
}
</style>
