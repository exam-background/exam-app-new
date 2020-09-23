<template>
  <div id="information1">
    <div class="information1-dh">
      <div @click="ht()"><van-icon name="arrow-left" /></div>
    </div>
    <div class="information1-tetx">
      <div class="information1-tetx1">
        <div>姓名</div>
        <div>操作</div>
      </div>
      <div class="information1-table">
        <div v-for="(item,index) in list" :key="index">
          <div>{{item.name}}</div>
          <div><button @click="ck(item.id)">查看</button></div>
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
          id:0,
          name:'张三',
        },
        {
          id:1,
          name:'张三',
        },
        {
          id:2,
          name:'张三',
        },
        {
          id:3,
          name:'张三',
        },
        {
          id:4,
          name:'张三',
        },
        {
          id:4,
          name:'张三',
        },
        {
          id:4,
          name:'张三',
        }
      ]
    }
  },
  created() {
    console.log(this.$route.params.active,this.$route.params.val)
  },
  methods: {
    ht(){
      this.$router.go(-1)
    },
    ck(val){
      this.$router.push({
        name:"wrong",
        params:{
          val:val
        }
      })
    },
  },
}
</script>

<style scoped>
#information1{
  width: 100%;
  height: 100%;
  background: url("../../assets/item/2.jpg") no-repeat;
  background-size: 112%;
  position: fixed;
  overflow: hidden;
  overflow-y: scroll;
}
.information1-tetx{
  width: 90%;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
  height: 650px;
  margin-top: 15%;
}
.information1-dh{
  height: 60px;
  line-height: 60px;
  color: #fff;
  font-size: 30px;
  position: fixed;
  padding: 5px 10px;
}
.information1-tetx1{
  display: flex;
  height: 50px;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
}
.information1-tetx1>div{
  flex: 1;
  text-align: center;
}
.information1-table{
  height: 580px;
  overflow: hidden;
  overflow-y: scroll;
}
.information1-table>div{
  display: flex;
  height: 40px;
  align-items: center;
}
.information1-table>div>div{
  flex: 1;
  text-align: center;
  font-size: 15px;
}
.information1-table>div>div:nth-child(2)>button{
  background: #4b29ac;
  color: #fff;
  width: 80px;
  border: 1px solid #ccc;
}
</style>