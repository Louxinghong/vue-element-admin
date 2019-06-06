<template>
	<div id="tpl-of-switch">
		<el-switch
		  v-model="value1"
		  active-text="开"
		  inactive-text="关">
		</el-switch>
		<el-switch
		  style="display: block"
		  v-model="value2"
		  active-color="#13ce66"
		  inactive-color="#ff4949"
		  active-text="yes"
		  inactive-text="no">
		</el-switch>
		<slot name="my_content"></slot>
		<p>{{mytableviewcontent}}</p>
	</div>
</template>

<script>
	export default {
		name: 'TableView',
		props: {
			mytableviewcontent: {
				type: String
			}
		},
		data(){
			return {
				value1: true,
        value2: true
			}
		}
		
	};
</script>

<style scoped>
#tpl-of-switch > * {
	margin-top: 10px;
}
	
</style>