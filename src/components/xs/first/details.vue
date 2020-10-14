<template>
  <div id="details">
    <div @click="back()" class="details-item"><van-icon name="arrow-left" /></div>
    <div class="details-img"><img src="../../../assets/sy/3.jpg"/></div>
    <div class="details-body">
      <div>问：</div>
      <div>{{exercise.title}}</div>
      <div>答：</div>
        <div v-if="exercise.types == 2">
          <van-radio-group style="margin:5px 0px;padding:5px;" v-model="addExercise.submitAnswer" direction="horizontal" v-for="(exercise, index) in exercise.exerciseItems" :key="index">
            <van-radio :name="exercise.orderNum" style="height:40px;">{{exercise.orderNum}}：{{exercise.content}}</van-radio>
          </van-radio-group>
        </div>
        <div v-else>
            <textarea class="details-textarea" v-model="addExercise.submitAnswer"></textarea>
        </div>
        <div 
        @click="luyinFun"
         style="width:32px;height: 32px;border:2px dotted #a668e6;border-radius:32px;margin: 0 auto;text-align: center;"><img  width="32px" height="32px" src="../../../assets/yuyin.png" /></div>
         <div style="margin:0 auto; width:50px;text-align:center;">{{luyin}}</div>
      <div class="details-button" ><button @click="insertExercise">完成</button></div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
import Recorder from "js-audio-recorder";
let recorder = new Recorder();
export default {
  data(){
    return{
      detailId: 0,
      exercise: [],
      clickRedio: 0,
      addExercise: [{
        studentId: '',
        exerciseId: '',
        submitAnswer: ''
      }],
      luyin:'语音',
      luyinBoolean:true
    }
  },
  created() {
    this.detailId = this.$route.params.papersId
    this.$nextTick ( () => {
      // alert(this.$route.params.active)
      if(this.$route.params.active == 0){
        this.$axios
        .get(this.$location.getTechnologyDayExerciseById, {params: {id: this.detailId}})
        .then(response => {
          this.exercise = response.data.data;
          console.log("技术训练查询结果---->" + JSON.stringify(this.exercise));
        })
        .catch(function(error) {
          // 请求失败处理
          console.log("技术训练请求处理失败");
          console.log(error);
        });
      }else{
        this.$axios
        .get(this.$location.getJobDayExerciseById, {params: {id: this.detailId}})
        .then(response => {
          this.exercise = response.data.data;
          console.log("就业训练查询结果---->" + JSON.stringify(this.exercise));
        })
        .catch(function(error) {
          // 请求失败处理
          console.log("就业训练请求处理失败");
          console.log(error);
        });
      }
    })
    // console.log(this.$route.params.active,this.$route.params.id,this.$route.params.listId)
  },
  methods: {
    luyinFun(){
      let that = this;
      if(that.luyinBoolean){
        that.luyin = "请讲话";
         Recorder.getPermission().then(() => {
        //alert('开始录音')
        recorder.start() // 开始录音
      }, (error) => {
        alert('请先允许该网页使用麦克风')
        alert(error.message)
      })
      recorder.onprocess = function (duration) {
        console.log(duration);
      };
      }else{
        that.luyin = "识别中";
         console.log(recorder.getWAVBlob());
      recorder.stop(); // 结束录音
        let param = new FormData(); //创建form对象
        param.append('file',recorder.getWAVBlob());//通过append向form对象添加数据
        console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        let config = {
          headers:{'Content-Type':'multipart/form-data'}
        }; //添加请求头
        that.$axios.post(this.$location.luyin,param,config)
          .then(response=>{
            console.log(response.data);
            that.addExercise.submitAnswer = (undefined == that.addExercise.submitAnswer ? '':that.addExercise.submitAnswer) + response.data;
            //alert(that.addExercise.submitAnswer);
            that.luyin = "语音";
          })
      }
      that.luyinBoolean = !that.luyinBoolean;
    },
    back(){
      this.$router.go(-1)
    },
    insertExercise () {
      Dialog.confirm({
        message: '是否提交',
      })
      .then(() => {
        let token = localStorage.getItem("stuToken");
        let id = token.split('-')[2]
        if(this.$route.params.active == 1){
          this.$axios
          .post(this.$location.addJobDayExerciseSubmit, this.$qs.stringify({
            studentId: id,
            exerciseId: this.detailId,
            submitAnswer: this.addExercise.submitAnswer
          }))
          .then(response => {
              Dialog.alert({
                message: "答题成功",
              }).then(() => {
                // on close
              });
              location.href="first1";
          })
          .catch(function(error) {
            // 请求失败处理
            console.log("技术训练请求处理失败");
            console.log(error);
          });
        }else{
          this.$axios
          .post(this.$location.addTechnologyDayExerciseSubmit, this.$qs.stringify({
            studentId: id,
            exerciseId: this.detailId,
            submitAnswer: this.addExercise.submitAnswer
          }))
          .then(response => {
            Dialog.alert({
              title: '提示',
              message: "答题成功",
            }).then(() => {
              location.href="first1"
            });
          })
          .catch(function(error) {
            // 请求失败处理
            console.log("技术训练请求处理失败");
            console.log(error);
          });
        }
      })
      .catch(() => {
        
      });
      
    }
  },
}
</script>

<style scoped>
#details{
  width: 100%;
  height: 100%;
  background: url("../../../assets/sy/1.jpg") no-repeat;
  background-size: 115%;
  position: fixed;
  overflow: hidden;
  overflow-y: scroll;
}
.details-item{
  margin-left: 20px;
  margin-top: 5px;
}
#details >>> .details-item>i{
  font-size: 40px;
  color: #fff;
}
.details-img{
  width: 75%;
  margin: 0 auto;
  margin-top: 5%;
}
.details-img >img{
  width: 100%;
}
.details-body{
  width: 80%;
  margin: 0 auto;
  background: #fff;
  height: 500px;
  border-radius: 8px;
  padding: 10px 15px;
  box-sizing: border-box;
  margin-top: 50px;
}
.details-body>div:nth-child(1){
  color: #a668e6;
  font-size: 15px;
}
.details-body>div:nth-child(2){
  color: #a668e6;
  font-size: 20px;
  margin-top: 5px;
  text-align: center;
}
.details-body>div:nth-child(3){
  color: #a668e6;
  font-size: 15px;
  margin-top: 30px;
}
.details-textarea{
  border:1px solid #ccc;
  width: 100%;
  height: 100px;
  font-size: 15px;
  padding: 10px;
  box-sizing: border-box;
}
.details-button{
  width: 120px;
  margin: 0 auto;
  margin-top: 40px;
}
.details-button>button{
  background: #a668e6;
  color: #fff;
  width: 120px;
  height: 20px;
  border: 1px solid #a668e6;
  border-radius: 20px;
}
</style>