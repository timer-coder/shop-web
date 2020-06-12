<template>
    <DailyUse></DailyUse>
</template>

<script>
import axios from 'axios'
import DailyUse from './DailyUse'
import { baseUrl } from '../js/config'
export default {
  data () {
    return {
      input: '',
      currentDate: new Date(),
      goodsnameone: '',
      goodsdescribeone: '',
      goodsmainurlone: ''
    }
  },
  created () {
    var that = this
    axios.get(baseUrl + '/goods/67')
      .then(function (response) {
        console.log(response.data.data.goods.name)
        that.goodsnameone = response.data.data.goods.name
        console.log(response.data.data.goods.mainDescribe)
        that.goodsdescribeone = response.data.data.goods.mainDescribe
        console.log(response.data.data.goods.mainurl)
        that.goodsmainurlone = response.data.data.goods.mainurl
      })
      .catch(function (error) {
        alert(error)
      })
  },
  components: {
    DailyUse
  }
}
</script>

<style lang="less" scoped>
.top-header {
    background-color: #545c64;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .el-menu-demo {
        border-bottom: none;
    }
}
.top-main {
    background-color: rgb(239, 245, 239);
}
.el-card {
    width: 300px;
    height: 400px;
}
</style>
