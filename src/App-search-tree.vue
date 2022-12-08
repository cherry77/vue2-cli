<template>
	<div class="sidebar">
  <!-- <DModalSearchTree
    :data="treeData"
    :checkedKeys="checkedKeys"
    @change="checkChange"
    valueField="key"
    :checkable="true"
    :cascade="true"
    checkStrategy="parent"
  /> -->
  <DSearchTree
    :data="treeData"
    checkable
    cascade
    valueField="key"
    :checkedKeys="checkedKeys"
    @update:checkedKeys="checkChange"
  />
	</div>
</template>

<script>
import { DSearchTree, DModalSearchTree } from 'down-ui/vue2'
export default {
	name: 'App',
	components: {
		DSearchTree,
    DModalSearchTree
	},
	data() {
		return {
      value: true,
			treeData: [],
      checkedKeys: ['0']
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
                key: `${index}_${index2}`
						  }))
						: undefined,
			})),
		]
	},
	methods: {
    checkChange (val, nodes) {
      this.checkedKeys = val
    }
	},
}
</script>

<style>
.sidebar {
	margin: 50px;
}
</style>
