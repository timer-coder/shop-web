<template>
    <el-container>
        <!--顶端操作栏-->
        <el-header class="top-header">
            <HeadLogin></HeadLogin>
        </el-header>
        <el-container>
            <!--侧边栏导航-->
            <el-aside width="200px" style="background-color: #545c64" class="left-aside">
                <Left></Left>
            </el-aside>
            <el-container>
                <el-main class="top-main">
                    <el-header height="30px" class="bottom-header">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/userhome' }">我的信息</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/like' }">收藏</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/shoppingcart' }">购物车</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/havebuy' }">购买记录</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/havesell' }">销售记录</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/sellinggoods' }">在售商品</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/havelook' }">足迹</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/order' }">订单</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-header>
                    <!--推荐-->
                    <el-main>
                        <el-row>
                            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 0.9 : 0">
                                <el-container>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 10px">
                                            <img :src= 'goodsmainurlone' class="image">
                                            <div style="padding: 14px;">
                                                <span>{{ goodsnameone }}</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ goodsdescribeone }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px">
                                            <img src="../assets/02.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>{{goodsname}}</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px">
                                            <img src="../assets/03.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>{{goodsname}}</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                </el-container>
                            </el-col>
                        </el-row>
                        <el-header></el-header>
                        <el-row>
                            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 0.9 : 0">
                                <el-container>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 10px">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>{{goodsname}}</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px">
                                            <img src="../assets/02.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>{{goodsname}}</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px">
                                            <img src="../assets/03.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>{{goodsname}}</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                </el-container>
                            </el-col>
                        </el-row>
                    </el-main>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      input: '',
      currentDate: new Date(),
      goodsnameone: '',
      goodsdescribeone: '',
      goodsmainurlone: '',
      image: []
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    creategoods () {
      this.$router.replace('/addgoods')
    },
    deletegoods () {
      this.$router.replace('/deletegoods')
    }
  },
  created () {
    var that = this
    axios.get('http://3m123712o1.qicp.vip/goods/67')
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
    margin: 0%;
}
.image {
    width: 100%;
    display: block;
}
</style>
