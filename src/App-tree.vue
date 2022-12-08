<template>
	<div>
		<!-- <input v-model="searchText" type="text" />
		<button @click="searchNode">搜索</button> -->
		<DTree ref="treeRef" class="tree" :data="treeData" check />
	</div>
</template>

<script>
import { DTree } from 'down-ui/vue2'
export default {
	name: 'App',
	components: {
		DTree,
	},
	data() {
		return {
			treeData: [],
		}
	},
	created() {
		this.treeData = [
			...Array.from({ length: 10 }).map((_, index) => ({
				label: `Parent node ${index}`,
				children:
					index % 2 === 0
						? Array.from({ length: 10 }).map((_, index2) => ({
								label: `Leaf node ${index}-${index2}`,
						  }))
						: undefined,
			})),
		]
		console.log('===========', this.treeData)
	},
	methods: {
		searchNode() {
			this.$refs['treeRef'].treeFactory.searchTree(searchText.value, {
				isFilter: false,
			})
		},
	},
}
</script>

<style>
.sidebar {
	max-width: 256px;
	margin: 50px;
	border: 1px solid #f0f0f0;
	background-color: #f0f0f0;
}
</style>
