<template>
  <div id="personal">
    <div class="personal-dh">
      <div @click="ht()"><van-icon name="arrow-left" /></div>
    </div>
    <div class="personal-img"><img src="../../assets/personal/1.png"/></div>
    <div class="personal-bj">225班-前端</div>
    <div class="personal-body">
      <div><label>姓   名</label>：<input type="text"></div>
      <div><label>性   别</label>：<input type="text"></div>
      <div><label>年   龄</label>：<input type="text"></div>
      <div>联系方式：<input type="text"></div>
      <hr/>
      <div class="personal-button">
        <button @click="bc()">保存</button>
        <button>取消</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
   methods: {
    ht(){
      this.$router.go(-1)
    },
    bc(){
      Dialog.alert({
        message: '修改成功',
      }).then(() => {
        this.$router.push({
          path:"/home/me"
        })
      });
    }
  },
}
</script>

<style scoped>
#personal{
  width: 100%;
  height: 100%;
  background: url("../../assets/personal/1.jpg") no-repeat;
  background-size: 110%;
  position: fixed;
  overflow: hidden;
  overflow-y: scroll;
}
.personal-dh{
  height: 60px;
  line-height: 60px;
  color: #fff;
  font-size: 30px;
  position: fixed;
  padding: 0 20px;
}
.personal-img{
  padding: 5px;
  border: 1px solid #fff;
  border-radius: 100%;
  width: 20%;
  margin: 15% auto 0 auto;
  display: flex;
  justify-content: center;
}
.personal-img>img{
  width: 80px;
  align-self:center;
}
.personal-bj{
  text-align: center;
  color: #fff;
  font-size: 18px;
  margin-top: 7%;
}
.personal-body{
  background: #fff;
  width: 80%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px 35px;
  margin-top: 15px;
  border-radius: 9px;
}
.personal-body>div{
  margin-bottom: 15px;
  font-size: 20px;
}
.personal-body>div>label{
  letter-spacing:12px;
}
.personal-body>div>input{
  width: 150px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-bottom: 1px solid #ccc;
  height: 20px;
}
.personal-button{
  margin-top: 20px;
  text-align: center;
}
.personal-button>button{
  background: #fff;
  width: 100px;
  border: 1px solid #ccc;
}
</style>