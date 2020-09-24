<template>
  <div id="first">
    <div class="first-img"><img src="../../assets/sy/2.jpg"/></div>
    <div class="first-body">
      <div class="first-body-text">
        <div class="first-list" v-for="(item,index) in list" :key="index" @click="type1(item.id)">
          <div>
            <span><img :src="item.professionalDesc"></span><br/>
            <span>{{item.professionalName}}</span>
          </div>
        </div>
      </div>
      <div class="first-body-type">
        <van-tabs v-model="active" swipeable>
          <van-tab  :title="'就业训练'">
            <div v-for="(item,index) in list1" :key="index" class="first-list1" @load="onLoad($event)">
              <div>
                <div>{{item.name}}</div>
                <div>
                  <div v-for="(item1, index1) in item.type" :key="index1">{{item1}}</div>
                </div>
              </div>
              <div class="first-item-button1" @click="tz(item.id)"><span class="first-item-span">训练</span></div>
            </div>
          </van-tab>
          <van-tab  :title="'技术训练'">
            <div v-for="(item,index) in list2" :key="index" class="first-list1">
              <div>
                <div>{{item.name}}</div>
                <div>
                  <div v-for="(item1, index1) in item.type" :key="index1">{{item1}}</div>
                </div>
              </div>
              <div class="first-item-button1"><span class="first-item-span">训练</span></div>
            </div>
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
      list:[
        {
          id:0,
          img:require("../../assets/sy/1.png"),
        },
        {
          id:1,
          img:require("../../assets/sy/1.png"),
        },
        {
          id:2,
          img:require("../../assets/sy/1.png"),

        },
        {
          id:3,
          img:require("../../assets/sy/1.png"),
        },
      ],
      active: 0,
      activeName: '1',
      list1:[
        {
          id:0,
          name:'请写出Mybatis框架的优缺点',
          type:['就业训达','JAVA','MyBatIr']
        },
        {
          id:1,
          name:'#和$0的区别是什么',
          type:['就业训达','JAVA','MyBatIr']
        },
        {
          id:2,
          name:'简述一下Mybatis的编程步骤',
          type:['就业训达','JAVA','MyBatIr']
        },
        {
          id:3,
          name:'当实体类中的属性名和表中的字段名不—样，怎么办',
          type:['就业训达','JAVA','MyBatIr']
        },
        {
          id:4,
          name:'下列关于使用MyBatis的mapper接口调用错误的是',
          type:['就业训达','JAVA','MyBatIr']
        },
        {
          id:4,
          name:'下列关于使用MyBatis的mapper接口调用错误的是',
          type:['就业训达','JAVA','MyBatIr']
        },
        {
          id:4,
          name:'下列关于使用MyBatis的mapper接口调用错误的是',
          type:['就业训达','JAVA','MyBatIr']
        },
        {
          id:4,
          name:'下列关于使用MyBatis的mapper接口调用错误的是',
          type:['就业训达','JAVA','MyBatIr']
        },
        {
          id:4,
          name:'下列关于使用MyBatis的mapper接口调用错误的是',
          type:['就业训达','JAVA','MyBatIr']
        },
        {
          id:4,
          name:'下列关于使用MyBatis的mapper接口调用错误的是',
          type:['就业训达','JAVA','MyBatIr']
        },
        {
          id:4,
          name:'下列关于使用MyBatis的mapper接口调用错误的是',
          type:['就业训达','JAVA','MyBatIr']
        }
      ],
      list2:[
        {
          name:'2222222222',
          type:['就业训达','JAVA','MyBatIr']
        },
        {
          name:'22222222',
          type:['就业训达','JAVA','MyBatIr']
        },
        {
          name:'2222222222',
          type:['就业训达','JAVA','MyBatIr']
        },
        {
          name:'222222222222',
          type:['就业训达','JAVA','MyBatIr']
        },
        {
          name:'下列关于使用MyBatis的mapper接口调用错误的是',
          type:['就业训达','JAVA','MyBatIr']
        }
      ],
    listindes:0,
    }
  },
  methods: {
    tz(index){
      this.$router.push({
        name:"details1",
        params:{
          list:this.list1[index].name,
          listId:this.listindes,
          active:this.active,
          id:index,
        }
      })
      // console.log(index)
      // console.log(this.active,this.listindes,index)
    },
    type1(val){
      this.listindes = val
      console.log(val)
    },
    onLoad(event){
      // var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      console.log(event)
    },
    getProfessional() {
      var that = this;
      this.$axios
        .get(this.$location.getProfessionalNoPage)
        .then(response => {
          console.log("专业查询结果---->" + JSON.stringify(response.data.data));
          that.list = response.data.data;
          console.log("专业查询结果---->" + JSON.stringify(this.IcoList));
        })
        .catch(function(error) {
          // 请求失败处理
          console.log("查询请求处理失败");
          console.log(error);
        });
    }
  },
  mounted(){
    this.getProfessional();
    this.$nextTick(() => {
      const el = document.querySelector('.van-tab__pane');
      const offsetHeight = el.offsetHeight;
      el.onscroll = () => {
        const scrollTop = el.scrollTop;
        const scrollHeight = el.scrollHeight;
        if ((offsetHeight + scrollTop) - scrollHeight >= -1) {
          // 需要执行的代码
          console.log("aa")
        }
      }
  })
  }
}
</script>

<style scoped>
#first{
  width: 100%;
  height: 100%;
  background: url("../../assets/sy/1.jpg") no-repeat;
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
.first-body-text{
  width: 100%;
  position: absolute;
  top: -40px;
  display: flex;
  justify-content: space-around;
}
.first-list{
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 3px solid #efefef;
  background: linear-gradient(to left, #4b29ac , #aa93fe);
  text-align: center;
}
.first-list>img{
  width: 25px;
  margin-top: 10px;
}
.first-body-type{
  margin-top: 50px;

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
  border-bottom: 1.5px solid #4b29ac;
  padding: 30px 15px 5px 15px;
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
  width: 25px;
  height: 25px;
  border: 1px solid #8d59e0;
  background: #8d59e0;
  border-radius: 2px;
  transform: rotate(45deg);
  margin-top: 3px;
}
.first-item-span{
  margin-left: -6px;
  transform-origin: 70% 0;
  transform: rotate(-45deg);
  display: block;
  color: #fff;
  letter-spacing:1px;
}
#first >>> .van-cell--clickable{
  border-bottom: 1px solid #4b29ac ;
  color: #8d59e0;
  font-size: 18px;

}
#first >>>.van-tab__pane{
  height: 410px;
  overflow: hidden;
  overflow-y: scroll;
}
</style>