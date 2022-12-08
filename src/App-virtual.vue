<template>
	<DVirtualList
		:dataSource="treeData"
		dataKey="key"
		:estimateSize="32"
		:keeps="14"
		:observeResize="false"
	>
		<template #item="item">
			<div>111111111111{{ item }}</div>
		</template>
	</DVirtualList>
</template>

<script>
import { DSearchTree, DModalSearchTree, DVirtualList } from 'down-ui/vue2'
export default {
	name: 'App',
	components: {
		DSearchTree,
		DModalSearchTree,
		DVirtualList,
	},
	data() {
		return {
			value: true,
			treeData: [],
			checkedKeys: ['0'],
		}
	},
	created() {
		this.treeData = [
			...Array.from({ length: 10 }).map((_, index) => ({
				label: `Parent node ${index}`,
				key: `${index}`,
				children:
					index % 2 === 0
						? Array.from({ length: 10 }).map((_, index2) => ({
								label: `Leaf node ${index}-${index2}`,
								key: `${index}_${index2}`,
						  }))
						: undefined,
			})),
		]
	},
	methods: {
		checkChange(val, nodes) {
			this.checkedKeys = val
		},
	},
}
</script>

<style>
.sidebar {
	margin: 50px;
}
</style>
