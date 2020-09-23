<template>
  <div id="modify">
    <div class="personal-dh">
      <div @click="ht()"><van-icon name="arrow-left" /></div>
    </div>
    <div class="modify-a">
      <div><label>原密码</label>：<input type="password"/></div>
      <div><label>新密码</label>：<input type="password"/></div>
      <div><label>再次输入密码</label>：<input type="password"/></div>
    </div>
    <div class="modify-button">
      <button>确定</button>
      <button>取消</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    ht(){
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
#modify{
  width: 100%;
  height: 100%;
  background: url("../../assets/me/1.jpg") no-repeat;
  background-size: 100%;
  position: fixed;
}
.modify-a{
  margin-top: 200px;
}
.modify-a>div{
  width:80% ;
  margin: 0 auto;
  font-size: 20px;
  margin-bottom: 20px;
  color: #fff;
}
.modify-a>div>input{
  width: 180px;
  height: 30px;
  color: #000;
}
.modify-a>div:nth-child(1)>label{
  letter-spacing:20px;
}
.modify-a>div:nth-child(2)>label{
  letter-spacing:20px;
}
.modify-button{
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.modify-button>button{
  width: 100px;
  height: 30px;
  font-size: 20px;
}
.personal-dh{
  height: 60px;
  line-height: 60px;
  color: #fff;
  font-size: 30px;
  position: fixed;
  padding: 0 20px;
}
</style>