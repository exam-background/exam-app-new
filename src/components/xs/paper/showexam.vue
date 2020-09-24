<template>
  <div id="examine">
    <div class="examine-dh">
      <van-nav-bar title="试卷考核">
        <template #left>
          <van-icon @click="fh()" name="arrow-left" />
        </template>
      </van-nav-bar>
    </div>
    <div class="examine-img"><h3>{{papers.name}}</h3></div>
    <div class="examine-text">
      <div>开始时间:{{papers.papersStartDate}}</div>
      <div class="con_tag">
          <van-tag size="large" class="tag" type="primary" v-if="papers.type == 0">就业训练</van-tag>
          <van-tag size="large" class="tag" type="primary" v-else>技术训练</van-tag>
          <van-tag size="large" class="tag" type="primary">{{papers.professional.professionalName}}</van-tag>
      </div>
    </div>
    <div class="examine-body">
      <div v-for="(item,index) in papers.papersTitleList" :key="index" class="examine-body-type">
        <div>{{index+1}}.{{item.title}}({{item.setScore}}/{{papers.papersUserResultList[index].mark}}分)<span style="margin-left:5px;"></span></div>
        <div v-if="item.type == 1">
            <textarea class="txt1" v-model="insertPapers[index].userExercise" disabled></textarea>
        </div>
        <div v-else>
          <van-radio-group style="margin:5px 0px;padding:5px;" v-model="insertPapers[index].userExercise" direction="horizontal" v-for="(papersExercises, papersExercisesIndex) in item.papersExercises" :key="papersExercisesIndex">
              <van-radio disabled :name="papersExercises.content" style="height:40px;"><font size=2>{{papersExercises.orderNum}}：{{papersExercises.content}}</font></van-radio>
          </van-radio-group>
        </div>
        <div style="margin-top:20px;"><h4>正确答案：</h4></div>
        <div style="width:100%;height:100px;overflow:auto;border:1px solid #f0f0f0;">
            <div v-html="insertPapers[index].standardAnswer">

            </div>
        </div>
      </div>
    </div>
    <div class="button">
      <button @click="submitPapers">返回</button>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  data() {
    return {
      list:[],
      insertPapers: [],
      papers: []
    }
  },
  created() {
    console.log(this.$route.params.val,this.$route.params.active)
  },
  methods: {
    fh(){
      this.$router.go(-1)
    },
    getPaper() {
        let token = localStorage.getItem("stuToken");
				let userId = token.split('-')[2]

        this.$axios
        .get(this.$location.getPapersByIdStudent, {
            params: {
                id: this.id
            }
        })
        .then(res => {
            console.log(res.data.data)
            this.papers = res.data.data

            this.time = this.papers.papersOverDate-this.papers.papersStartDate
            console.log(this.papers.papersOverDate)
            this.time = (this.time%(3600*24))%3600/60;
            console.log("相差分钟："+this.time)

            for(let a = 0;a<this.papers.papersTitleList.length;a++){
                this.insertPapers.push({
                    papersId: this.id,
                    exerciseId: this.papers.papersTitleList[a].id,
                    userId: userId,
                    userExercise: this.papers.papersUserResultList[a].userExercise,
                    standardAnswer: this.papers.papersTitleList[a].standardAnswer
                })
            }
            console.log(this.insertPapers)
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
    submitPapers () {
        history.back()
    }
  },
  mounted() {
      this.id = this.$route.params.val;
      this.getPaper();
  }
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
  height: 60px;
  background: #8b57e0;
  width: 100%;
  font-size: 15px;
  border: 1px solid rgba(0, 0, 0, 0);
  resize: none;
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