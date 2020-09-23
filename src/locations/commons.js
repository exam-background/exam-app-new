import axios from 'axios'

const commons = {
  getProfressionals:function(){
    axios.get(this.$location.courseForPage,{
      params:{
        pageSize:10,
        currentPage:1
      }
    })
    .then(response =>{
      console.log(JSON.stringify(response.data.data.data))
      alert(111)
      return "123456"
      // return response.data.data.data;
    })
    .catch(function(error){ 
      alert("错误请求。。。"+error)
    })
  }


}

export default commons;
