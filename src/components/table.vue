<template>
   <div class="panel-body" id="table">
	   	<div class="panel-title">
	   		<span>表格</span>
	   	</div>
	   	<button  class="btn btn-info Right" >添加</button>
   		<div class="mt-20 bgMain"  >
   			<table class="table table-hover table-bordered" >
   				<thead>
   					<tr >
   						<th>姓名</th>
   						<th>性别</th>
   						<th>姓名</th>
   						<th>操作</th>
   					</tr>
   				</thead>
   				<tbody v-if="count">
   					<tr v-for="x in msg">
   						<td >{{x.iconUrl}}</td>
   						<td>{{x.id}}</td>
   						<td>{{x.name}}</td>
						<td><button v-bind:datafld="[x.id]"  class="btn btn-default" v-on:click="getclick(x.id)">点击</button></td>
   					</tr>
   				</tbody>
   			</table>
   			<mo-paging v-bind:currentPage="currentPage" v-bind:totla="count" v-bind:pageSize="pageSize"  @change="pageChange">
            </mo-paging>
   		</div>

            
   </div>
</template>

<script>
	
//	import Vue from 'vue'
	import MoPaging from './page.vue'
	export default{
		components : {
            MoPaging 
        },
        data(){
            return {
            	 pageSize : 5 , 
                currentPage : 1, 
                count : 0, 
                msg: []
            }
        },
         mounted() {
         	var _this = this;
//	        this.getData(_this);
			this.getList(_this);
	    },
        methods:{
//      	getData:function(_this){
//	        	Vue.http.get('../../static/js/table.json').then(function(data){
//	        		if(data.body.result == 200){
//	        			_this.msg = data.body.data.data;
//	        		}
//	        		
//				},function(response){
//					
//				})
//
//      	},
 			getList:function(_this) {
                //模拟
                let url = '../../static/js/table.json/?pageSize=5&currentPage=1'
                _this.$http.get(url)
                .then(({body}) => {
					_this.msg = body.data.data;
                    //子组件监听到count变化会自动更新DOM
                    _this.count = body.data.data.length;
                })
            },

            //从page组件传递过来的当前page
            pageChange:function(page) {
                this.currentPage = page
                this.getList()
            },
    		getclick:function(id){
    			console.log(id)
    		}
		
        }
    }
	
</script>
