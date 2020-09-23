<template>
  <div id="dl">
    <div class="dl-img"><img src="../assets/dl/2.jpg"></div>
    <div class="dl-input">
      <div><input type="text" v-model="username" placeholder="请输入注册账号"><span><img src="../assets/dl/1.png"/></span></div>
      <div><input type="password" v-model="password" placeholder="请输入登录密码"><span><img src="../assets/dl/2.png"/></span></div>
    </div>
    <div class="dl-button"><button @click="dl()">登录</button></div>
    <div class="dl-cut">
      <div>切换登录方式</div>
      <div>新用户登录</div>
      <div>忘记密码</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username:'',
      password:''
    }
  },
  methods: {
    dl(){
      if(this.username == '' && this.password == ""){
        alert("账号密码不能为空！")
      }else{
        this.$store.commit("show",true)
        if(this.username == '1'){
          this.$router.push({
            path:"/home"
          })
        }else{
          this.$router.push({
            path:"/home1"
          })
        }
      }
    }
  },
}
</script>

<style scoped>
#dl{
  width: 100%;
  height: 100%;
  background: url("../assets/dl/1.jpg") no-repeat;
  background-size: 100%;
  position: fixed;
}
.dl-img{
  width: 180px;
  margin: 0 auto;
  margin-top: 35%;
}
.dl-img>img{
  width: 180px;
}
.dl-input{
  width: 70%;
  margin: 0 auto;
  margin-top: 18%;
}
.dl-input>div{
  position: relative;
  margin-top: 13px;
}
.dl-input>div>input{
  width: 100%;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #fff;
  padding-left: 50px;
  box-sizing: border-box;
  outline:medium;
}
.dl-input>div>span{
  position: absolute;
  top: 10px;
  left: 20px;
}
.dl-input>div>span>img{
  width: 15px;
  height: 20px;
}
.dl-button{
  width: 70%;
  margin: 0 auto;
  margin-top: 15%;
}
.dl-button>button{
  width: 100%;
  height: 43px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 40px;
  background: linear-gradient(to top, #4b29ac , #aa93fe);
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}
.dl-cut{
  width: 70%;
  margin: 0 auto;
  color: #fff;
  display: flex;
  margin-top: 20px;
}
.dl-cut>div{
  border-right: 1px solid #fff;
  /* flex: 1; */
  padding: 0 10px;
  text-align: center;
  font-size: 15px;
}
.dl-cut>div:nth-child(3){
  border-right: none;
}
</style>