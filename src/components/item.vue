<template>
  <div id="examine">
    <div class="examine-img">
      <img src="../assets/examine/2.jpg"/>
    </div>
    <div class="examine-body1">
      <div>
      <div class="examine-body-text">
      <van-tabs v-model="active" swipeable>
          <van-tab  :title="'就业训练'">
            <div class="examine-body-text1">
              <div>题目</div>
              <div>错题数量</div>
              <div>操作</div>
            </div>
            <div class="over">
              <div v-for="(item,index) in job" :key="index"  class="examine-body-list">
                <div>{{item.title}}</div>
                <div>{{item.count}}</div>
                <div><button @click="ck(item.id)">查看</button></div>
              </div>
            </div>
          </van-tab>
          <van-tab  :title="'技术训练'">
            <div class="examine-body-text1">
             <div>题目</div>
             <div>错题数量</div>
             <div>操作</div>
            </div>
            <div class="over">
               <div v-for="(item,index) in jiShu" :key="index" class="examine-body-list">
                <div>{{item.title}}</div>
                <div>{{item.count}}</div>
                <div><button @click="ck(item.id,item.standard)">查看</button></div>
              </div> 
            </div>
          </van-tab>
        </van-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      value: '',
      value1: '',
      showPicker: false,
      active: 0,
      columns: [
        {
          values:['前端', '后端', '.Net', '.Net', '.Net', '.Net', '.Net', '.Net']
        },
        {
          values:['17班', '18班', '19班', '19班', '19班', '19班', '19班', '19班']
        }
      ],
      jiShu:[],
	  job:[]
    };
  },
  methods: {
    onChange(index) {
      console.log(index)
      this.current = index;
    },
    onConfirm(value) {
      var values = value.join("-").toString()
      this.value = values;
      this.showPicker = false;
    },
    ck(id,standard){
		alert(standard)
      this.$router.push({
        path:'/information1',
        params:{
          val:id,
          standard:this.standard
        }
      })
    }
  },mounted() {
	  let stuId = localStorage.getItem("stuToken").split("-")[2]
	  				//alert(stuId)
	  				this.$axios.get(this.$location.getJiShuCount, {
	  					params: {
	  						"id": stuId
	  					}
	  				}).then(res => {
	  					console.log(res.data)
						this.jiShu = res.data.data
	  				})
  }
}
</script>

<style scoped>
#examine{
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("../assets/examine/1.jpg") no-repeat;
  background-size: 110%;
  overflow: hidden;
  overflow-y: scroll;
}
.examine-img{
  width: 70%;
  margin: 0 auto;
  margin-top: 15%;
}
.examine-img>img{
  width: 100%;
}
.examine-img>div:nth-child(2){
  text-align: center;
  color: #fff;
  font-size: 13px;
  margin-top: 10px;
  letter-spacing:5px;
}
.examine-input{
  margin-top: 10px;
}
.examine-input >>> .van-cell{
  width: 45%;
  height: 30px;
  line-height: 30px;
  padding: 0;
  padding: 0 40px 0 65px;
  border-radius: 30px;
  margin: 0 auto;
}
.examine-body1{
  height:550px;
  background: #EFEFEF;
  margin-top: 38px;
  position: relative;
}
.examine-body1>div{
  width: 90%;
  position: absolute;
  top: -15px;
  left: 5%;
  background: #fff;
  border-radius: 6px;
  height: 550px;
}
.examine-body-text{
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 20px;
  height: 440px;
  
}
.examine-body-text1{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  align-items: center;
  height: 30px;
  border-bottom: 1px solid #ccc;
}
.examine-body-text1>div{
  flex: 1;
}
.examine-body-list{
  width: 100%;
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
.examine-body-list>div{
  font-size: 15px;
  flex: 1;
}
.examine-body-list>div:nth-child(4){
  flex: 1;
}
.examine-body-list>div:nth-child(4)>button{
  border: 1px solid #ccc;
  background: #4b29ac;
  color: #fff;
  height: 25px;
  width: 70px;
  font-size: 14px;
}
.aa{
  width: 90%;
  margin: 0 auto;
}
#examine >>> .van-swipe__indicators{
  display: none;
}
#examine >>> .van-tabs {
  width: 100%;
}
.over{
  height: 400px;
  overflow: hidden;
  overflow-y: scroll;
}
#examine >>> .van-tabs__line{
  width: 100px;
  background: #4b29ac;
}
</style>