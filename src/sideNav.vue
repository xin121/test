<template>
	<div class="product-nav-scene product-nav-main-scene side-nav">
		<div class="sidebar-content console-component-sidebar">
			<div class="sidebar-inner">
				<div class="sidebar-nav">
					<div class="sidebar-title sidebar-trans">
						<div class="sidebar-title-inner">
							<span class="glyphicon glyphicon glyphicon-triangle-right"></span>
							<span class="sidebar-title-text ng-binding">产品管理</span>
						</div>
					</div>
					<ul class="sidebar-trans" style="display: none;">
						<li class="nav-item ">
							<router-link to="/form" >
								<span class="nav-title"><i class="glyphicon glyphicon-tasks"></i>form</span> 
							</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/table:id=3" >
								<span class="nav-title"><i class="glyphicon glyphicon-align-justify"></i>table</span> 
							</router-link>
						</li>
					</ul>
				</div>
				<div class="sidebar-nav">
					<div class="sidebar-title sidebar-trans">
						<div class="sidebar-title-inner">
							<span class="glyphicon glyphicon-triangle-right"></span>
							<span class="sidebar-title-text ng-binding">新增</span>
						</div>
					</div>
					<ul class="sidebar-trans" style="display: none;">
						<li class="nav-item ">
							<router-link to="/c" >
								<span class="nav-title"><i class="glyphicon glyphicon-tasks"></i>实例</span> 
							</router-link>
						</li>
						
					</ul>
				</div>
			</div>
		</div>

	</div>
</template>


<style>

</style>