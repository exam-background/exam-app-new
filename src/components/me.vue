<template>
	<div id="me">
		<div class="me-img"><img src="../assets/me/1.png" /></div>
		<div class="me-class">{{className}}-{{proName}}-{{stuName}}</div>
		<div class="me-body">
 
			<div class="me-body-choice">
					<van-cell is-link  @click="updatePassword">修改密码</van-cell>
				<div @click="tc()">
					<van-cell is-link>安全退出</van-cell>
				</div>
			</div>
		</div>
		
					<van-popup v-model="pwdShow" round="true" style="width: 70%;height:20%;text-align: center;">
								<br />
								<h2>重置密码</h2>
								<br />
								<p>请输入新密码：<input type="password" v-model="nePass" size="10" maxlength="12" /></p>
								<br />
								<p align="center"><van-button round block type="info" @click="pwdUpdate" native-type="submit" style="width:70%">
					  提交
					</van-button></p>
					</van-popup>
					
					<van-popup v-model="show" round="true" style="width: 70%;height:20%;text-align: center;">
								<br />
								<h2>邮箱验证中</h2>
								<br />
								<p>请输入验证码：<input v-model="code" size="6" maxlength="4" /></p>
								<br />
								<p align="center"><van-button round block type="info" @click="checkMail" native-type="submit" style="width:70%">
					  提交
					</van-button></p>
					</van-popup>
	</div>
</template>

<script>
	import {
		Dialog
	} from 'vant';
	export default {
			data() {
					return {
						indexList: [],
						className: '',
						proName: '',
						stuName: '',
						activeNames1: [],
						activeNames2: [],
						activeNames3: [],
						meiriyilian: [],
						jobcuoti: [],
						shijuan : [],
						show:false,
						code:'',
						pwdShow:false,
						nePass:'',
						stuShow : true
					}
				},
		methods: {
			tc() {
				Dialog.confirm({
						title: '提示',
						message: '是否退出登录',
					})
					.then(() => {
						this.$store.commit("del_token");
						this.$router.push({
							path: "/dl"
						})
					})
					.catch(() => {

					});
			},
				updatePassword(){
							let url = "";
							let token = localStorage.getItem("stuToken");
							if(token.indexOf('BAN:') != -1 || token.indexOf('JIAO:') != -1){
								url = this.$location.teacherBackPassword;
							}else{
								url = this.$location.backPassword;
							}
							 let stuId = localStorage.getItem("stuToken").split("-")[2]
							 const params = new FormData();
							 params.append('id',stuId);
							
							 this.$axios.post(url,params).then(res=>{
							 	if(res.data.status === 100){
							 		Dialog.alert({
							 				message: res.data.msg,
							 			})
							 	}
							 })
							this.show = true;
						},
						checkMail(){
							let url = "";
							let token = localStorage.getItem("stuToken");
							if(token.indexOf('BAN:') != -1 || token.indexOf('JIAO:') != -1){
								url = this.$location.teacherCheckMail;
							}else{
								url = this.$location.checkMail;
							}
							 let stuId = localStorage.getItem("stuToken").split("-")[2]
							 const params = new FormData();
							 params.append('code',this.code)
							 params.append('id',stuId);
							 this.$axios.post(url,params).then(res=>{
							 	console.log(res)
							 	if(res.data.status === 100){
							 	 		Dialog.alert({
							 	 				message: res.data.msg,
							 	 			})
							 	 	}else if(res.data.status === 400){
								Dialog.alert({
										message: res.data.msg,
									})
							 	}else{
									this.show = false;
									this.pwdShow = true;
								}
							 })
							//alert("来验证了")
						},
						pwdUpdate(){
							 let url = "";
											let token = localStorage.getItem("stuToken");
											if(token.indexOf('BAN:') != -1 || token.indexOf('JIAO:') != -1){
												url = this.$location.teacherUpdatePassord;
											}else{
												url = this.$location.updatePassord;
											}
							let stuId = localStorage.getItem("stuToken").split("-")[2]
							const params = new FormData();
							params.append('newPassword',this.nePass)
							params.append('id',stuId);
							this.$axios.post(url,params).then(res=>{
								console.log(res)
								if(res.data.status === 100){
								 		Dialog.alert({
								 				message: res.data.msg,
								 			})
								 	}else if(res.data.status === 400){
												Dialog.alert({
														message: res.data.msg,
													})
								}else{
													this.show = false;
													this.pwdShow = false;
													Dialog.alert({
															message: res.data.msg,
														})
												}
							})
						}
		},mounted() {
			let stuId = localStorage.getItem("stuToken").split("-")[2]
							//alert(stuId)
							this.$axios.get(this.$location.getTeacherById, {
								params: {
									"id": stuId
								}
							}).then(res => {
								console.log(res.data)
								this.proName = res.data.data.teacherName;
								this.className = res.data.data.teacherPosition
								this.stuName = res.data.data.professionalName
							});
		}
	}
</script>

<style scoped>
	#me {
		width: 100%;
		height: 100%;
		background: url("../assets/me/1.jpg") no-repeat;
		background-size: 100%;
		position: fixed;
		overflow: hidden;
		overflow-y: scroll;
	}

	.me-img {
		padding: 5px;
		border: 1px solid #fff;
		border-radius: 100%;
		width: 20%;
		margin: 15% auto 0 auto;
		display: flex;
		justify-content: center;
	}

	.me-img>img {
		width: 80px;
		align-self: center;
	}

	.me-class {
		text-align: center;
		font-size: 20px;
		color: #fff;
		margin-top: 10px;
	}

	.me-study {
		width: 65%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		margin-top: 8%;
	}

	.me-study>div {
		font-size: 16px;
		color: #fff;
		padding: 2px 20px;
		text-align: center;
		border-radius: 15px;
		border: 1px solid #fff
	}

	.me-body {
		background: #efefef;
		height: 400px;
		margin-top: 8%;
	}

	.me-body-text {
		display: flex;
		height: 75px;
		background: #fff;
		align-items: center;
	}

	.me-body-text>div {
		flex: 1;
		text-align: center;
	}

	.me-body-text>div>div:nth-child(1) img {
		width: 25px;
	}

	.me-body-text>div>div:nth-child(2) {
		font-size: 15px;
		color: #8c8c8c;
		margin-top: 2px;
	}

	.me-body-choice {
		margin-top: 10px;
		height: 10px;
		background: #fff;
	}

	.me-body-choice>>>.van-cell {
		padding: 13px 45px;
	}

	.aa {
		border-bottom: 1px solid #ccc;
	}

	.me-body-choice>>>.van-cell__value--alone {
		color: #666666;
	}
</style>
