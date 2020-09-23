<template>
  <div id="examine">
    <div class="examine-img">
      <img src="../assets/examine/2.jpg"/>
    </div>
    <div class="examine-input">
      <van-field
        readonly
        clickable
        :value="value"
        placeholder="-请选择班级-"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" round position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
    </div>
    <div class="examine-body1">
      <div>
        <van-search class="aa"
            v-model="value1"
            shape="round"
            background="#fff"
            placeholder="请输入搜索关键词"
            right-icon=''
          />
      <div class="examine-body-text">
        <div v-for="(item,index) in list" :key="index" @click="xs(item.id)">
          {{item.name}}
        </div>
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
      columns: [
        {
          values:['前端', '后端', '.Net', '.Net', '.Net', '.Net', '.Net', '.Net']
        },
        {
          values:['17班', '18班', '19班', '19班', '19班', '19班', '19班', '19班']
        }
      ],
      list:[
        {
          name:"张无忌",
          id:0
        },
        {
          name:"张无忌",
          id:1
        },
        {
          name:"张无忌",
          id:2
        },
        {
          name:"张无忌",
          id:3
        },
        {
          name:"张无忌",
          id:4
        },
        {
          name:"张无忌",
          id:5
        },
        {
          name:"张无忌",
          id:0
        },
        {
          name:"张无忌",
          id:0
        },
        {
          name:"张无忌",
          id:0
        },
        {
          name:"张无忌",
          id:0
        },
        {
          name:"张无忌",
          id:0
        },
        {
          name:"张无忌",
          id:0
        },
        {
          name:"张无忌",
          id:0
        },
        {
          name:"张无忌",
          id:0
        },
        {
          name:"张无忌",
          id:0
        },
        {
          name:"张无忌",
          id:0
        },
        {
          name:"张无忌",
          id:0
        },
        {
          name:"张无忌",
          id:0
        },
        {
          name:"张无忌",
          id:0
        },
        {
          name:"张无忌",
          id:0
        },
        {
          name:"张无忌",
          id:0
        }
      ],
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
    xs(val){
      this.$router.push({
        path:'/personal',
        params:{
          val:val
        }
      })
    }
  },
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
  margin-top: 18px;
  position: relative;
}
.examine-body1>div{
  width: 80%;
  position: absolute;
  top: -15px;
  left: 10%;
  background: #fff;
  border-radius: 6px;
  height: 530px;
}
.examine-body-text{
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
  padding: 0 20px;
  height: 440px;
  overflow: hidden;
  overflow-y: scroll;
}
.examine-body-text>div{
  height: 80px;
  width: 80px;
  background: url("../assets/examine/1.png") no-repeat;
  background-size: 100%;
  color: #fff;
  text-align: center;
  line-height: 80px;
  font-size: 18px;
  margin-bottom: 10px;
}
.aa{
  width: 90%;
  margin: 0 auto;
}
#examine >>> .van-swipe__indicators{
  display: none;
}
</style>