<template>
  <div id="wrong">
    <div class="information1-dh">
      <div @click="ht()"><van-icon name="arrow-left" /></div>
    </div>
    <div class="wrong-body">
      <div v-for="(item,index) in list" :key="index" class="wrong-body-list">
        <div>{{item.name}}</div>
        <div>
          回答:
          <div>{{item.text}}</div>
        </div>
        <div>
          正确答案：{{item.text1}}
        </div>
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
          name:'JAVA是什么？',
          text:"JAVA是前端语言",
          text1:"JAVA是后端语言",
        },
        {
          name:'JAVA是什么？',
          text:"JAVA是前端语言",
          text1:"JAVA是后端语言",
        },
        {
          name:'JAVA是什么？',
          text:"JAVA是前端语言",
          text1:"JAVA是后端语言",
        }
      ]
    }
  },
  methods: {
    ht(){
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
#wrong{
  height: 100%;
  width: 100%;
  background: url('../../assets/item/2.jpg') no-repeat;
  background-size: 111%;
  position: fixed;
  overflow: hidden;
  overflow-y: scroll;
}
.information1-dh{
  height: 60px;
  line-height: 60px;
  color: #fff;
  font-size: 30px;
  position: fixed;
  padding: 5px 10px;
}
.wrong-body{
  width: 90%;
  margin: 0 auto;
  background: #fff;
  height: 650px;
  margin-top: 15%;
  border-radius: 5px;
  padding: 0 20px;
  box-sizing: border-box;
}
.wrong-body-list{
  border-bottom: 1px solid #4b29ac;
  padding: 10px;
}
.wrong-body-list>div:nth-child(1){
  font-size: 18px;
  text-align: center;
  height: 50px;
  line-height: 50px;
}
.wrong-body-list>div:nth-child(2){
  font-size: 15px;
}
.wrong-body-list>div:nth-child(2)>div{
  margin-left: 30px;
  color: red;
}
.wrong-body-list>div:nth-child(3){
  font-size: 13px;
  margin-top: 18px;
  color: #4b29ac;
}
</style>