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
	text-align: left;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 10px;
	width: 300px;
	font-size: 18px;
	color: black;
	line-height: 1.2;
}

.top-question-content {
	width: 100%;
	max-height: 260px;
	display: flex;
	flex-direction: column;
	background: #ffffff;
	border-radius: 10px;
	overflow-y: scroll;
}
a {
	color: rgb(57, 173, 245);
	margin-left: 30px;
	font-size: 20px;
}
</style>
