<template>
	<div id="examine">
		<div class="examine-img">
			<img src="../assets/examine/2.jpg" />
		</div>
		<div class="examine-input" align="center">
			<select  v-model="classId"  @change="changeClass" style="width: 150px; text-align-last: center; margin: 0 auto; height: 30px;border-radius: 20px; background-color: transparent;border:2px solid black">
				<option v-for="(cl , index) in classes" :selected="index ==1" :key="index" :value="cl.id">{{cl.className}}</option>
			</select>
		</div>
		<div class="examine-body1">
			<div>
				<!-- <van-search class="aa" v-model="value1" shape="round" background="#fff" placeholder="请输入搜索关键词" right-icon='' /> -->
				<div class="examine-body-text">
					<div v-for="(item,index) in list" :key="index" @click="xs(item)">
						{{item.stuName}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				value: '',
				value1: '',
				showPicker: false,
				classes: [],
				columns: [],
				classId: null,
				list: [],
			};
		},
		methods: {
			changeClass(){
				if(this.classId != 0 ){
					this.$axios
						.get(this.$location.getStudentByClassId, {
							params: {
								id: this.classId 
							}
						})
						.then(response => {
							console.log(response.data.data)
							this.list = response.data.data;
						})
						.catch(function(error) {
							// 请求失败处理
							console.log("查询请求处理失败");
							console.log(error);
						});
				}
			},
			getClass() {
				let stuId = localStorage.getItem("stuToken").split("-")[2]
				let token = localStorage.getItem("stuToken");
				if (token.indexOf('BAN:') != -1) {
					//const params = new FormData();
					//params.append('id',stuId);
					this.$axios
						.get(this.$location.getBanClass, {
							params: {
								id: stuId
							}
						})
						.then(response => {
							console.log(response.data.data)
							this.classes = response.data.data;
							if(null != this.classes	){
								this.classId = response.data.data[0].id;
								this.changeClass();
								}
						})
						.catch(function(error) {
							// 请求失败处理
							console.log("查询请求处理失败");
							console.log(error);
						});
				} else if (token.indexOf('JIAO:') != -1) {
					// const params = new FormData();
					// params.append('id',stuId);
					this.$axios
						.get(this.$location.getJiaoClass, {
							params: {
								id: stuId
							}
						})
						.then(response => {
							
							this.classes = response.data.data;
							this.classId = response.data.data[0].id;
							this.changeClass();
						})
						.catch(function(error) {
							// 请求失败处理
							console.log("查询请求处理失败");
							console.log(error);
						});
				}
				//console.log(this.classes);
				// for(let i = 0 ; i < this.classes.length ; i ++){
				// 	alert(this.classes[i].className)
				// 	this.columns.push(this.classes[i].className)
				// }
			},
			onChange(index) {
				console.log(index)
				this.current = index;
			},
			onConfirm(value) {
				var values = value.join("-").toString()
				this.value = values;
				this.showPicker = false;
			},
			xs(stu) {
				this.$router.push({
				　　path: '/personal',
				　　query: {
					id: stu.id,
					'stuName':stu.stuName,
					'date':stu.openClassTime,
					'detail':stu.detail,
					'email':stu.email
				　　}
				
				});
			
			}
		},mounted() {
			this.getClass();
			console.log(this.classes)
		}
	}
</script>

<style scoped>
	#examine {
		position: fixed;
		width: 100%;
		height: 100%;
		background: url("../assets/examine/1.jpg") no-repeat;
		background-size: 110%;
		overflow: hidden;
		overflow-y: scroll;
	}

	.examine-img {
		width: 70%;
		margin: 0 auto;
		margin-top: 15%;
	}

	.examine-img>img {
		width: 100%;
	}

	.examine-img>div:nth-child(2) {
		text-align: center;
		color: #fff;
		font-size: 13px;
		margin-top: 10px;
		letter-spacing: 5px;
	}

	.examine-input {
		margin-top: 10px;
	}

	.examine-input>>>.van-cell {
		width: 45%;
		height: 30px;
		line-height: 30px;
		padding: 0;
		padding: 0 40px 0 65px;
		border-radius: 30px;
		margin: 0 auto;
	}

	.examine-body1 {
		height: 550px;
		background: #EFEFEF;
		margin-top: 18px;
		position: relative;
	}

	.examine-body1>div {
		width: 80%;
		position: absolute;
		top: -15px;
		left: 10%;
		background: #fff;
		border-radius: 6px;
		height: 530px;
	}

	.examine-body-text {
		display: flex;
		box-sizing: border-box;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-top: 10px;
		padding: 0 20px;
		height: 440px;
		overflow: hidden;
		overflow-y: scroll;
	}

	.examine-body-text>div {
		height: 80px;
		width: 80px;
		background: url("../assets/examine/1.png") no-repeat;
		background-size: 100%;
		color: #fff;
		text-align: center;
		line-height: 80px;
		font-size: 18px;
		margin-bottom: 10px;
	}

	.aa {
		width: 90%;
		margin: 0 auto;
	}

	#examine>>>.van-swipe__indicators {
		display: none;
	}
</style>
