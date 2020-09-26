<template>
  <div id="home">
    <router-view></router-view>
    <div class="tabbar"></div>
    <div class="home-tabbar">
      <router-link tag="div" to="/home/examine">
        <div><van-icon name="home-o" /></div>
        <div>首页</div>
      </router-link>
      <router-link tag="div" to='/home/item'>
        <div><van-icon name="bars" /></div>
        <div>班级错题汇总</div>
      </router-link>
      <router-link tag="div" to='/home/me'>
        <div><van-icon name="contact" /></div>
        <div>个人中心</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
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
</style>