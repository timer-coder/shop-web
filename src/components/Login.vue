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
                    <!--广告栏-->
                    <el-header class="medium-header" height="230px">
                        <Ad></Ad>
                    </el-header>
                    <el-header></el-header>
                  <!--推荐-->
                    <el-main>
                        <el-form label-width="80px" class="user-form" size="mini">
                            <el-form-item label="username" style="font-family: 宋体">
                                <el-input v-model="username" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item label="password" style="font-family: 宋体">
                                <el-input v-model="password" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item class="button-box">
                                <el-button style="background: #b0dddf" v-on:click="login()">登陆</el-button>
                                <el-button style="background: #b0dddf">找回密码</el-button>
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
import { baseUrl } from '../js/config'
import Head from './Head'
import Left from './Left'
import Ad from './Ad'
import Footer from './Footer'

export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  components: {
    Head,
    Left,
    Ad,
    Footer
  },
  methods: {
    login: function () {
      const that = this
      console.log(that.username)
      console.log(that.password)
      const formData = new FormData()
      formData.append('username', Number(this.username))
      formData.append('password', Number(this.password))
      axios.create({
        headers: { 'Content-Type': 'application/json' }
      }).post(baseUrl + '/login', require('qs').stringify({
        username: Number(this.username),
        password: Number(this.password)
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(response => {
        if (response.data === '登陆成功') {
          this.$router.push({ path: 'homelogin' })
        } else {
          alert('账号或者密码错误')
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
.el-main {
  background-color: #fff;
}
.top-header {
  background-color: #545c64;
}
.medium-header {
  background-color: #fff;
}
.left-aside {
  height: 518px;
}
.user-form {
  position: absolute;
  left: 45%;
}
</style>
