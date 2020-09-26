<template>
  <div id="first">
    <div class="first-img"><img src="../../assets/sj/2.jpg"/></div>
    <div class="first-body">
      <div class="first-body-type">
        <van-tabs v-model="active" swipeable>
          <van-tab  :title="'未考试卷'">
            <van-collapse v-model="activeName1" accordion @change="clickType">
              <van-collapse-item title="技术考核" name="1">
                <div v-if="list1 != ''">
                  <div v-for="(item,index) in list1" :key="index" class="first-list1">
                    <div>
                      <div>{{item.name}}</div>
                      <div class="con_tag">
                          <van-tag class="tag" type="primary" v-if="type == 0">就业训练</van-tag>
                          <van-tag class="tag" type="primary" v-else>技术训练</van-tag>
                          <van-tag class="tag" type="primary" v-for="(courses, courseIndex) in item.courseList" :key="courseIndex">{{courses.courseName}}</van-tag>
                      </div>
                    </div>
                    <div class="first-item-button1" @click="kscs(item.id)"><span class="first-item-span">开始<br/>测试</span></div>
                  </div>
                </div>
                <div v-else>暂时没有考试</div>
              </van-collapse-item>
              <van-collapse-item title="就业训练" name="0">
                <div v-if="list2 != ''">
                  <div v-for="(item,index) in list2" :key="index" class="first-list1">
                    <div>
                      <div>{{item.name}}</div>
                      <div class="con_tag">
                          <van-tag class="tag" type="primary" v-if="type == 0">就业训练</van-tag>
                          <van-tag class="tag" type="primary" v-else>技术训练</van-tag>
                          <van-tag class="tag" type="primary" v-for="(courses, courseIndex) in item.courseList" :key="courseIndex">{{courses.courseName}}</van-tag>
                      </div>
                    </div>
                    <div class="first-item-button1" @click="kscs(item.id)"><span class="first-item-span">开始<br/>测试</span></div>
                  </div>
                </div>
                <div v-else>暂时没有考试</div>
              </van-collapse-item>
            </van-collapse>
          </van-tab>
          <van-tab  :title="'已考试卷'">
            <van-collapse v-model="activeName" accordion @change="clickPapers">
              <van-collapse-item title="技术考核" name="1">
                <div v-if="list3 != ''">
                  <div v-for="(item,index) in list3" :key="index" class="first-list1">
                    <div>
                      <div>{{item.name}}<span style="margin-left:20px;">得分：{{score[index].count}}/{{score[index].student}}</span></div>
                      <div class="con_tag">
                          <van-tag class="tag" type="primary" v-if="type == 0">就业训练</van-tag>
                          <van-tag class="tag" type="primary" v-else>技术训练</van-tag>
                          <van-tag class="tag" type="primary" v-for="(courses, courseIndex) in item.courseList" :key="courseIndex">{{courses.courseName}}</van-tag>
                      </div>
                    </div>
                    <div class="first-item-button1" @click="show(item.id)"><span class="first-item-span">查看<br/>测试</span></div>
                  </div>
                </div>
                <div v-else>暂时没有考试记录</div>
              </van-collapse-item>
              <van-collapse-item title="就业试卷" name="0">
                <div v-if="list4 != ''">
                  <div v-for="(item,index) in list4" :key="index" class="first-list1">
                    <div>
                      <div>{{item.name}}<span style="margin-left:20px;">得分：{{score[index].count}}/{{score[index].student}}</span></div>
                      <div class="con_tag">
                          <van-tag class="tag" type="primary" v-if="type == 0">就业训练</van-tag>
                          <van-tag class="tag" type="primary" v-else>技术训练</van-tag>
                          <van-tag class="tag" type="primary" v-for="(courses, courseIndex) in item.courseList" :key="courseIndex">{{courses.courseName}}</van-tag>
                      </div>
                    </div>
                    <div class="first-item-button1" @click="show(item.id)"><span class="first-item-span">查看<br/>测试</span></div>
                  </div>
                </div>
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
import { Dialog } from 'vant';
export default {
  data() {
    return {
      active: 0,
      activeName: '1',
      activeName1: '1',
      list1:[],
      list2:[],
      list3:[],
      list4:[],
      score: [],
      type: 0
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
    },
    show(val){
      this.$router.push({
        name:'show',
        params:{
          val:val,
          active:this.active
        }
      })
    },
    clickType (activeNames) {
      let token = localStorage.getItem("stuToken");
      let id = token.split('-')[2]
      this.type = activeNames;
      console.log("点击下拉框"+activeNames)
      this.$axios
      .get(this.$location.getPapersByUserIdAndType, {
          params: {
              userId: id,
              type: activeNames
          }
      })
      .then(res => {
          console.log(res.data.data)
          if(activeNames == '1'){
              this.list1 = res.data.data
          }else{
              this.list2 = res.data.data
          }
      })
      .catch(function(error) {
          Dialog.alert({
              title: '提示',
              message: error,
          }).then(() => {
              // on close
          });
      })
    },
    clickPapers (activeNames) {
      if(activeNames == ""){
        activeNames=1;
      }
      let token = localStorage.getItem("stuToken");
      let id = token.split('-')[2]
      this.score = []
      this.type = activeNames;
      this.$axios
      .get(this.$location.getPapersByUserIdAndTypeFinish, {
          params: {
              userId: id,
              type: activeNames
          }
      })
      .then(res => {
          console.log(res.data.data)
          for(var c=0;c<res.data.data.length;c++){
              this.score.push({
                  count: 0,
                  student: 0
              });
              for(let i=0;i<res.data.data[c].papersUserResultList.length;i++){
                  // 遍历分数
                  this.score[c].count=this.score[c].count+res.data.data[c].papersUserResultList[i].setScore
                  this.score[c].student=this.score[c].student+res.data.data[c].papersUserResultList[i].mark
              }
          }
          if(activeNames == '1'){
              this.list3 = res.data.data
          }else{
              this.list4 = res.data.data
          }
      })
      .catch(function(error) {
          Dialog.alert({
              title: '提示',
              message: error,
          }).then(() => {
              // on close
          });
      })
    }
  },
  mounted() {
    this.clickType(1)
    this.clickPapers(1)
  }
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