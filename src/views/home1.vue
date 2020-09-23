<template>
  <div id="home">
    <router-view></router-view>
    <div class="tabbar"></div>
    <div class="home-tabbar">
      <router-link tag="div" to="/home1/first1">
        <div><van-icon name="home-o" /></div>
        <div>首页</div>
      </router-link>
      <router-link tag="div" to='/home1/paper1'>
        <div><van-icon name="bars" /></div>
        <div>试卷</div>
      </router-link>
      <router-link tag="div" to='/home1/me1'>
        <div><van-icon name="contact" /></div>
        <div>我的</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>

<style scoped>
.home-tabbar{
  position: fixed;
  bottom: 0px;
  width: 100%;
  display: flex;
  height: 66px;
  align-items: center;
  color: #fff;
  background: linear-gradient(to left, #4b29ac , #aa93fe);
}
.home-tabbar>div{
  flex: 1;
  text-align: center;
  font-size: 11px;
}
.home-tabbar>div>div>i{
  flex: 1;
  text-align: center;
  font-size: 25px;
}
.home-tabbar>div>div:nth-child(2){
  margin-top: -3px;
}
.router-link-active{
  color: #bcabfa;
}
.tabbar{
  height: 66px;
}
#me >>> .van-cell{
  background: #9960e3;
  color: #fff;
}
#me >>> .van-cell__right-icon{
  color: #fff;
}
#me >>> .van-collapse-item__content{
  background: #aa77ed;
  color: #fff;
}
</style>