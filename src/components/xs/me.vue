<template>
	<div id="me">
		<div class="me-img"><img src="../../assets/me1/2.png" /></div>
		<div class="me-name">{{className}}-{{proName}}-{{stuName}}</div>
		<div class="me-mm" @click="updatePassword">修改密码</div>
		<div class="me-body">
			<van-collapse v-model="activeNames1">
				<van-collapse-item title="技术训练错题本" name="2" icon="cross">
					<div v-for="(meiri , index) in meiriyilain" :key="index">
						<div class="meiridiv">
							<p>答题日期：<span style="color: red;font-weight: bold;" v-text="meiri.date"></span></p>
							<h2>题目{{index+1}}：<span v-text="meiri.title"></span></h2>
							<p>你的答案：<span style="color: red;font-weight: bold;" v-html="meiri.submitAnswer"></span></p>
							<br />


							<p>正确答案：<span style="color: red;font-weight: bold;" v-html="meiri.standardAnswer"></span></p>
							<span v-if="meiri.types == 0">
								<span v-for="(x,xindex) in meiri.xuan">
									<p>
										<span v-if="xindex == 1">A - </span>
										<span v-if="xindex == 2">B - </span>
										<span v-if="xindex == 3">C - </span>
										<span v-if="xindex == 4">D - </span>
										{{x}}
									</p>
								</span>
							</span>
						</div>
					</div>
				</van-collapse-item>
			</van-collapse>
							<van-collapse v-model="activeNames2">
								<van-collapse-item title="就业训练错题本" name="2" icon="cross">
									<div v-for="(meiri , index) in jobcuoti" :key="index">
										<div class="meiridiv">
											<p>答题日期：<span style="color: red;font-weight: bold;" v-text="meiri.date"></span></p>
											<h2>题目{{index+1}}：<span v-text="meiri.title"></span></h2>
											<p>你的答案：<span style="color: red;font-weight: bold;" v-html="meiri.submitAnswer"></span></p>
											<br />
											<p>正确答案：<span style="color: red;font-weight: bold;" v-html="meiri.standardAnswer"></span></p>
										</div>
									</div>
								</van-collapse-item>
							</van-collapse>
				<van-collapse v-model="activeNames3">
								<van-collapse-item title="试卷错题" name="2" icon="cross">
				<div v-for="(meiri , index) in shijuan" :key="index">
										<div class="meiridiv">
											<h2>题目{{index+1}}：<span v-text="meiri.title"></span></h2>
											<p>你的答案：<span style="color: red;font-weight: bold;" v-html="meiri.submitAnswer"></span></p>
											<br />
											<p>正确答案：<span style="color: red;font-weight: bold;" v-html="meiri.standardAnswer"></span></p>
										</div>
									</div>
								</van-collapse-item>
							</van-collapse>
			<div class="me-tc">
				<div @click="tc()">
					<div>退出当前账号</div>
					<div>
						<van-icon name="arrow" />
					</div>
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
				shijuan: [],
				show: false,
				code: '',
				pwdShow: false,
				nePass: '',
				stuShow: true
			}
		},
		methods: {
				updatePassword(){
							 let stuId = localStorage.getItem("stuToken").split("-")[2]
							 const params = new FormData();
							 params.append('id',stuId);
					
							 this.$axios.post(this.$location.backPassword,params).then(res=>{
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
						},
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
			}
		},
		mounted() {
			let stuId = localStorage.getItem("stuToken").split("-")[2]

			this.$axios.get(this.$location.getStuById, {
				params: {
					"id": stuId
				}
			}).then(res => {
				this.proName = res.data.data.professionalName
				this.className = res.data.data.className
				this.stuName = res.data.data.studentName
			});
			this.$axios.get(this.$location.meiriyilian, {
				params: {
					"studentId": stuId
				}
			}).then(res => {
				//alert(res.data.data)
				//console.log(res.data.data)
				this.meiriyilain = res.data.data;
			}).catch(error => {
				alert(error)
			})


			this.$axios.get(this.$location.jobcuoti, {
				params: {
					"studentId": stuId
				}
			}).then(res => {
				//alert(res.data.data)
				//console.log(res.data.data)
				this.jobcuoti = res.data.data;
			}).catch(error => {
				//alert(error)
			})

			this.$axios.get(this.$location.shijuan, {
				params: {
					"studentId": stuId
				}
			}).then(res => {
				//alert(res.data.data)
				//console.log(res.data.data)
				this.shijuan = res.data.data;
			}).catch(error => {
				//alert(error)
			})
		}
	}
</script>

<style scoped>
	#me {
		width: 100%;
		height: 100%;
		background: url("../../assets/me1/1.jpg") no-repeat;
		background-size: 100%;
		overflow: hidden;
		overflow-y: scroll;
		position: fixed;
	}

	.me-img {
		margin: 20% auto 0 auto;
		width: 100px;
		border: 1px solid #fff;
		border-radius: 100%;
		padding: 8px;
	}

	.me-img>img {
		width: 100%;
	}

	.me-name {
		text-align: center;
		color: #fff;
		font-size: 25px;
		margin-top: 10px;
	}

	.me-mm {
		border: 1px solid #fff;
		width: 100px;
		margin: 0 auto;
		height: 18px;
		line-height: 18px;
		border-radius: 18px;
		text-align: center;
		color: #fff;
		font-size: 15px;
		margin-top: 10px;
	}

	.me-body {
		width: 100%;
		height: 400px;
		background: #fff;
		margin-top: 10px;
		padding-top: 10px;
	}

	.me-tc {
		border-top: 1px solid #000;
		height: 40px;
		border-bottom: 1px solid #000;
		margin-top: 10px;
		padding: 4px 0 6px 0;
	}

	.me-tc>div {
		height: 90%;
		background: #8b57e0;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 3px 50px;
		font-size: 30px;
	}

	.me-tc>div>div:nth-child(2) {
		margin-top: 8px;
	}
</style>
