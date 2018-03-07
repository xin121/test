<template>
	<ul id="example-2">
		<li v-for="(item,index) in items">
			{{parentMessage}} - {{index}} -{{item.message}}
		</li>
	</ul>
</template>

<script>
	var examples2 = new Vue({
		el:'#example-2',
		data:{
			parentMessage:'Parent',
			items:[
			{message:'Foo'},
			{message:'Bar'}
			]
		}
	})
</script>

<style>
</style>