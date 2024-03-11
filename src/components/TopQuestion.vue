<script setup>
import { defineProps } from "vue";

defineProps(["question", "content", "link"]);
</script>

<template>
	<div class="topquestion">
		<h1>{{ question }}</h1>
		<p>{{ content }}</p>
		<a v-if="link" :href="link" target="_blank">原問答網址</a>
	</div>
</template>

<style scoped lang="scss">
.topquestion {
	width: 100%;
	height: 230px;
	display: flex;
	flex-direction: column;
	row-gap: 15px;
	padding: 15px 0;
	background:
		/* Shadow Cover TOP */
		linear-gradient(white 30%,
			rgba(255, 255, 255, 0)) center top,

		/* Shadow Cover BOTTOM */
		linear-gradient(rgba(255, 255, 255, 0),
			white 70%) center bottom,

		/* Shadow TOP */
		radial-gradient(farthest-side at 50% 0,
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0)) center top,

		/* Shadow BOTTOM */
		radial-gradient(farthest-side at 50% 100%,
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0)) center bottom;

	background-repeat: no-repeat;
	background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
	background-attachment: local, local, scroll, scroll;
	background-color: white;
	border-radius: 10px;
	overflow-y: scroll;

	h1 {
		color: black;
		margin: 0 10px 0 15px;
		font-size: 20px;
		line-height: 1.4;
		text-align: justify;
	}

	p {
		margin: 0 10px 0 15px;
		text-align: justify;
		font-size: 18px;
		color: black;
		line-height: 1.2;
		word-break: break-all;
		letter-spacing: 2px;
		white-space: pre-line;
	}

	a {
		margin: 0 10px 0 15px;
		color: rgb(57, 173, 245);
		font-size: 18px;
	}

	&::-webkit-scrollbar {
		height: 4px;
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		margin: 20px 130px;
		border-radius: 10px;
		background-color: white;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: gray;
	}

	@media (max-width: 750px) {
		height: 100px;
	}
}
</style>
