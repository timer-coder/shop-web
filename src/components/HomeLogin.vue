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
                    <!--广告栏-->
                    <el-header class="medium-header" height="230px">
                        <Ad></Ad>
                    </el-header>
                    <!--猜你喜欢-->
                    <el-header class="bottom-header">
                        <span>猜你喜欢<i class="el-icon-arrow-right"></i></span>
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
        <el-container style="background-color: #fff">
            <el-main style="padding: 0px">
                <el-container>
                    <el-header height="30px"></el-header>
                    <!--商品推荐-->
                    <el-header height="30px" class="body-title">
                        <span>商品推荐</span>
                        <i class="el-icon-arrow-right"></i>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <Recommend></Recommend>
                    </el-main>
                </el-container>
                <el-container  style="background-color: rgb(239, 245, 239)">
                    <el-header height="30px"></el-header>
                    <!--服饰-->
                    <el-header height="30px">
                        <span>服饰</span>
                        <i class="el-icon-arrow-right"></i>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <Recommend></Recommend>
                    </el-main>
                </el-container>
                <el-container style="background-color: #fff">
                    <el-header height="30px"></el-header>
                    <!--手机-->
                    <el-header height="30px">
                        <span>手机</span>
                        <i class="el-icon-arrow-right"></i>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <Recommend></Recommend>
                    </el-main>
                </el-container>
                <el-container  style="background-color: rgb(239, 245, 239)">
                    <el-header height="30px"></el-header>
                    <!--百货-->
                    <el-header height="30px">
                        <span>百货</span>
                        <i class="el-icon-arrow-right"></i>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <Recommend></Recommend>
                    </el-main>
                </el-container>
                <el-container style="background-color: #fff">
                    <el-header height="30px"></el-header>
                    <!--鞋包-->
                    <el-header height="30px">
                        <span>鞋包</span>
                        <i class="el-icon-arrow-right"></i>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <Recommend></Recommend>
                    </el-main>
                </el-container>
                <el-container  style="background-color: rgb(239, 245, 239)">
                    <el-header height="30px"></el-header>
                    <!--食品-->
                    <el-header height="30px">
                        <span>食品</span>
                        <i class="el-icon-arrow-right"></i>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <Recommend></Recommend>
                    </el-main>
                </el-container>
                <el-container style="background-color: #fff">
                    <el-header height="30px"></el-header>
                    <!--数码电器-->
                    <el-header height="30px">
                        <span>数码电器</span>
                        <i class="el-icon-arrow-right"></i>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <Recommend></Recommend>
                    </el-main>
                </el-container>
                <el-container  style="background-color: rgb(239, 245, 239)">
                    <el-header height="30px"></el-header>
                    <!--美妆/洗护-->
                    <el-header height="30px">
                        <span>美妆/洗护</span>
                        <i class="el-icon-arrow-right"></i>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <Recommend></Recommend>
                    </el-main>
                </el-container>
                <el-container style="background-color: #fff">
                    <el-header height="30px"></el-header>
                    <!--运动-->
                    <el-header height="30px">
                        <span>运动</span>
                        <i class="el-icon-arrow-right"></i>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <Recommend></Recommend>
                    </el-main>
                </el-container>
                <el-container  style="background-color: rgb(239, 245, 239)">
                    <el-header height="30px"></el-header>
                    <!--生鲜-->
                    <el-header height="30px">
                        <span>生鲜</span>
                        <i class="el-icon-arrow-right"></i>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <Recommend></Recommend>
                    </el-main>
                </el-container>
            </el-main>
            <el-footer style="background-color: #545c64" class="bottom-footer" height="80px">
                <el-link style="color:#fff; font-family: 宋体; font-size: 13px">联系我们|</el-link>
                <el-link style="color:#fff; font-family: 宋体; font-size: 13px">注册|</el-link>
                <el-link style="color:#fff; font-family: 宋体; font-size: 13px">卖家中心|</el-link>
                <el-link style="color:#fff; font-family: 宋体; font-size: 13px">帮助</el-link>
                <pre>增值电信业务经营许可证：汉B2-20200515|湖北省网络食品销售第三方平台提供者备案：鄂网食A33010001|短消息类服务接入代码使用证书：号【2016】00154-A01|信息网络传播视听许可证：1109364号</pre>
                <pre>出版物网络交易平台服务经营备案号：新出发鄂备字第002号|市场名称登记证：工商网市字3301004120号|广播电视节目制作经营许可证（浙）字第01012号</pre>
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
import axios from 'axios'
import HeadLogin from './HeadLogin'
import Left from './Left'
import Ad from './Ad'
import Recommend from './Recommend'
export default {
  data () {
    return {
      input: '',
      imagesbox: [{ id: 0, idView: require('../assets/01.jpg') },
        { id: 1, idView: require('../assets/02.jpg') },
        { id: 2, idView: require('../assets/03.jpg') },
        { id: 3, idView: require('../assets/06.jpg') },
        { id: 4, idView: require('../assets/07.jpg') },
        { id: 5, idView: require('../assets/08.jpg') }],
      currentDate: new Date(),
      goodsnameone: '',
      goodsdescribeone: '',
      goodsmainurlone: ''
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
    link () {
      const activeIndex = this.$refs.carousel.activeIndex
      this.$router.push(this.imgs[activeIndex].link)
    }
  },
  created () {
    var that = this
    axios.get('http://3m123712o1.qicp.vip/goods/67')
      .then(function (response) {
        console.log(response.data.data.goods.name)
        that.goodsnameone = response.data.data.goods.name
        console.log(response.data.data.goods.mainDescribe)
        that.goodsdescribeone = response.data.data.goods.mainDescribe
        console.log(response.data.data.goods.mainurl)
        that.goodsmainurlone = response.data.data.goods.mainurl
      })
      .catch(function (error) {
        alert(error)
      })
  },
  components: {
    HeadLogin,
    Left,
    Ad,
    Recommend
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
    background-color:#fff;
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
