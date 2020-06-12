<template>
    <el-container>
        <!--顶端操作栏-->
        <el-header class="top-header">
            <HeadLogin></HeadLogin>
        </el-header>
        <el-container>
            <!--侧边栏导航-->
            <el-aside width="200px" style="background-color: #545c64;height:520px" class="left-aside">
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
                        <el-form label-width="120px" class="user-form" size="mini">
                            <el-form-item label="名字" style="font-family: 宋体">
                                <el-input v-model="name" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item label="价格" style="font-family: 宋体">
                                <el-input v-model="price" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item label="种类" style="font-family: 宋体">
                                <el-input v-model="category" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item label="库存" style="font-family: 宋体">
                                <el-input v-model="allsize" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item label="主图片路径" style="font-family: 宋体">
                                <el-input v-model="mainurl" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item label="主要描述" style="font-family: 宋体">
                                <el-input v-model="maindescribe" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item label="图片1路径" style="font-family: 宋体">
                                <el-input v-model="imageurl1" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item class="button-box">
                                <el-button style="background: #b0dddf" @click="addgoods">添加</el-button>
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
import HeadLogin from './HeadLogin'
import Left from './Left'
import { baseUrl } from '../js/config'
export default {
  data () {
    return {
      input: '',
      currentDate: new Date(),
      goodsname: '',
      goodsdescribe: '',
      image: [],
      name: '',
      price: '',
      category: '',
      allsize: '',
      mainurl: '',
      maindescribe: '',
      imageurl1: ''
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
    addgoods () {
      axios.post(baseUrl + '/goods/', {
        name: this.name,
        price: this.price,
        category: this.category,
        allsize: this.allsize,
        mainurl: this.mainurl,
        maindescribe: this.maindescribe,
        imageurl1: this.imageurl1
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          alert(error)
        })
    }
  },
  components: {
    HeadLogin,
    Left
  },
  created () {
    axios.post(baseUrl + '/login', {
      username: 1,
      password: 1
    })
      .then(function (response) {
        console.log(response)
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
