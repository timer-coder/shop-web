<template>
    <el-footer>
        <el-link style="color:#fff; font-family: 宋体; font-size: 13px">联系我们|</el-link>
        <el-link style="color:#fff; font-family: 宋体; font-size: 13px">注册|</el-link>
        <el-link style="color:#fff; font-family: 宋体; font-size: 13px">卖家中心|</el-link>
        <el-link style="color:#fff; font-family: 宋体; font-size: 13px">帮助</el-link>
        <pre style="color:#fff; font-family: 宋体; font-size: 13px">增值电信业务经营许可证：汉B2-20200515|湖北省网络食品销售第三方平台提供者备案：鄂网食A33010001|短消息类服务接入代码使用证书：号【2016】00154-A01|信息网络传播视听许可证：1109364号</pre>
        <pre style="color:#fff; font-family: 宋体; font-size: 13px">出版物网络交易平台服务经营备案号：新出发鄂备字第002号|市场名称登记证：工商网市字3301004120号|广播电视节目制作经营许可证（浙）字第01012号</pre>
    </el-footer>
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

.medium-header {
  background-color: #fff;
}

.bottom-header {
  display: flex;
  align-items: center;
}

.left-aside {
  //background-color: cornflowerblue;
  // height: 1200px;
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
