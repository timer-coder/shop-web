<template>
  <el-container>
        <el-header class="top-header">
            <div>WebShop</div>
            <div>
            <el-menu
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              style="font-size: 12px"
              active-text-color="#ffd04b">
                <el-menu-item index="0">
                    <el-link href="./#/home" target="_blank" style="color: #fff">主页</el-link>
                </el-menu-item>
                <el-menu-item index="1"><el-link target="_blank"><el-link href="./#/goodskinds" target="_blank"
                                                                          style="color: #fff">商品分类</el-link></el-link></el-menu-item>
                <el-submenu index="2">
                    <template slot="title">卖家中心</template>
                    <el-menu-item index="2-1"><el-link href="./#/login" target="_blank"
                                                       style="color: #fff">已卖出的商品</el-link></el-menu-item>
                    <el-menu-item index="2-2"><el-link href="./#/login" target="_blank"
                                                       style="color: #fff">出售中的商品</el-link></el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><el-link href="./#/login" target="_blank" style="color: #fff">用户中心</el-link></template>
                    <el-menu-item index="3-1"><el-link href="./#/login" target="_blank" style="color: #fff">登录</el-link></el-menu-item>
                    <el-menu-item index="3-2"><el-link href="./#/signup" target="_blank"
                                                       style="color: #fff">注册</el-link></el-menu-item>
                    <el-menu-item index="3-3"><el-link href="./#/login" target="_blank" style="color: #fff">足迹</el-link></el-menu-item>
                    <el-menu-item index="3-4"><el-link href="./#/login" target="_blank" style="color: #fff">收藏</el-link></el-menu-item>
                    <el-menu-item index="3-5"><el-link href="./#/login" target="_blank"
                                                       style="color: #fff">购物车</el-link></el-menu-item>
                    <el-menu-item index="3-6"><el-link href="./#/login" target="_blank"
                                                       style="color: #fff">购买记录</el-link></el-menu-item>
                    <el-menu-item index="3-7"><el-link href="./#/login" target="_blank" style="color: #fff">订单</el-link></el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><el-link href="./" target="_blank"
                                                    style="color: #fff">联系客服</el-link></template>
                    <el-menu-item index="4-1"><el-link href="./#/login" target="_blank"
                                                       style="color: #fff">消费者客服</el-link></el-menu-item>
                    <el-menu-item index="4-2"><el-link href="./#/login" target="_blank"
                                                       style="color: #fff">卖家客服</el-link></el-menu-item>
                </el-submenu>
            </el-menu>
            </div>
        </el-header>
    </el-container>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    // 获取用户信息
    this.getUserInfo()
  },
  props: ['signinUp', 'headTitle', 'goBack'],
  computed: {},
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

.medium-header {
  background-color: #fff;
}

.bottom-header {
  display: flex;
  align-items: center;
}

.left-aside {
  //background-color: cornflowerblue;
  //height: 1200px;
  .el-menu-vertical-demo {
    border-right: none;
  }
}

.top-main {
  background-color: rgb(239, 245, 239);
}

.el-card {
  width: 300px;
  height: 400px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.el-card {
  width: 280px;
}

.bottom-footer {
  color: #fff;
}
</style>
