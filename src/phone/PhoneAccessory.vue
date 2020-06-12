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
                            <el-breadcrumb-item :to="{ path: '/phoneshell' }">手机壳</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/earphone' }">耳机</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/phoneholder' }">手机支架</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/screenprotector' }">手机贴膜</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/selfiestick' }">自拍杆</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/portablebattery' }">充电宝</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/usb' }">数据线/充电器</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/phoneelse' }">其他</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-header>
                    <!--推荐-->
                    <el-main>
                        <Recommend></Recommend>
                        <el-header></el-header>
                        <Recommend></Recommend>
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
import Head from '../components/Head'
import Left from '../components/Left'
import Recommend from '../components/Recommend'
import Footer from '../components/Footer'
export default {
  data () {
    return {
      input: '',
      currentDate: new Date()
    }
  },
  mounted () {
    // 获取用户信息
    this.getUserInfo()
  },
  props: ['signinUp', 'headTitle', 'goBack'],
  computed: {},
  methods: {},
  components: {
    Head,
    Left,
    Recommend,
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
}
</style>
