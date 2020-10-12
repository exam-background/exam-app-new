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
      <div class="details-button" ><button @click="insertExercise">完成</button></div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
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
      }]
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