<template>
  <div id="first">
    <div class="first-img"><img src="../../assets/sy/2.jpg"/></div>
    <div class="first-body">
      <div class="first-body-text">
        <div class="first-list" v-for="(item,index) in list" :key="index" @click="type1(item.id)">
          <div>
            <span><br/><img :src="'/'+item.professionalDesc" width="30px"></span><br/>
            <span>{{item.professionalName}}</span>
          </div>
        </div>
      </div>
      <div class="first-body-type">
        <van-tabs v-model="active" swipeable @change="onClick">
          <van-tab :title="'就业训练'">
            <div v-for="(item,index) in list1" :key="index" class="first-list1" @load="onLoad($event)">
              <div>
                <div>{{item.title}}</div>
                <div>
                  <div>就业训练</div>
                  <div>{{item.professional.professionalName}}</div>
                  <div>{{item.course.courseName}}</div>
                </div>
              </div>
              <div class="first-item-button1" @click="tz(item.id)"><span class="first-item-span">训练</span></div>
            </div>
          </van-tab>
          <van-tab  :title="'技术训练'">
            <div v-for="(item,index) in list2" :key="index" class="first-list1" @load="onLoad($event)">
              <div>
                <div>{{item.title}}</div>
                <div>
                  <div>技术训练</div>
                  <div>{{item.professional.professionalName}}</div>
                  <div>{{item.course.courseName}}</div>
                  <!-- <div>{{item.professional.professionalName}}</div> -->
                </div>
              </div>
              <div class="first-item-button1" @click="tz(item.id)"><span class="first-item-span">训练</span></div>
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
      list:[],
      active: 0,
      activeName: '1',
      pageSize: 6,
      list1:[], 
      list2:[],
    listindes:0,
    page: 0
    }
  },
  methods: {
    tz(index){
      this.$router.push({
        name:"details1",
        params:{
          papersId: index,
          listId:this.listindes,
          active:this.active,
          id:index,
        }
      })
      // console.log(index)
      // console.log(this.active,this.listindes,index)
    },
    type1(val){
      this.page = 0
      this.listindes = val
      this.list1 = []
      this.list2 = []
      this.getPapers()
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
    },
    getPapers () {
      this.page = this.page + 1;
      let token = localStorage.getItem("stuToken");
      let userId = token.split('-')[2]
      if(this.active == 0){
        this.$axios
        .get(this.$location.getTechnologyDayExerciseByProfessionalId, {
          params: {
            id: this.listindes,
            pageSize: this.pageSize,
            currentPage: this.page,
            studentid: userId
          }
        })
        .then(res => {
          const data = res.data.data;
          const arrlist=  res.data.data.data;
          // 渲染总数据条数
          this.page = data.total;
          arrlist.map(item => {
            this.list1.push(item)
          }) 
          console.log(JSON.stringify(this.list1))
          this.page = data.curPage + 1; 
          // _this.list = res.data 
        })
        .catch(function(error) {
          // 请求失败处理
          console.log("查询请求处理失败");
          console.log(error);
        })
      }else{
        this.$axios
        .get(this.$location.getJobDayExerciseByProfessid, {
          params: {
            id: this.listindes,
            pageSize: this.pageSize,
            currentPage: this.page,
            studentid: userId
          }
        })
        .then(res => {
          const data = res.data.data;
          const arrlist=  res.data.data.data;
          // 渲染总数据条数
          console.log(data);
          this.page = data.total;
          arrlist.map(item => {
              this.list2.push(item)
          }) 
          this.page = data.curPage + 1; 
          // _this.list = res.data 
        })
        .catch(function(error) {
          // 请求失败处理
          console.log("查询请求处理失败");
          console.log(error);
        })
      }
    },
    onClick (index, title){
      this.page = 0
      this.active == index
      this.list1 = []
      this.list2 = []
      this.getPapers()
    }
  },
  mounted(){
    this.getProfessional();
    this.getPapers();
  //   this.$nextTick(() => {
  //     const el = document.querySelector('.van-tab__pane');
  //     const offsetHeight = el.offsetHeight;
  //     el.onscroll = () => {
  //       const scrollTop = el.scrollTop;
  //       const scrollHeight = el.scrollHeight;
  //       if ((offsetHeight + scrollTop) - scrollHeight >= -1) {
  //         // 需要执行的代码
  //         console.log("aa")

  //         this.getPapers();

  //       }
  //     }
  // })

  this.$nextTick(() => {
      const el = document.getElementsByClassName('van-tab__pane');
      for(let i =0;i < el.length;i++){
        // let offsetHeight = el[i].offsetHeight;
				el[i].onscroll = () => {
					const scrollTop = el[i].scrollTop;
					const scrollHeight = el[i].scrollHeight;
					if ((el[i].offsetHeight + scrollTop) - scrollHeight >= -1) {
						// 需要执行的代码
						console.log("aa")
            this.getPapers();
					}
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