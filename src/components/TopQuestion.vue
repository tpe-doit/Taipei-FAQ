<script setup>
import { defineProps } from "vue";

defineProps(["question", "content", "link"]);
</script>

<template>
	<div class="top-question-content">
		<h1>{{ question }}</h1>
		<p>{{ content }}</p>
		<a v-if="link" :href="link" target="_blank">原問答網址</a>
	</div>
</template>

<style scoped>
h1 {
	margin: 15px;
	color: black;
	font-size: 20px;
	line-height: 1.4;
}
p {
	text-align: justify;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 10px;
	width: 285px;
	font-size: 18px;
	color: black;
	line-height: 1.2;
	word-break: break-all;
	letter-spacing: 2px;
}

.top-question-content {
	width: 100%;
	height: 260px;
	display: flex;
	flex-direction: column;
	background: #ffffff;
	border-radius: 10px;
	overflow-y: scroll;
	max-width: 320px;
	&::-webkit-scrollbar {
		height: 4px;
		width: 8px;
	}
	&::-webkit-scrollbar-track {
		background-color: white;
		border-radius: 10px;
		margin: 20px 130px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: gray;
	}
}
a {
	color: rgb(57, 173, 245);
	margin-left: 15px;
	font-size: 20px;
}
</style>
