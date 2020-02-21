<template>
	<div class="tab-bar-item" :style="activeStyle" @click="btnClick">
		<slot name="item-icon"></slot>
		<slot name="item-title"></slot>
	</div>
</template>

<script>
	export default {
		name: 'TabBarItem',
		data() {
			return {
				// isActive: true
			}
		},
		methods: {
			btnClick() {
				// console.log('按钮点击')
				// console.log(this.$props.path)

				console.log(this.$route.path)
				console.log(this.path)
				console.log(this.$route)
				this.$router.push(this.path)
			}
		},
		props: {
			path: {
				type: String,
				default: '/home'
			},
			activeColor: {
				type: String,
				default: "#EED3D7"
			}
		},
		computed: {
			isActive() {
				return this.$route.path == this.path
			},
			activeStyle() {
				console.log(this.activeColor)
				return this.isActive ? {'background-color':this.activeColor} : {}
			}
		}
	}
</script>

<style>
	.tab-bar-item {
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
	}

	.tab-bar-item img {
		width: 20px;
		vertical-align: middle;
		margin-top: 3px;
		margin-bottom: 2px;
	}
</style>
