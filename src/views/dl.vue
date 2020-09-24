<template>
	<div id="dl">
		<div class="dl-img"><img src="../assets/dl/2.jpg"></div>
		<div class="dl-input">
			<div>
				<select text-align="center" v-model="juese" style="width: 70%; text-align: center;margin-left: 50px; height: 30px;border-radius: 40px;text-align-last:center">
					<option value="学生">学生</option>
					<option value="班主任">班主任</option>
					<option value="教员">教员</option>F
				</select>
			</div>
			<div><input type="text" v-model="username" placeholder="请输入登录账号"><span><img src="../assets/dl/1.png" /></span></div>
			<div><input type="password" v-model="password" placeholder="请输入登录密码"><span><img src="../assets/dl/2.png" /></span></div>
		</div>
		<div class="dl-button"><button @click="dl()">登录</button></div>
		<van-loading v-show="logoShow" color="#550000" style="position: absolute;top: 43%;z-index:10;width: 80%;margin-left: 10%;margin-right: 10%;"
		 size="100px" vertical />
	</div>

</template>

<script>
	import {
		Loading
	} from 'vant';
	import {
		Dialog
	} from "vant";
	export default {
		data() {
			return {
				username: '',
				password: '',
				juese: '学生',
				logoShow: false
			}
		},
		methods: {
			dl() {
				if (this.juese === '') {
					Dialog.alert({
						theme: 'round',
						title: '提示',
						width: '70%',
						height: '30%',
						message: '请选择登录类型~'
					}).then(() => {

					});
					return;
				}
				if (this.username != "") {
					if (this.username.length >= 6) {
						var reg = /[\u4E00-\u9FA5]/;
						if (reg.test(this.username)) {
							Dialog.alert({
								theme: 'round',
								title: '提示',
								width: '70%',
								height: '30%',
								message: '用户名格式有误~'
							}).then(() => {

							});
							return;
						}
					} else {
						Dialog.alert({
							theme: 'round',
							title: '提示',
							width: '70%',
							height: '30%',
							message: '用户名长度为6~12位~'
						}).then(() => {

						});
						return;
					}
				} else {
					Dialog.alert({
						theme: 'round',
						title: '提示',
						width: '70%',
						height: '30%',
						message: '请输入用户名~'
					}).then(() => {

					});
					return;
				}

				if (this.password != "") {
					if (this.password.length >= 6) {
						var reg = /[\u4E00-\u9FA5]/;
						if (reg.test(this.password)) {
							Dialog.alert({
								theme: 'round',
								title: '提示',
								width: '70%',
								height: '30%',
								message: '密码格式有误~'
							}).then(() => {

							});
							return;
						}
					} else {
						Dialog.alert({
							theme: 'round',
							title: '提示',
							width: '70%',
							height: '30%',
							message: '密码长度为6~12位~'
						}).then(() => {

						});
						return;
					}
				} else {
					Dialog.alert({
						theme: 'round',
						title: '提示',
						width: '70%',
						height: '30%',
						message: '请输入密码~'
					}).then(() => {

					});
					return;
				}
				//输入验证成功

				if (this.juese === '学生') {
					this.logoShow = true;
					var data = this.$qs.stringify({
						loginName: this.username,
						loginPassword: this.password
					})
					this.$axios.post(this.$location.doLogin, data)
						.then(res => {
							if (res.data.status == 200) {
								this.$store.commit("set_token", res.data.data);
								this.$router.push({
									path: "/home1"
								})
							} else if (res.data.status == 400) {

								Dialog.alert({
									theme: 'round',
									title: '提示',
									width: '70%',
									height: '30%',
									message: '账号或密码错误~'
								}).then(() => {

								});
								this.logoShow = false;
							}
						}).catch(msg => {
							Dialog.alert({
								theme: 'round',
								title: '提示',
								width: '70%',
								height: '30%',
								message: '网络错误，请稍后重试~'
							}).then(() => {

							});
							this.logoShow = false;
						})
				} else if (this.juese === '班主任') {
					this.logoShow = true;
					var data = this.$qs.stringify({
						loginName: this.username,
						loginPassword: this.password
					})
					this.$axios.post(this.$location.banLogin, data)
						.then(res => {
							if (res.data.status == 200) {
								let token = "BAN:" + res.data.data;
								this.$store.commit("set_token", token);
								this.$router.push("/home")
							} else if (res.data.status == 400) {
								Dialog.alert({
									theme: 'round',
									title: '提示',
									width: '70%',
									height: '30%',
									message: '账号或密码错误~'
								}).then(() => {

								});
								this.logoShow = false;
							}
						}).catch(msg => {
							Dialog.alert({
								theme: 'round',
								title: '提示',
								width: '70%',
								height: '30%',
								message: '网络错误，请稍后重试~'
							}).then(() => {

							});
							this.logoShow = false;
						})
				} else if (this.juese === '教员') {
					this.logoShow = true;
					var data = this.$qs.stringify({
						loginName: this.username,
						loginPassword: this.password
					})
					this.$axios.post(this.$location.jiaoLogin, data)
						.then(res => {
							if (res.data.status == 200) {
								let token = "JIAO:" + res.data.data;
								this.$store.commit("set_token", token);
								this.$router.push("/home")
							} else if (res.data.status == 400) {

								Dialog.alert({
									theme: 'round',
									title: '提示',
									width: '70%',
									height: '30%',
									message: '账号或密码错误~'
								}).then(() => {

								});
								this.logoShow = false;
							}
						}).catch(msg => {
							Dialog.alert({
								theme: 'round',
								title: '提示',
								width: '70%',
								height: '30%',
								message: '网络错误，请稍后重试~'
							}).then(() => {

							});
							this.logoShow = false;
						})
				}

				// this.$store.commit("show", true)
				// this.$router.push({
				// 	path: "/home"
				// })
			}
		},mounted() {
			let stuId = localStorage.getItem("stuToken");
			if(null != stuId&&'' != stuId){
				if(stuId.split('-').length == 5){
					
					if(stuId.indexOf('BAN:') != -1 || stuId.indexOf('JIAO:') != -1){
						this.$router.push("/home");
					}else{
						this.$router.push("/home1");
					}
				}
			}
		}
	}
