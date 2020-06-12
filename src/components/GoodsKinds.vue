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
                    <el-header class="bottom-header">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/userhome' }">我的信息</el-breadcrumb-item>
                            <el-breadcrumb-item>收藏</el-breadcrumb-item>
                            <el-breadcrumb-item>购物车</el-breadcrumb-item>
                            <el-breadcrumb-item>购买记录</el-breadcrumb-item>
                            <el-breadcrumb-item>销售记录</el-breadcrumb-item>
                            <el-breadcrumb-item>在售商品</el-breadcrumb-item>
                            <el-breadcrumb-item>足迹</el-breadcrumb-item>
                            <el-breadcrumb-item>订单</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-header>
                    <!--推荐-->
                    <el-main>
                        <el-link href="./#/girlshirt" target="_blank"><pre>上装 |</pre></el-link>
                        <el-link href="./#/girlskirt" target="_blank"><pre> 女裙 |</pre></el-link>
                        <el-link href="./#/girltrouses" target="_blank"><pre> 女裤 |</pre></el-link>
                        <el-link href="./#/girlspecial" target="_blank"><pre> 特色女装 |</pre></el-link>
                        <el-link href="./#/girlsuit" target="_blank"><pre> 套装 |</pre></el-link>
                        <el-link href="./#/boytrouses" target="_blank"><pre> 裤子 |</pre></el-link>
                        <el-link href="./#/boyshirt" target="_blank"><pre> 上装 |</pre></el-link>
                        <el-link href="./#/boyspecial" target="_blank"><pre> 流行 |</pre></el-link>
                        <el-link href="./#/boysuit" target="_blank"><pre> 正装套装 |</pre></el-link>
                        <el-link href="./#/homewear" target="_blank"><pre> 家居 |</pre></el-link>
                        <el-link href="./#/socks" target="_blank"><pre> 袜子 |</pre></el-link>
                        <el-link href="./#/unerpants" target="_blank"><pre> 内裤 |</pre></el-link>
                        <el-link href="./#/specialunderclothes" target="_blank"><pre> 流行 |</pre></el-link>
                        <el-link href="./#/bras" target="_blank"><pre> 文胸 |</pre></el-link>
                        <el-link href="./#/accessory" target="_blank"><pre> 服配 |</pre></el-link>
                        <el-link href="./#/trendmatching" target="_blank"><pre> 潮搭 |</pre></el-link>
                        <el-link href="./#/watch" target="_blank"><pre> 手表 |</pre></el-link>
                        <el-link href="./#/eyeglasses" target="_blank"><pre> 眼镜 |</pre></el-link>
                        <el-link href="./#/jewellery" target="_blank"><pre> 珠宝 |</pre></el-link>
                        <el-link href="./#/washingservice" target="_blank"><pre> 洗衣服务</pre></el-link>
                        <br>
                        <el-link href="./#/phoneshell" target="_blank"><pre> 手机壳 |</pre></el-link>
                        <el-link href="./#/earphone" target="_blank"><pre> 耳机 |</pre></el-link>
                        <el-link href="./#/portablebattery" target="_blank"><pre> 充电宝 |</pre></el-link>
                        <el-link href="./#/usb" target="_blank"><pre> 数据线/充电器 |</pre></el-link>
                        <el-link href="./#/phoneholder" target="_blank"><pre> 手机支架 |</pre></el-link>
                        <el-link href="./#/screenprotector" target="_blank"><pre> 手机壳贴膜 |</pre></el-link>
                        <el-link href="./#/selfiestick" target="_blank"><pre> 自拍杆 |</pre></el-link>
                        <el-link href="./#/phoneelse" target="_blank"><pre> 其他 |</pre></el-link>
                        <el-link href="./#/huawei" target="_blank"><pre> 华为 |</pre></el-link>
                        <el-link href="./#/apple" target="_blank"><pre> 苹果 |</pre></el-link>
                        <el-link href="./#/vivo" target="_blank"><pre> vivo |</pre></el-link>
                        <el-link href="./#/oppo" target="_blank"><pre> oppo |</pre></el-link>
                        <el-link href="./#/mi" target="_blank"><pre> 小米 |</pre></el-link>
                        <el-link href="./#/samsung" target="_blank"><pre> 三星 |</pre></el-link>
                        <el-link href="./#/otherbrandphone" target="_blank"><pre> 其他 |</pre></el-link>
                        <el-link href="./#/trafficcard" target="_blank"><pre> 手机流量卡 |</pre></el-link>
                        <el-link href="./#/prepairrefill" target="_blank"><pre> 话费充值 |</pre></el-link>
                        <el-link href="./#/flowrecharge" target="_blank"><pre> 流量充值 |</pre></el-link>
                        <el-link href="./#/phonerepair" target="_blank"><pre> 手机维修 |</pre></el-link>
                        <br>
                        <el-link href="./#/statinery" target="_blank"><pre> 文具教具 |</pre></el-link>
                        <el-link href="./#/greenpet" target="_blank"><pre> 绿植宠物 |</pre></el-link>
                        <el-link href="./#/cooker" target="_blank"><pre> 厨房用品 |</pre></el-link>
                        <el-link href="./#/dinnerware" target="_blank"><pre> 餐饮用具 |</pre></el-link>
                        <el-link href="./#/everydayuse" target="_blank"><pre> 居家日用 |</pre></el-link>
                        <el-link href="./#/curtain" target="_blank"><pre> 窗帘布艺 |</pre></el-link>
                        <el-link href="./#/bedclothes" target="_blank"><pre> 床上用品 |</pre></el-link>
                        <el-link href="./#/homedecoration" target="_blank"><pre> 家居装饰 |</pre></el-link>
                        <el-link href="./#/storagebox" target="_blank"><pre> 收纳整理 |</pre></el-link>
                        <el-link href="./#/cleaner" target="_blank"><pre> 清洁用具 |</pre></el-link>
                        <el-link href="./#/gift" target="_blank"><pre> 节庆礼品 |</pre></el-link>
                        <el-link href="./#/book" target="_blank"><pre> 图书 |</pre></el-link>
                        <el-link href="./#/diy" target="_blank"><pre> 个性定制 |</pre></el-link>
                        <br>
                        <el-link href="./#/girlshoe" target="_blank"><pre> 女鞋 |</pre></el-link>
                        <el-link href="./#/boyshoe" target="_blank"><pre> 男鞋 |</pre></el-link>
                        <el-link href="./#/specialshoe" target="_blank"><pre> 流行 |</pre></el-link>
                        <el-link href="./#/girlknapsack" target="_blank"><pre> 女士包袋 |</pre></el-link>
                        <el-link href="./#/boyknapsack" target="_blank"><pre> 男士包袋 |</pre></el-link>
                        <el-link href="./#/specialknapsack" target="_blank"><pre> 流行趋势 |</pre></el-link>
                        <el-link href="./#/luggage" target="_blank"><pre> 功能类箱包 |</pre></el-link>
                        <br>
                        <el-link href="./#/foodgift" target="_blank"><pre> 礼品礼包 |</pre></el-link>
                        <el-link href="./#/snacks" target="_blank"><pre> 零食 |</pre></el-link>
                        <el-link href="./#/fastfood" target="_blank"><pre> 方便速食 |</pre></el-link>
                        <el-link href="./#/milkdrink" target="_blank"><pre> 乳饮 |</pre></el-link>
                        <el-link href="./#/foodration" target="_blank"><pre> 粮油调味 |</pre></el-link>
                        <el-link href="./#/instantdrink" target="_blank"><pre> 冲饮 |</pre></el-link>
                        <el-link href="./#/tea" target="_blank"><pre> 茶 |</pre></el-link>
                        <el-link href="./#/wine" target="_blank"><pre> 名酒 |</pre></el-link>
                        <el-link href="./#/bakingmaterial" target="_blank"><pre> 烘焙原料 |</pre></el-link>
                        <el-link href="./#/drygoods" target="_blank"><pre> 南北干货 |</pre></el-link>
                        <br>
                        <el-link href="./#/laptop" target="_blank"><pre> 笔记本电脑 |</pre></el-link>
                        <el-link href="./#/digitalaccessory" target="_blank"><pre> 数码配件 |</pre></el-link>
                        <el-link href="./#/voicebox" target="_blank"><pre> 影音娱乐 |</pre></el-link>
                        <el-link href="./#/businessoffice" target="_blank"><pre> 商务办公 |</pre></el-link>
                        <el-link href="./#/smartdevices" target="_blank"><pre> 智能设备 |</pre></el-link>
                        <el-link href="./#/networkproducts" target="_blank"><pre> 网络产品 |</pre></el-link>
                        <el-link href="./#/camera" target="_blank"><pre> 摄影摄像 |</pre></el-link>
                        <el-link href="./#/musicalinstrument" target="_blank"><pre> 乐器 |</pre></el-link>
                        <el-link href="./#/digitalservice" target="_blank"><pre> 数码服务 |</pre></el-link>
                        <el-link href="./#/kitchensmallappliances" target="_blank"><pre> 厨房小电器 |</pre></el-link>
                        <el-link href="./#/livingappliances" target="_blank"><pre> 生活电器 |</pre></el-link>
                        <el-link href="./#/biglivingappliances" target="_blank"><pre> 大家电 |</pre></el-link>
                        <el-link href="./#/personalcareappliances" target="_blank"><pre> 个护电器 |</pre></el-link>
                        <el-link href="./#/kitchenbigappliances" target="_blank"><pre> 厨房大电 |</pre></el-link>
                        <el-link href="./#/applianceservice" target="_blank"><pre> 家电服务 |</pre></el-link>
                        <br>
                        <el-link href="./#/skincare" target="_blank"><pre> 护肤 |</pre></el-link>
                        <el-link href="./#/makeup" target="_blank"><pre> 彩妆 |</pre></el-link>
                        <el-link href="./#/beautybody" target="_blank"><pre> 美容美体 |</pre></el-link>
                        <el-link href="./#/homecleaner" target="_blank"><pre> 家用清洁 |</pre></el-link>
                        <el-link href="./#/haircare" target="_blank"><pre> 毛发护理 |</pre></el-link>
                        <el-link href="./#/bathproducts" target="_blank"><pre> 洗浴用品 |</pre></el-link>
                        <el-link href="./#/paper" target="_blank"><pre> 纸品湿巾 |</pre></el-link>
                        <el-link href="./#/femancare" target="_blank"><pre> 女性护理 |</pre></el-link>
                        <el-link href="./#/cleaningservice" target="_blank"><pre> 家政服务 |</pre></el-link>
                        <br>
                        <el-link href="./#/sportsclothes" target="_blank"><pre> 运动穿搭 |</pre></el-link>
                        <el-link href="./#/outsidesports" target="_blank"><pre> 户外运动 |</pre></el-link>
                        <el-link href="./#/exercise" target="_blank"><pre> 健身塑形 |</pre></el-link>
                        <el-link href="./#/sportsbags" target="_blank"><pre> 球类及包配 |</pre></el-link>
                        <el-link href="./#/minoritysports" target="_blank"><pre> 小众运动 |</pre></el-link>
                        <el-link href="./#/outdoortourism" target="_blank"><pre> 户外旅游 |</pre></el-link>
                        <br>
                        <el-link href="./#/freshfruits" target="_blank"><pre> 新鲜水果 |</pre></el-link>
                        <el-link href="./#/seasonfresh" target="_blank"><pre> 时令生鲜 |</pre></el-link>
                        <el-link href="./#/freshvegetables" target="_blank"><pre> 美味蔬菜 |</pre></el-link>
                        <el-link href="./#/freshaquatic" target="_blank"><pre> 海鲜水产 |</pre></el-link>
                        <el-link href="./#/freshmeat" target="_blank"><pre> 新鲜肉类 |</pre></el-link>
                        <el-link href="./#/freshfood" target="_blank"><pre> 锅物料理 |</pre></el-link>
                        <el-link href="./#/fresheggs" target="_blank"><pre> 禽蛋 |</pre></el-link>
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
import HeadLogin from './HeadLogin'
import Left from './Left'
import Footer from './Footer'
export default {
  data () {
    return {
      input: '',
      currentDate: new Date()
    }
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
</style>
