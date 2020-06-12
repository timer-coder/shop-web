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
                            <el-breadcrumb-item :to="{ path: '/freshfruits' }">新鲜水果</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/seasonfresh' }">时令生鲜</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/freshvegetables' }">美味蔬菜</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/freshaquatic' }">海鲜水产</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/freshmeat' }">新鲜肉类</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/freshfood' }">锅物料理</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/fresheggs' }">禽蛋</el-breadcrumb-item>
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
    </el-container>
</template>

<script>
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
