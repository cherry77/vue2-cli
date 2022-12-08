<template>
	<div class="sidebar">
		<!-- <DRoleListPage @click-role-name="goToDetail" /> -->
		<!-- <DPermissionListPage /> -->
		<DRoleDetailPage :roleId="105" />
		<!-- <DPermissionDetailPage :permissionId="407" /> -->
		<!-- <DRoleForm /> -->
		<!-- <DRoleForm :roleId="117" /> -->
		<!-- <DPermissionForm /> -->
		<!-- <DPermissionForm :permissionId="409" /> -->
		<!-- <DBindPermissionForm :roleId="105" /> -->
	</div>
</template>

<script>
import { DRoleDetailPage } from 'down-ui/vue2'
export default {
	name: 'App',
	components: {
		DRoleDetailPage,
	},
	data() {
		return {}
	},
	created() {},
	methods: {},
}
</script>

<style>
.sidebar {
	margin: 50px;
}
</style>
