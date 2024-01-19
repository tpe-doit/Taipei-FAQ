<script setup>
import FancyButton from '../components/FancyButton.vue'

const srcs = ['adasd', 'adsasdas', 'hello']
</script>

<template>
	<div>
		<h1>Next</h1>
		<FancyButton v-for="src in srcs" :key="src" :title="src" content="好玩">helasdasd</FancyButton>
	<RouterLink to="/">Home</RouterLink>
	</div>
</template>

<style scoped>

</style>