</script>

<style scoped>
	#dl {
		width: 100%;
		height: 100%;
		background: url("../assets/dl/1.jpg") no-repeat;
		background-size: 100%;
		position: fixed;
	}

	.dl-img {
		width: 180px;
		margin: 0 auto;
		margin-top: 35%;
	}

	.dl-img>img {
		width: 180px;
	}

	.dl-input {
		width: 70%;
		margin: 0 auto;
		margin-top: 18%;
	}

	.dl-input>div {
		position: relative;
		margin-top: 13px;
	}

	.dl-input>div>input {
		width: 100%;
		height: 40px;
		border-radius: 40px;
		border: 1px solid #fff;
		padding-left: 50px;
		box-sizing: border-box;
		outline: medium;
	}

	.dl-input>div>span {
		position: absolute;
		top: 10px;
		left: 20px;
	}

	.dl-input>div>span>img {
		width: 15px;
		height: 20px;
	}

	.dl-button {
		width: 70%;
		margin: 0 auto;
		margin-top: 15%;
	}

	.dl-button>button {
		width: 100%;
		height: 43px;
		border: 1px solid rgba(0, 0, 0, 0);
		border-radius: 40px;
		background: linear-gradient(to top, #4b29ac, #aa93fe);
		color: #fff;
		font-size: 18px;
		font-weight: bold;
	}

	.dl-cut {
		width: 70%;
		margin: 0 auto;
		color: #fff;
		display: flex;
		margin-top: 20px;
	}

	.dl-cut>div {
		border-right: 1px solid #fff;
		/* flex: 1; */
		padding: 0 10px;
		text-align: center;
		font-size: 15px;
	}

	.dl-cut>div:nth-child(3) {
		border-right: none;
	}
</style>
