<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const overTimes = ref(0);

function handleScroll() {
	if (window.scrollY > 0) {
		document.querySelector(".answeritem").style.display = "none";
	} else {
		document.querySelector(".answeritem").style.display = "flex";
		overTimes.value++;
		localStorage.setItem("over", `${overTimes.value}`);
	}
}

onMounted(() => {
	if (!localStorage.getItem("over")) {
		localStorage.setItem("over", 0);
	}
	overTimes.value = Number(localStorage.getItem("over"));

	window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
	<Teleport to="body">
		<div class="answeritem">
			<p v-if="+overTimes < 20">嘿嘿滑太多囉 %_% 您在這個網站已滑超過 {{ overTimes }} 次了</p>
			<p v-else-if="+overTimes > 30 && +overTimes < 100">想不到吧又回來了 %_% 您在這個網站已滑超過 {{ overTimes }} 次了</p>
			<p v-else-if="+overTimes >= 100 && +overTimes <= 120">超過 100 次囉，120次後訊息會消失，什麼時候會回來呢？</p>
			<p v-else-if="+overTimes >= 130 && +overTimes <= 140">其實一下就會來了，現在 {{ overTimes }} 次了</p>
			<p v-else-if="+overTimes > 140 && +overTimes <= 300">{{ overTimes }} 次</p>
			<p v-else-if="+overTimes > 300 && +overTimes <= 500">無止境的滑動時間</p>
			<p v-else-if="+overTimes > 500 && +overTimes <= 520">感謝捧場至500下，後面沒彩蛋了</p>
			<p v-else-if="+overTimes > 520">{{ overTimes }}</p>
		</div>
	</Teleport>
</template>

<style scoped lang="scss">
.answeritem {
	position: fixed;
	top: 30px;
	left: 0;
	width: 100%;
	z-index: -1;
	display: flex;
	justify-content: center;
	transform: translateY(-8px);

	p {
		color: white
	}
}
</style>