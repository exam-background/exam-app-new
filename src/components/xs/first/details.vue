<template>
  <div id="details">
    <div @click="back()" class="details-item"><van-icon name="arrow-left" /></div>
    <div class="details-img"><img src="../../../assets/sy/3.jpg"/></div>
    <div class="details-body">
      <div>问：</div>
      <div>{{this.$route.params.list}}</div>
      <div>{{this.$route.params.listId}}</div>
      <div>{{this.$route.params.active}}</div>
      <div>{{this.$route.params.id}}</div>
      <div>答：</div>
      <textarea class="details-textarea"></textarea>
      <div class="details-button" ><button >完成</button></div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params.active,this.$route.params.id,this.$route.params.listId)
  },
  methods: {
    back(){
      this.$router.go(-1)
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