<template>
    <el-container>
        <!--顶端操作栏-->
        <el-header class="top-header">
            <div>
                WebShop
            </div>
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
                    <el-input v-model="input" placeholder="请输入内容" prefix-icon="el-icon-search">
                    </el-input>
                </el-menu-item>
                <el-menu-item index="1"><el-link target="_blank">商品分类</el-link></el-menu-item>
                <el-submenu index="2">
                    <template slot="title">卖家中心</template>
                    <el-menu-item index="2-1"><el-link href="./#/login" target="_blank" style="color: #fff">已卖出的商品</el-link></el-menu-item>
                    <el-menu-item index="2-2"><el-link href="./#/login" target="_blank" style="color: #fff">出售中的商品</el-link></el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">用户中心</template>
                    <el-menu-item index="3-1"><el-link href="./#/login" target="_blank" style="color: #fff">登录</el-link></el-menu-item>
                    <el-menu-item index="3-2"><el-link href="./#/signup" target="_blank" style="color: #fff">注册</el-link></el-menu-item>
                    <el-menu-item index="3-3"><el-link href="./#/login" target="_blank" style="color: #fff">足迹</el-link></el-menu-item>
                    <el-menu-item index="3-4"><el-link href="./#/login" target="_blank" style="color: #fff">收藏</el-link></el-menu-item>
                    <el-menu-item index="3-5"><el-link href="./#/login" target="_blank" style="color: #fff">购物车</el-link></el-menu-item>
                    <el-menu-item index="3-6"><el-link href="./#/login" target="_blank" style="color: #fff">购买记录</el-link></el-menu-item>
                    <el-menu-item index="3-7"><el-link href="./#/login" target="_blank" style="color: #fff">订单</el-link></el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><el-link href="./" target="_blank" style="color: #fff">联系客服</el-link></template>
                    <el-menu-item index="4-1"><el-link href="./#/login" target="_blank" style="color: #fff">消费者客服</el-link></el-menu-item>
                    <el-menu-item index="4-2"><el-link href="./#/login" target="_blank" style="color: #fff">卖家客服</el-link></el-menu-item>
                </el-submenu>
            </el-menu>
            </div>
        </el-header>
        <el-container>
            <!--侧边栏导航-->
            <el-aside width="200px" style="background-color: #545c64" class="left-aside">
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                    <!--服饰-->
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-goods"></i>
                            <el-link style="color: #fff">服饰</el-link>
                        </template>
                        <el-submenu index="1-1">
                            <template slot="title">女装</template>
                            <el-menu-item index="1-1-1"><el-link href="./#/girlshirt" target="_blank" style="color: #fff">上装</el-link></el-menu-item>
                            <el-menu-item index="1-1-2"><el-link href="./#/girlskirt" target="_blank" style="color: #fff">女裙</el-link></el-menu-item>
                            <el-menu-item index="1-1-3"><el-link href="./#/girltrouses" target="_blank" style="color: #fff">女裤</el-link></el-menu-item>
                            <el-menu-item index="1-1-4"><el-link href="./#/girlspecial" target="_blank" style="color: #fff">特色女装</el-link></el-menu-item>
                            <el-menu-item index="1-1-5"><el-link href="./#/girlsuit" target="_blank" style="color: #fff">套装</el-link></el-menu-item>                                <el-menu-item index="1-1-6">外套</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-2">
                            <template slot="title">男装</template>
                            <el-menu-item index="1-2-1"><el-link href="./#/boytrouses" target="_blank" style="color: #fff">裤子</el-link></el-menu-item>
                            <el-menu-item index="1-2-2"><el-link href="./#/boyshirt" target="_blank" style="color: #fff">上装</el-link></el-menu-item>
                            <el-menu-item index="1-2-3"><el-link href="./#/boyspecial" target="_blank" style="color: #fff">流行</el-link></el-menu-item>
                            <el-menu-item index="1-2-4"><el-link href="./#/boysuit" target="_blank" style="color: #fff">正装套装</el-link></el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-3">
                            <template slot="title">内衣</template>
                            <el-menu-item index="1-3-1"><el-link href="./#/homewear" target="_blank" style="color: #fff">家居</el-link></el-menu-item>
                            <el-menu-item index="1-3-2"><el-link href="./#/socks" target="_blank" style="color: #fff">袜子</el-link></el-menu-item>
                            <el-menu-item index="1-3-3"><el-link href="./#/unerpants" target="_blank" style="color: #fff">内裤</el-link></el-menu-item>
                            <el-menu-item index="1-3-4"><el-link href="./#/specialunderclothes" target="_blank" style="color: #fff">流行</el-link></el-menu-item>
                            <el-menu-item index="1-3-5"><el-link href="./#/bras" target="_blank" style="color: #fff">文胸</el-link></el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-4">
                            <template slot="title">饰品</template>
                            <el-menu-item index="1-4-1"><el-link href="./#/accessory" target="_blank" style="color: #fff">服配</el-link></el-menu-item>
                            <el-menu-item index="1-4-2"><el-link href="./#/trendmatching" target="_blank" style="color: #fff">潮搭</el-link></el-menu-item>
                            <el-menu-item index="1-4-3"><el-link href="./#/watch" target="_blank" style="color: #fff">手表</el-link></el-menu-item>
                            <el-menu-item index="1-4-4"><el-link href="./#/eyeglasses" target="_blank" style="color: #fff">眼镜</el-link></el-menu-item>
                            <el-menu-item index="1-4-5"><el-link href="./#/jewellery" target="_blank" style="color: #fff">珠宝</el-link></el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-5">
                            <template slot="title">服饰服务</template>
                            <el-menu-item index="1-23"><el-link href="./#/washingservice" target="_blank" style="color: #fff">洗衣服务</el-link></el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <!--手机-->
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-mobile"></i>
                            <span>手机</span>
                        </template>
                        <el-submenu index="2-1">
                            <template slot="title">手机配件</template>
                            <el-menu-item index="2-1-1"><el-link href="./#/phoneshell" target="_blank" style="color: #fff">手机壳</el-link></el-menu-item>
                            <el-menu-item index="2-1-2"><el-link href="./#/earphone" target="_blank" style="color: #fff">耳机</el-link></el-menu-item>
                            <el-menu-item index="2-1-3"><el-link href="./#/portablebattery" target="_blank" style="color: #fff">充电宝</el-link></el-menu-item>
                            <el-menu-item index="2-1-4"><el-link href="./#/usb" target="_blank" style="color: #fff">数据线/充电器</el-link></el-menu-item>
                            <el-menu-item index="2-1-5"><el-link href="./#/phoneholder" target="_blank" style="color: #fff">手机支架</el-link></el-menu-item>
                            <el-menu-item index="2-1-6"><el-link href="./#/screenprotector" target="_blank" style="color: #fff">手机壳贴膜</el-link></el-menu-item>
                            <el-menu-item index="2-1-7"><el-link href="./#/selfiestick" target="_blank" style="color: #fff">自拍杆</el-link></el-menu-item>
                            <el-menu-item index="2-1-8"><el-link href="./#/phoneelse" target="_blank" style="color: #fff">其他</el-link></el-menu-item>
                        </el-submenu>
                        <el-submenu index="2-2">
                            <template slot="title">手机</template>
                            <el-menu-item index="2-2-1"><el-link href="./#/huawei" target="_blank" style="color: #fff">华为</el-link></el-menu-item>
                            <el-menu-item index="2-2-2"><el-link href="./#/apple" target="_blank" style="color: #fff">苹果</el-link></el-menu-item>
                            <el-menu-item index="2-2-3"><el-link href="./#/vivo" target="_blank" style="color: #fff">vivo</el-link></el-menu-item>
                            <el-menu-item index="2-2-4"><el-link href="./#/oppo" target="_blank" style="color: #fff">oppo</el-link></el-menu-item>
                            <el-menu-item index="2-2-5"><el-link href="./#/mi" target="_blank" style="color: #fff">小米</el-link></el-menu-item>
                            <el-menu-item index="2-2-6"><el-link href="./#/samsung" target="_blank" style="color: #fff">三星</el-link></el-menu-item>
                            <el-menu-item index="2-2-7"><el-link href="./#/otherbrandphone" target="_blank" style="color: #fff">其他</el-link></el-menu-item>
                        </el-submenu>
                        <el-submenu index="2-3">
                            <template slot="title">通信服务</template>
                            <el-menu-item index="2-3-1"><el-link href="./#/trafficcard" target="_blank" style="color: #fff">手机流量卡</el-link></el-menu-item>
                            <el-menu-item index="2-3-2"><el-link href="./#/prepairrefill" target="_blank" style="color: #fff">话费充值</el-link></el-menu-item>
                            <el-menu-item index="2-3-3"><el-link href="./#/flowrecharge" target="_blank" style="color: #fff">流量充值</el-link></el-menu-item>
                        </el-submenu>
                        <el-menu-item index="2-4"><el-link href="./#/phonerepair" target="_blank" style="color: #fff">手机维修</el-link></el-menu-item>
                    </el-submenu>
                    <!--百货-->
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-toilet-paper"></i>
                            <span>百货</span>
                        </template>
                        <el-menu-item index="3-1"><el-link href="./#/statinery" target="_blank" style="color: #fff">文具教具</el-link></el-menu-item>
                        <el-menu-item index="3-2"><el-link href="./#/greenpet" target="_blank" style="color: #fff">绿植宠物</el-link></el-menu-item>
                        <el-menu-item index="3-3"><el-link href="./#/cooker" target="_blank" style="color: #fff">厨房用品</el-link></el-menu-item>
                        <el-menu-item index="3-4"><el-link href="./#/dinnerware" target="_blank" style="color: #fff">餐饮用具</el-link></el-menu-item>
                        <el-menu-item index="3-5"><el-link href="./#/everydayuse" target="_blank" style="color: #fff">居家日用</el-link></el-menu-item>
                        <el-menu-item index="3-6"><el-link href="./#/curtain" target="_blank" style="color: #fff">窗帘布艺</el-link></el-menu-item>
                        <el-menu-item index="3-7"><el-link href="./#/bedclothes" target="_blank" style="color: #fff">床上用品</el-link></el-menu-item>
                        <el-menu-item index="3-8"><el-link href="./#/homedecoration" target="_blank" style="color: #fff">家居装饰</el-link></el-menu-item>
                        <el-menu-item index="3-9"><el-link href="./#/storagebox" target="_blank" style="color: #fff">收纳整理</el-link></el-menu-item>
                        <el-menu-item index="3-10"><el-link href="./#/cleaner" target="_blank" style="color: #fff">清洁用具</el-link></el-menu-item>
                        <el-menu-item index="3-11"><el-link href="./#/gift" target="_blank" style="color: #fff">节庆礼品</el-link></el-menu-item>
                        <el-menu-item index="3-12"><el-link href="./#/book" target="_blank" style="color: #fff">图书</el-link></el-menu-item>
                        <el-menu-item index="3-13"><el-link href="./#/diy" target="_blank" style="color: #fff">个性定制</el-link></el-menu-item>
                    </el-submenu>
                    <!--鞋包-->
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-suitcase"></i>
                            <span>鞋包</span>
                            <el-submenu index="4-1">
                                <template slot="title">鞋靴</template>
                                <el-menu-item index="4-1-1"><el-link href="./#/girlshoe" target="_blank" style="color: #fff">女鞋</el-link></el-menu-item>
                                <el-menu-item index="4-1-2"><el-link href="./#/boyshoe" target="_blank" style="color: #fff">男鞋</el-link></el-menu-item>
                                <el-menu-item index="4-1-3"><el-link href="./#/specialshoe" target="_blank" style="color: #fff">流行</el-link></el-menu-item>
                            </el-submenu>
                            <el-submenu index="4-2">
                                <template slot="title">箱包</template>
                                <el-menu-item index="4-2-1"><el-link href="./#/girlknapsack" target="_blank" style="color: #fff">女士包袋</el-link></el-menu-item>
                                <el-menu-item index="4-2-1"><el-link href="./#/boyknapsack" target="_blank" style="color: #fff">男士包袋</el-link></el-menu-item>
                                <el-menu-item index="4-2-1"><el-link href="./#/specialknapsack" target="_blank" style="color: #fff">流行趋势</el-link></el-menu-item>
                                <el-menu-item index="4-2-1"><el-link href="./#/luggage" target="_blank" style="color: #fff">功能类箱包</el-link></el-menu-item>
                            </el-submenu>
                        </template>
                    </el-submenu>
                    <!--食品-->
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-food"></i>
                            <span>食品</span>
                        </template>
                        <el-menu-item index="5-1"><el-link href="./#/foodgift" target="_blank" style="color: #fff">礼品礼包</el-link></el-menu-item>
                        <el-menu-item index="5-2"><el-link href="./#/snacks" target="_blank" style="color: #fff">零食</el-link></el-menu-item>
                        <el-menu-item index="5-3"><el-link href="./#/fastfood" target="_blank" style="color: #fff">方便速食</el-link></el-menu-item>
                        <el-menu-item index="5-4"><el-link href="./#/milkdrink" target="_blank" style="color: #fff">乳饮</el-link></el-menu-item>
                        <el-menu-item index="5-5"><el-link href="./#/foodration" target="_blank" style="color: #fff">粮油调味</el-link></el-menu-item>
                        <el-menu-item index="5-6"><el-link href="./#/instantdrink" target="_blank" style="color: #fff">冲饮</el-link></el-menu-item>
                        <el-menu-item index="5-7"><el-link href="./#/tea" target="_blank" style="color: #fff">茶</el-link></el-menu-item>
                        <el-menu-item index="5-8"><el-link href="./#/wine" target="_blank" style="color: #fff">名酒</el-link></el-menu-item>
                        <el-menu-item index="5-9"><el-link href="./#/bakingmaterial" target="_blank" style="color: #fff">烘焙原料</el-link></el-menu-item>
                        <el-menu-item index="5-10"><el-link href="./#/drygoods" target="_blank" style="color: #fff">南北干货</el-link></el-menu-item>
                    </el-submenu>
                    <!--数码电器-->
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-table-lamp"></i>
                            <span>数码电器</span>
                            <el-submenu index="6-1">
                                <template slot="title">数码</template>
                                <el-menu-item index="6-1-1"><el-link href="./#/laptop" target="_blank" style="color: #fff">笔记本电脑</el-link></el-menu-item>
                                <el-menu-item index="6-1-2"><el-link href="./#/digitalaccessory" target="_blank" style="color: #fff">数码配件</el-link></el-menu-item>
                                <el-menu-item index="6-1-3"><el-link href="./#/voicebox" target="_blank" style="color: #fff">影音娱乐</el-link></el-menu-item>
                                <el-menu-item index="6-1-4"><el-link href="./#/businessoffice" target="_blank" style="color: #fff">商务办公</el-link></el-menu-item>
                                <el-menu-item index="6-1-5"><el-link href="./#/smartdevices" target="_blank" style="color: #fff">智能设备</el-link></el-menu-item>
                                <el-menu-item index="6-1-6"><el-link href="./#/networkproducts" target="_blank" style="color: #fff">网络产品</el-link></el-menu-item>
                                <el-menu-item index="6-1-7"><el-link href="./#/camera" target="_blank" style="color: #fff">摄影摄像</el-link></el-menu-item>
                                <el-menu-item index="6-1-8"><el-link href="./#/musicalinstrument" target="_blank" style="color: #fff">乐器</el-link></el-menu-item>
                                <el-menu-item index="6-1-9"><el-link href="./#/digitalservice" target="_blank" style="color: #fff">数码服务</el-link></el-menu-item>
                            </el-submenu>
                            <el-submenu index="6-2">
                                <template slot="title">电器</template>
                                <el-menu-item index="6-2-1"><el-link href="./#/kitchensmallappliances" target="_blank" style="color: #fff">厨房小电器</el-link></el-menu-item>
                                <el-menu-item index="6-2-2"><el-link href="./#/livingappliances" target="_blank" style="color: #fff">生活电器</el-link></el-menu-item>
                                <el-menu-item index="6-2-3"><el-link href="./#/biglivingappliances" target="_blank" style="color: #fff">大家电</el-link></el-menu-item>
                                <el-menu-item index="6-2-4"><el-link href="./#/personalcareappliances" target="_blank" style="color: #fff">个护电器</el-link></el-menu-item>
                                <el-menu-item index="6-2-5"><el-link href="./#/kitchenbigappliances" target="_blank" style="color: #fff">厨房大电</el-link></el-menu-item>
                                <el-menu-item index="6-2-6"><el-link href="./#/applianceservice" target="_blank" style="color: #fff">家电服务</el-link></el-menu-item>
                            </el-submenu>
                        </template>
                    </el-submenu>
                    <!--美妆/洗护-->
                    <el-submenu index="7">
                        <template slot="title">
                            <i class="el-icon-shopping-bag-1"></i>
                            <span>美妆/洗护</span>
                        </template>
                        <el-submenu index="7-1">
                            <template slot="title">美妆</template>
                            <el-menu-item index="7-1-1"><el-link href="./#/skincare" target="_blank" style="color: #fff">护肤</el-link></el-menu-item>
                            <el-menu-item index="7-1-2"><el-link href="./#/makeup" target="_blank" style="color: #fff">彩妆</el-link></el-menu-item>
                            <el-menu-item index="7-1-3"><el-link href="./#/beautybody" target="_blank" style="color: #fff">美容美体</el-link></el-menu-item>
                        </el-submenu>
                        <el-submenu index="7-2">
                            <template slot="title">洗护</template>
                            <el-menu-item index="7-2-1"><el-link href="./#/homecleaner" target="_blank" style="color: #fff">家用清洁</el-link></el-menu-item>
                            <el-menu-item index="7-2-2"><el-link href="./#/haircare" target="_blank" style="color: #fff">毛发护理</el-link></el-menu-item>
                            <el-menu-item index="7-2-3"><el-link href="./#/bathproducts" target="_blank" style="color: #fff">洗浴用品</el-link></el-menu-item>
                            <el-menu-item index="7-2-4"><el-link href="./#/paper" target="_blank" style="color: #fff">纸品湿巾</el-link></el-menu-item>
                            <el-menu-item index="7-2-5"><el-link href="./#/femancare" target="_blank" style="color: #fff">女性护理</el-link></el-menu-item>
                            <el-menu-item index="7-2-6"><el-link href="./#/cleaningservice" target="_blank" style="color: #fff">家政服务</el-link></el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <!--运动-->
                    <el-submenu index="8">
                        <template slot="title">
                            <i class="el-icon-baseball"></i>
                            <span>运动</span>
                        </template>
                        <el-menu-item index="8-1"><el-link href="./#/sportsclothes" target="_blank" style="color: #fff">运动穿搭</el-link></el-menu-item>
                        <el-menu-item index="8-2"><el-link href="./#/outsidesports" target="_blank" style="color: #fff">户外运动</el-link></el-menu-item>
                        <el-menu-item index="8-3"><el-link href="./#/exercise" target="_blank" style="color: #fff">健身塑形</el-link></el-menu-item>
                        <el-menu-item index="8-4"><el-link href="./#/sportsbags" target="_blank" style="color: #fff">球类及包配</el-link></el-menu-item>
                        <el-menu-item index="8-5"><el-link href="./#/minoritysports" target="_blank" style="color: #fff">小众运动</el-link></el-menu-item>
                        <el-menu-item index="8-6"><el-link href="./#/outdoortourism" target="_blank" style="color: #fff">户外旅游</el-link></el-menu-item>
                    </el-submenu>
                    <!--生鲜-->
                    <el-submenu index="9">
                        <template slot="title">
                            <i class="el-icon-refrigerator"></i>
                            <span>生鲜</span>
                        </template>
                        <el-menu-item index="9-1"><el-link href="./#/freshfruits" target="_blank" style="color: #fff">新鲜水果</el-link></el-menu-item>
                        <el-menu-item index="9-2"><el-link href="./#/seasonfresh" target="_blank" style="color: #fff">时令生鲜</el-link></el-menu-item>
                        <el-menu-item index="9-3"><el-link href="./#/freshvegetables" target="_blank" style="color: #fff">美味蔬菜</el-link></el-menu-item>
                        <el-menu-item index="9-4"><el-link href="./#/freshaquatic" target="_blank" style="color: #fff">海鲜水产</el-link></el-menu-item>
                        <el-menu-item index="9-5"><el-link href="./#/freshmeat" target="_blank" style="color: #fff">新鲜肉类</el-link></el-menu-item>
                        <el-menu-item index="9-6"><el-link href="./#/freshfood" target="_blank" style="color: #fff">锅物料理</el-link></el-menu-item>
                        <el-menu-item index="9-7"><el-link href="./#/fresheggs" target="_blank" style="color: #fff">禽蛋</el-link></el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main class="top-main">
                    <el-header height="30px" class="bottom-header">
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
                        <el-row>
                            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 0.9 : 0">
                                <el-container>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 40px">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>{{goodsname}}</span>
                                                <div class="bottom clearfix">
                                                    <span>{{goodsname}}</span>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px">
                                            <img src="../assets/02.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>{{goodsname}}</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px">
                                            <img src="../assets/03.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>{{goodsname}}</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                </el-container>
                            </el-col>
                        </el-row>
                        <el-header></el-header>
                        <el-row>
                            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 0.9 : 0">
                                <el-container>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 10px">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>{{goodsname}}</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px">
                                            <img src="../assets/02.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>{{goodsname}}</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px">
                                            <img src="../assets/03.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>{{goodsname}}</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                </el-container>
                            </el-col>
                        </el-row>
                    </el-main>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      input: '',
      currentDate: new Date(),
      goodsname: ''
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
    showgoods: function () {
      var that = this
      axios.get('http://3m123712o1.qicp.vip/goods/64')
        .then(function (response) {
          console.log(response.data)
          that.goodsname = response.data
        })
        .catch(function (error) {
          alert(error)
        })
    }
  },
  created () {
    var that = this
    axios.get('http://3m123712o1.qicp.vip/goods/64')
      .then(function (response) {
        console.log(response.data.data.goods.name)
        that.goodsname = response.data.data.goods.name
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
</style>
