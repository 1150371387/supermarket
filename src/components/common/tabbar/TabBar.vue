<template>
	<div>
		<div id="tab-bar">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:'TabBar'
	}
</script>

<style>
	#tab-bar{
		display: flex;
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #9DA0A4;
	}
</style>
