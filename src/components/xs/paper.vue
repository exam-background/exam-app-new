<template>
  <div id="first">
    <div class="first-img"><img src="../../assets/sj/2.jpg"/></div>
    <div class="first-body">
      <div class="first-body-type">
        <van-tabs v-model="active" swipeable>
          <van-tab  :title="'就业训练'">
            <van-collapse v-model="activeName1" accordion>
              <van-collapse-item title="技术考核" name="1">
                <div v-if="list1 != ''">
                  <div v-for="(item,index) in list1" :key="index" class="first-list1">
                    <div>
                      <div>{{item.name}}</div>
                      <div>
                        <div v-for="(item1,index1) in item.type" :key="index1">{{item1}}</div>
                      </div>
                    </div>
                    <div class="first-item-button1" @click="kscs(item.id)"><span class="first-item-span">开始<br/>测试</span></div>
                  </div>
                </div>
                <div v-else>暂时没有考试记录</div>
              </van-collapse-item>
              <van-collapse-item title="就业训练" name="2">
                <div v-if="list2 != ''"></div>
                <div v-else>暂时没有考试记录</div>
              </van-collapse-item>
            </van-collapse>
          </van-tab>
          <van-tab  :title="'技术训练'">
            <van-collapse v-model="activeName" accordion>
              <van-collapse-item title="技术考核" name="1">
                <div v-if="list3 != ''">{{list2}}</div>
                <div v-else>暂时没有考试记录</div>
              </van-collapse-item>
              <van-collapse-item title="就业训练" name="2">
                <div v-if="list4 != ''"></div>
                <div v-else>暂时没有考试记录</div>
              </van-collapse-item>
            </van-collapse>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      activeName: '1',
      activeName1: '1',
      list1:[
        {
          id:0,
          name:"技术测试（三）",
          type:["就业训练","JAVA","MyBatIr","Mfhgds"]
        },
        {
          id:1,
          name:"技术测试（三）",
          type:["就业训练","JAVA","MyBatIr","Mfhgds"]
        }
      ],
      list2:[],
      list3:[],
      list4:[],
    }
  },
  methods: {
    kscs(val){
      this.$router.push({
        name:'examine1',
        params:{
          val:val,
          active:this.active
        }
      })
    }
  },
}
</script>

<style scoped>
#first{
  width: 100%;
  height: 100%;
  background: url("../../assets/sj/1.jpg") no-repeat;
  background-size: 100%;
  position: fixed;
  overflow: hidden;
  overflow-y: scroll;
}
.first-img{
  width: 75%;
  margin: 0 auto;
  margin-top: 15%;
}
.first-img>img{
  width: 100%;
}
.first-body{
  width: 100%;
  height: 550px;
  margin-top: 15%;
  background: #fff;
  border-top: 8px solid #efefef;
  position: relative;
}
#first >>> .van-tabs__line{
  width: 100px ;
  background-color: #4b29ac ;
}
#first >>> .van-tab__text{
  color: #4b29ac;
}
.first-list1{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #4b29ac;
  padding: 20px 0 2px 0;
}
.first-list1>div:nth-child(1)>div:nth-child(1){
  font-size: 14px;
  color: #4b29ac;
}
.first-list1>div:nth-child(1)>div:nth-child(2){
  background: #8b57e0;
  padding: 0px 8px;
  border-radius: 20px;
  color: #fff;
  width:auto;
  display:inline-block !important; 
  display:inline;
  margin-top: 5px;
}
.first-list1>div:nth-child(1)>div:nth-child(2)>div{
  margin: 0 5px;
  float: left;
  font-size: 10px;
}
.first-item-button1{
  width: 30px;
  height: 30px;
  border: 1px solid #8d59e0;
  background: #8d59e0;
  border-radius: 2px;
  transform: rotate(45deg);
  margin-top: 3px;
  font-size: 8px;
  line-height: 11.5px;
}
.first-item-span{
  margin-left: -6px;
  transform-origin: 60% 0;
  transform: rotate(-45deg);
  display: block;
  color: #fff;
  letter-spacing:2px;
}
#first >>> .van-cell--clickable{
  border-bottom: 1px solid #4b29ac ;
  color: #8d59e0;
  font-size: 18px;
  padding-top:30px ;
}
#first >>> .van-tabs__content{
  padding: 0 15px;
}
</style>