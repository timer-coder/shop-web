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
                            <el-breadcrumb-item :to="{ path: '/foodgift' }">礼品礼包</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/snacks' }">零食</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/fastfood' }">方便速食</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/milkdrink' }">乳饮</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/foodration' }">粮油调料</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/instantdrink' }">冲印</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/tea' }">茶</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/wine' }">名酒</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/bakingmaterial' }">烘焙原料</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/drygoods' }">南北干货</el-breadcrumb-item>
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
