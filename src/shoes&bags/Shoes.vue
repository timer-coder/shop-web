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
                            <el-breadcrumb-item :to="{ path: '/boyshoe' }">男鞋</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/girlshoe' }">女鞋</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/specialshoe' }">流行</el-breadcrumb-item>
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
