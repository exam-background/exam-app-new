<template>
  <div id="me">
    <div class="me-img"><img src="../../assets/me1/2.png"/></div>
    <div class="me-name">T02-前端-陈敏</div>
    <div class="me-mm">修改密码</div>
    <div class="me-body">
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item title="技术训练错题本" name="1">内容</van-collapse-item>
        <van-collapse-item title="就业训练错题本" name="2">内容</van-collapse-item>
        <van-collapse-item title="试卷错题" name="3">内容</van-collapse-item>
      </van-collapse>
      <div class="me-tc">
        <div @click="tc()">
          <div>退出当前账号</div>
          <div><van-icon name="arrow" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: '0',
    }
  },
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
  background: url("../../assets/me1/1.jpg") no-repeat;
  background-size: 100%;
  overflow: hidden;
  overflow-y: scroll;
  position: fixed;
}
.me-img{
  margin: 20% auto 0 auto;
  width: 100px;
  border: 1px solid #fff;
  border-radius: 100%;
  padding: 8px;
}
.me-img>img{
  width: 100%;
}
.me-name{
  text-align: center;
  color: #fff;
  font-size: 25px;
  margin-top: 10px;
}
.me-mm{
  border: 1px solid #fff;
  width: 100px;
  margin: 0 auto;
  height: 18px;
  line-height: 18px;
  border-radius: 18px;
  text-align: center;
  color: #fff;
  font-size:15px;
  margin-top: 10px;
}
.me-body{
  width: 100%;
  height:400px;
  background: #fff;
  margin-top: 10px;
  padding-top: 10px;
}
.me-tc{
  border-top:1px solid #000 ;
  height: 40px;
  border-bottom:1px solid #000 ;
  margin-top: 10px;
  padding: 4px 0 6px 0;
}
.me-tc>div{
  height: 90%;
  background: #8b57e0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 50px;
  font-size: 30px;
}
.me-tc>div>div:nth-child(2){
  margin-top: 8px;
}
</style>