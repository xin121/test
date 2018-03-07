<template>
	<div>
		<sideTop></sideTop>
		<sideNav></sideNav>
		<div class="con" id="con">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import sideTop from './sideTop.vue'
	import sideNav from './sideNav.vue'
export default{
    components:{
        sideTop,
        sideNav
    },
    name: 'app'
}
</script>