<template>
  <div id="check">
    <div class="check-dh">
      <div @click="ht()"><van-icon name="arrow-left" /></div>
    </div>
    <div class="check-img"><img src="../../assets/check/1.jpg"/></div>
    <div>
      <van-swipe @change="onChange">
        <van-swipe-item>
          <div class="check-item">
            <div class="check-item-top">
              <div v-for="(item,index) in list" :key="index">
                <div><img :src="item.img"/></div>
                <div>
                  <div>{{item.name}}</div>
                  <div>考核时间({{item.khsj}})</div>
                  <div>考核时间({{item.khsj1}})</div>
                  <div class="check-item-type">
                    <div v-for="(item1,index1) in item.js" :key="index1">{{item1}}</div>
                  </div>
                </div>
                <div class="check-item-button1"><span class="check-item-span">准备<br/>考试</span></div>
              </div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="check-item">
            <div class="check-item-top1">
              <div v-for="(item,index) in list" :key="index">
                <div><img :src="item.img"/></div>
                <div>
                  <div>{{item.name}}</div>
                  <div>查看试卷</div>
                  <div class="check-item-type">
                    <div v-for="(item1,index1) in item.js" :key="index1">{{item1}}</div>
                  </div>
                </div>
                <div class="check-item-button">
                  <div class="check-item-div">100分</div>
                  <div class="check-item-div">得分</div>
                  <div class="check-jg">及格</div>
                </div>
              </div>
            </div>
          </div>
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            <div :class="{'custom-indicator-tab':current==0}">待考试卷</div>
            <div :class="{'custom-indicator-tab':current==1}">已考试卷</div>
          </div>
        </template>
    </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      list:[
        {
          img:require("../../assets/check/1.png"),
          name:"技术测试卷（一）",
          khsj:"9:00-10:00",
          khsj1:"16:00-17:00",
          js:["技术训练","JAVA"]
        },
        {
          img:require("../../assets/check/1.png"),
          name:"技术测试卷（二）",
          khsj:"9:00-10:00",
          khsj1:"16:00-17:00",
          js:["技术训练","JAVA"]
        },
        {
          img:require("../../assets/check/1.png"),
          name:"技术测试卷（三）",
          khsj:"9:00-10:00",
          khsj1:"16:00-17:00",
          js:["技术训练","JAVA"]
        },
        {
          img:require("../../assets/check/1.png"),
          name:"技术测试卷（四）",
          khsj:"9:00-10:00",
          khsj1:"16:00-17:00",
          js:["技术训练","JAVA"]
        },
        {
          img:require("../../assets/check/1.png"),
          name:"技术测试卷（五）",
          khsj:"9:00-10:00",
          khsj1:"16:00-17:00",
          js:["技术训练","JAVA"]
        }
      ]
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    ht(){
      this.$router.go(-1)
    }
  },
}
</script>

<style scoped>
#check{
  width: 100%;
  height: 100%;
  background: url("../../assets/check/2.jpg") no-repeat;
  background-size: 110%;
  position: fixed;
  overflow: hidden;
  overflow-y: scroll;
}
.check-dh{
  height: 60px;
  line-height: 60px;
  color: #fff;
  font-size: 30px;
  position: fixed;
  padding: 0 20px;
}
.check-img{
  width: 75%;
  margin: 0 auto;
  margin-top: 16%;
}
.check-img>img{
  width: 100%;
}
.custom-indicator {
  position: absolute;
  top: 5px;
  left: 10%;
  width: 80%;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}
.custom-indicator>div{
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 15px;
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  margin: 0 30px;
  padding-bottom: 4px;
}
#check >>> .custom-indicator-tab{
  color: rgba(255, 255, 255, 1);
  border-bottom: 3px solid rgba(255, 255, 255, 1);
}
#check >>> .van-swipe__track{
  margin-top: 55px;
}
.check-item{
  background: #efefef;
  height: 580px;
  position: relative;
}
.check-item-top{
  position: absolute;
  top: -15px;
  left: 10%;
  width: 80%;
}
.check-item-top>div{
  margin-bottom: 10px;
  background: #fff;
  display: flex;
  padding: 10px;
  border-radius: 10px;
}
.check-item-top>div>div:nth-child(1)>img{
  width: 70px;
}
.check-item-top>div>div:nth-child(2){
  margin-left: 10px;
}
.check-item-top>div>div:nth-child(2)>div:nth-child(1){
  font-size: 16px;
  color: #7a7a7a;
  margin-left: 8px;
}
.check-item-top>div>div:nth-child(2)>div:nth-child(2){
  font-size: 10px;
  color: #7a7a7a;
  margin-top: 2px;
  margin-left: 8px;
}
.check-item-top>div>div:nth-child(2)>div:nth-child(3){
  font-size: 10px;
  color: #7a7a7a;
  margin-left: 8px;
}
.check-item-type{
  display: flex;
  margin-top: 5px;
}
.check-item-type>div{
  background:#bcbcbc ;
  border-radius: 10px;
  width: 60px;
  text-align: center;
  line-height: 18px;
  color: #fff;
  height: 18px;
  margin-right: 10px;
}
.check-item-button{
  width: 45px;
  height: 45px;
  border: 1.5px solid #8d59e0;
  margin-left: 30px;
  margin-top: 15px;
  border-radius: 5px;
  text-align: center;
  position: relative;
}
.check-item-button1{
  width: 45px;
  height: 45px;
  border: 1px solid #8d59e0;
  background: #8d59e0;
  border-radius: 5px;
  transform: rotate(45deg);
  margin-left: 30px;
  margin-top: 12px;
}
.check-item-span{
  margin-left: -4px;
  transform-origin: 65% 0;
  transform: rotate(-45deg);
  display: block;
  color: #fff;
  letter-spacing:3px;
}
.check-jg{
  position: absolute;
  top: 30px;
  left: 10px;
  border:2px solid red;
  color: red;
  width: 40px;
  font-weight: bold;
  line-height: 20px;
  height: 20px;
  border-radius: 2px;
  transform: rotate(330deg);
  font-size: 18px;
}
.check-item-div{
  color: #8d59e0;
}
.check-item-div:nth-child(1){
  margin-top: 5px;
  font-size: 15px;
}
.check-item-top1{
  position: absolute;
  top: -15px;
  left: 10%;
  width: 80%;
}
.check-item-top1>div{
  margin-bottom: 10px;
  background: #fff;
  display: flex;
  padding: 10px;
  border-radius: 10px;
}
.check-item-top1>div>div:nth-child(1)>img{
  width: 70px;
}
.check-item-top1>div>div:nth-child(2){
  margin-left: 10px;
}
.check-item-top1>div>div:nth-child(2)>div:nth-child(1){
  font-size: 16px;
  color: #7a7a7a;
  margin-left: 8px;
}
.check-item-top1>div>div:nth-child(2)>div:nth-child(2){
  font-size: 10px;
  color: #8d59e0;
  line-height: 20px;
  margin-left: 8px;
  margin-top: 5px;
}
</style>