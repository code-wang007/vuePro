<template>
	<div id="toast">
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'toast组件'
			};
		}
	}
</script>

<style>
#toast{
	margin-bottom: 50px;
}
</style>
