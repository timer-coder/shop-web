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
                            <el-form-item label="ID" style="font-family: 宋体">
                                <el-input v-model="ID" style="width:240px" :placeholder="ID"></el-input>
                            </el-form-item>
                            <el-form-item label="全局ID" style="font-family: 宋体">
                                <el-input v-model="globalID" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item label="昵称" style="font-family: 宋体">
                                <el-input v-model="name" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item label="手机号" style="font-family: 宋体">
                                <el-input v-model="phoneNumber" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item label="性别" style="font-family: 宋体">
                                <el-input v-model="sex" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item label="生日" style="font-family: 宋体">
                                <el-input v-model="birthday" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" style="font-family: 宋体">
                                <el-input v-model="password" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item label="邮箱" style="font-family: 宋体">
                                <el-input v-model="email" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item label="等级" style="font-family: 宋体">
                                <el-input v-model="rate" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item class="button-box">
                                <el-button style="background: #b0dddf">查询</el-button>
                                <el-button style="background: #b0dddf">更改</el-button>
                            </el-form-item>
                        </el-form>
                    </el-main>
                </el-main>
            </el-container>
        </el-container>
        <el-footer style="background-color: #545c64" class="bottom-footer" height="80px">
            <Footer></Footer>
        </el-footer>
    </el-container>
</template>

<script>
import axios from 'axios'
import HeadLogin from './HeadLogin'
import Left from './Left'
import Footer from './Footer'
import { baseUrl } from '../js/config'
export default {
  data () {
    return {
      input: '',
      currentDate: new Date(),
      goodsname: '',
      goodsdescribe: '',
      image: [],
      ID: '',
      globalID: '',
      password: '',
      sex: '',
      birthday: '',
      phoneNumber: '',
      email: '',
      rate: '',
      name: ''
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
    axios.get(baseUrl + '/user')
      .then(function (response) {
        console.log(response)
        that.ID = response
      })
      .catch(function (error) {
        alert(error)
      })
  },
  components: {
    HeadLogin,
    Left,
    Footer
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
