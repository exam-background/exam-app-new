<template>
  <div id="me">
    <div class="me-img"><img src="../assets/me/1.png"/></div>
    <div class="me-class">225班-前端-陈某某</div>
    <div class="me-study">
      <div>已学20小时</div>
      <div>已学7节课</div>
    </div>
    <div class="me-body">
      <div class="me-body-text">
        <router-link tag="div" to="/check">
          <div><img src="../assets/me/2.png"/></div>
          <div>考核成绩</div>
        </router-link>
        <router-link tag="div" to="/information">
          <div><img src="../assets/me/2.png"/></div>
          <div>信息中心</div>
        </router-link>
        <router-link tag="div" to="/Classroom">
          <div><img src="../assets/me/2.png"/></div>
          <div>我的课堂</div>
        </router-link>
      </div>
      <div class="me-body-choice">
        <router-link class="aa" tag="div" to="/personal1"><van-cell is-link>个人信息</van-cell></router-link>
        <router-link class="aa" tag="div" to="/modify"><van-cell is-link>修改密码</van-cell></router-link>
        <div @click="tc()"><van-cell is-link>安全退出</van-cell></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    tc(){
      var type = confirm('确定要退出吗？')
      if(type){
        this.$store.commit("show",false)
        this.$router.push({
          path:"/dl"
        })
      }
    }
  },
}
</script>

<style scoped>
#me{
  width: 100%;
  height: 100%;
  background: url("../assets/me/1.jpg") no-repeat;
  background-size: 100%;
  position: fixed;
  overflow: hidden;
  overflow-y: scroll;
}
.me-img{
  padding: 5px;
  border: 1px solid #fff;
  border-radius: 100%;
  width: 20%;
  margin: 15% auto 0 auto;
  display: flex;
  justify-content: center;
}
.me-img>img{
  width: 80px;
  align-self:center;
}
.me-class{
  text-align: center;
  font-size: 20px;
  color: #fff;
  margin-top: 10px;
}
.me-study{
  width:65%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 8%;
}
.me-study>div{
  font-size: 16px;
  color: #fff;
  padding: 2px 20px;
  text-align: center;
  border-radius: 15px;
  border:1px solid #fff
}
.me-body{
  background: #efefef;
  height: 400px;
  margin-top: 8%;
}
.me-body-text{
  display: flex;
  height: 75px;
  background: #fff;
  align-items: center;
}
.me-body-text>div{
  flex: 1;
  text-align: center;
}
.me-body-text>div>div:nth-child(1) img{
  width: 25px;
}
.me-body-text>div>div:nth-child(2){
  font-size: 15px;
  color: #8c8c8c;
  margin-top: 2px;
}
.me-body-choice{
  margin-top: 10px;
  height: 10px;
  background: #fff;
}
.me-body-choice >>> .van-cell{
  padding:13px 45px ;
}
.aa{
  border-bottom: 1px solid #ccc;
}
.me-body-choice >>> .van-cell__value--alone{
  color: #666666;
}
</style>