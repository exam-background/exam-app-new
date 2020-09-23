<template>
  <div id="examine">
    <div class="examine-dh">
      <van-nav-bar title="试卷考核">
        <template #left>
          <van-icon @click="fh()" name="arrow-left" />
        </template>
      </van-nav-bar>
    </div>
    <div class="examine-img"><img src="../../../assets/sj/3.jpg"/></div>
    <div class="examine-text">
      <div>开始时间:2020-09-10 14:00</div>
      <div>剩余时间:00:00:00</div>
      <div>技能训练 JAVA</div>
    </div>
    <div class="examine-body">
      <div v-for="(item,index) in list" :key="index" class="examine-body-type">
        <div>{{item.name}}</div>
        <div v-if="item.type">
          <div v-for="(item1,index1) in item.type" :key="index1">
            <input type="radio" name="aa"/>
            {{item1}}</div>
        </div>
        <div v-else>
            <textarea class="txt1"></textarea>
        </div>
      </div>
    </div>
    <div class="button"><button>交卷</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[
        {
          name:'1.如何在Spring Boot启动的时候运行少量特定的代码(10分)',

        },
        {
          name:'1.如何在Spring Boot启动的时候运行少量特定的代码(10分)',

        },
        {
          name:'1.如何在Spring Boot启动的时候运行少量特定的代码(10分)',

        },
        {
          name:'1.如何在Spring Boot启动的时候运行少量特定的代码(10分)',
          type:[
            "A: Mapper接口方法名和mapper.xml中定义的每个sql的id不必相同",
            "B:Mapper接口方法的输入参教类型和mapper.xml中定义的每个 sql 的parameterlype类型相同",
            "C:Mapper接口方法的输出参数类型和mapper.xml中定义的每个 sql的resultlype的奖吴型相司",
            "D:Mapper.xml文件中的namespace即是mapper接口的类路径"
            ]
        }
      ]
    }
  },
  created() {
    console.log(this.$route.params.val,this.$route.params.active)
  },
  methods: {
    fh(){
      var aa = confirm("确定退出考试吗？")
      if(aa){
        this.$router.go(-1)
      }
    }
  },
}
</script>

<style scoped>
#examine{
  width: 100%;
  height: 100%;
  background: url("../../../assets/sj/1.jpg") no-repeat;
  background-size: 100%;
  position: fixed;
  overflow: hidden;
  overflow-y: scroll;
}
.examine-dh{
  color: #fff;
  margin-top: 10px;
}
#examine >>> .van-nav-bar{
  background: rgba(0, 0, 0, 0);
}
[class*=van-hairline]::after{
  border: none;
}
#examine >>> .van-nav-bar__left>i{
  font-size: 30px;
  color: #fff;
}
#examine >>> .van-nav-bar__title{
  color: #fff;
  font-size: 12px;
}
.examine-img{
  width: 65%;
  margin: 0 auto;
  margin-top: 20px;
}
.examine-img>img{
  width: 100%;
}
.examine-text{
  color: #fff;
  font-size: 13px;
  width: 50%;
  margin: 0 auto;
  text-align: center;
}
.examine-text>div:nth-child(3){
  background: #fff;
  color: #000;
  font-size: 10px;
  width:auto;
  display:inline-block !important; 
  display:inline;
  margin-top: 5px;
  border-radius: 18px;
  height: 18px;
  line-height: 18px;
  padding: 0 10px;
}
.examine-body{
  background: #fff;
  border-top: 8px solid #efefef;
  height: 420px;
  padding-bottom: 100px;
  margin-top: 10px;
  padding: 20px;
  overflow: hidden;
  overflow-y: scroll;
}
.examine-body-type>div:nth-child(1){
  font-size: 15px;
  color: #4b29ac;
  border-bottom: 1px solid #4b29ac;
  padding-bottom: 10px;
}
.examine-body-type>div:nth-child(2){
  margin: 10px 0;
  background: #8b57e0;
  padding: 10px;
  color: #fff;
  border-radius: 10px;
  font-size: 14px;
}
.examine-body-type>div:nth-child(2)>div{
  margin-bottom: 10px;
}
.txt1{
  height: 30px;
  background: #8b57e0;
  width: 100%;
  font-size: 15px;
  border: 1px solid rgba(0, 0, 0, 0);
}
.button{
  position: fixed;
  width: 100%;
  bottom: 66px;
  padding: 5px;
  border: 1px solid #000;
  box-sizing: border-box;
  background: #fff;
}
.button>button{
  width: 100%;
  height: 30px;
  font-size: 15px;
  color: #fff;
  background: #8b57e0;
  border: 1px solid #8b57e0;
}
</style>