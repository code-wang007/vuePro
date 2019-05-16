<template>
	<div>
		<br>
		<input
		  v-bind:value="searchText"
		  v-on:input="$emit('input', $event.target.value)"
		>
		<h3>自定义组件--》双向绑定:{{searchText}}</h3>
	</div>
</template>

<script>
	export default {
		props: ['searchText'],
		data() {
			return {
				value1: ''
			};
		},
		mounted() {
			console.log(this.searchText)
		}
	}
</script>

<style>

</style>
