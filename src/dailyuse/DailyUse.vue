<template>
    <el-container>
        <!--顶端操作栏-->
        <el-header class="top-header">
            <Head></Head>
        </el-header>
        <el-container>
            <!--侧边栏导航-->
            <el-aside width="200px" style="background-color: #545c64" class="left-aside">
                <Left></Left>
            </el-aside>
            <el-container>
                <el-main class="top-main">
                    <el-header class="bottom-header">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/statinery' }">文具教具</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/greenpet' }">绿植宠物</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/cooker' }">厨房用品</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/dinnerware' }">餐饮用具</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/everydayuse' }">居家日用</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/curtain' }">窗帘布艺</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/homedecoration' }">家居装饰</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/storagebox' }">收纳整理</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/cleaner' }">清洁用具</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/gift' }">节庆礼品</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/book' }">图书</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/diy' }">个性定制</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-header>
                    <!--推荐-->
                    <el-main>
                        <Recommednd></Recommednd>
                        <el-header></el-header>
                        <Recommend></Recommend>
                    </el-main>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
import axios from 'axios'
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
  mounted () {
    // 获取用户信息
    this.getUserInfo()
  },
  props: ['signinUp', 'headTitle', 'goBack'],
  computed: {},
  methods: {}
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
