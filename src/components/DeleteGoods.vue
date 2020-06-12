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
                    <!--我的信息-->
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
                        <el-form label-width="80px" class="user-form" size="mini">
                            <el-form-item label="id" style="font-family: 宋体">
                                <el-input v-model="ID" style="width:240px" :placeholder="ID"></el-input>
                            </el-form-item>
                            <el-form-item class="button-box">
                                <el-button style="background: #b0dddf" @click="deletegoods">删除</el-button>
                            </el-form-item>
                        </el-form>
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
      goodsname: '',
      goodsdescribe: '',
      image: [],
      ID: ''
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
    deletegoods () {
      axios.delete(baseUrl + '/goods/' + this.ID)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          alert(error)
        })
    }
  },
  created () {
    var that = this
    axios.post(baseUrl + '/login', {
      username: '1',
      password: '1'
    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        alert(error)
      })
    axios.get(baseUrl + '/user/')
      .then(function (response) {
        console.log(response)
        that.ID = response
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
.signup-form {
    position: absolute;
    top: 15%;
    .button-box {
        display: flex;
        justify-content: flex-end;
    }
}
</style>
