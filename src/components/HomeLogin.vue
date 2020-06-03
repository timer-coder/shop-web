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
                    <el-menu-item index="2-1">免费开店</el-menu-item>
                    <el-menu-item index="2-2">已卖出的商品</el-menu-item>
                    <el-menu-item index="2-3">出售中的商品</el-menu-item>
                    <el-menu-item index="2-4">体检中心</el-menu-item>
                    <el-menu-item index="2-5">问商友</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">用户中心</template>
                    <el-menu-item index="3-1"><el-link href="./#/shoppingcart">购物车</el-link></el-menu-item>
                    <el-menu-item index="3-2"><el-link href="./#/havelook">足迹</el-menu-item>
                    <el-menu-item index="3-3"><el-link href="./#/like">收藏</el-menu-item>
                    <el-menu-item index="3-4"><el-link href="./#/order">订单</el-menu-item>
                    <el-menu-item index="3-5"><el-link href="./#/home">退出</el-menu-item>
                    <el-menu-item index="3-6">注销</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><el-link href="./" target="_blank" style="color: #fff">联系客服</el-link></template>
                    <el-menu-item index="3-1">消费者客服</el-menu-item>
                    <el-menu-item index="3-2">卖家客服</el-menu-item>
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
                            <el-menu-item index="1-1-1">上装</el-menu-item>
                            <el-menu-item index="1-1-2">女裙</el-menu-item>
                            <el-menu-item index="1-1-3">女裤</el-menu-item>
                            <el-menu-item index="1-1-4">特色女装</el-menu-item>
                            <el-menu-item index="1-1-5">套装</el-menu-item>                                <el-menu-item index="1-1-6">外套</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-2">
                            <template slot="title">男装</template>
                            <el-menu-item index="1-2-1">裤子</el-menu-item>
                            <el-menu-item index="1-2-2">上装</el-menu-item>
                            <el-menu-item index="1-2-3">流行</el-menu-item>
                            <el-menu-item index="1-2-4">正装套装</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-3">
                            <template slot="title">内衣</template>
                            <el-menu-item index="1-3-1">家居</el-menu-item>
                            <el-menu-item index="1-3-2">袜子</el-menu-item>
                            <el-menu-item index="1-3-3">内裤</el-menu-item>
                            <el-menu-item index="1-3-4">流行</el-menu-item>
                            <el-menu-item index="1-3-5">文胸</el-menu-item>
                            <el-menu-item index="1-3-6">塑身</el-menu-item>
                            <el-menu-item index="1-3-7">配件</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-4">
                            <template slot="title">饰品</template>
                            <el-menu-item index="1-4-1">服配</el-menu-item>
                            <el-menu-item index="1-4-2">潮搭</el-menu-item>
                            <el-menu-item index="1-4-3">手表</el-menu-item>
                            <el-menu-item index="1-4-4">眼镜</el-menu-item>
                            <el-menu-item index="1-4-5">珠宝</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-5">
                            <template slot="title">服饰服务</template>
                            <el-menu-item index="1-23">洗衣服务</el-menu-item>
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
                            <el-menu-item index="2-1-1">手机壳</el-menu-item>
                            <el-menu-item index="2-1-2">耳机</el-menu-item>
                            <el-menu-item index="2-1-3">充电宝</el-menu-item>
                            <el-menu-item index="2-1-4">数据线/充电器</el-menu-item>
                            <el-menu-item index="2-1-5">手机支架</el-menu-item>
                            <el-menu-item index="2-1-6">手机壳贴膜</el-menu-item>
                            <el-menu-item index="2-1-7">自拍杆</el-menu-item>
                            <el-menu-item index="2-1-8">其他</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2-2">
                            <template slot="title">手机</template>
                            <el-menu-item index="2-2-1">华为</el-menu-item>
                            <el-menu-item index="2-2-2">苹果</el-menu-item>
                            <el-menu-item index="2-2-3">vivo</el-menu-item>
                            <el-menu-item index="2-2-4">oppo</el-menu-item>
                            <el-menu-item index="2-2-5">小米</el-menu-item>
                            <el-menu-item index="2-2-6">三星</el-menu-item>
                            <el-menu-item index="2-2-7">其他</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2-3">
                            <template slot="title">通信服务</template>
                            <el-menu-item index="2-3-1">手机流量卡</el-menu-item>
                            <el-menu-item index="2-3-2">话费充值</el-menu-item>
                            <el-menu-item index="2-3-3">流量充值</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="2-4">手机维修</el-menu-item>
                    </el-submenu>
                    <!--百货-->
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-toilet-paper"></i>
                            <span>百货</span>
                        </template>
                        <el-menu-item index="3-1">文具教具</el-menu-item>
                        <el-menu-item index="3-2">绿植宠物</el-menu-item>
                        <el-menu-item index="3-3">厨房用品</el-menu-item>
                        <el-menu-item index="3-4">餐饮用具</el-menu-item>
                        <el-menu-item index="3-5">居家日用</el-menu-item>
                        <el-menu-item index="3-6">窗帘布艺</el-menu-item>
                        <el-menu-item index="3-7">床上用品</el-menu-item>
                        <el-menu-item index="3-8">家居装饰</el-menu-item>
                        <el-menu-item index="3-9">收纳整理</el-menu-item>
                        <el-menu-item index="3-10">清洁用具</el-menu-item>
                        <el-menu-item index="3-11">节庆礼品</el-menu-item>
                        <el-menu-item index="3-12">图书</el-menu-item>
                        <el-menu-item index="3-13">个性定制</el-menu-item>
                    </el-submenu>
                    <!--鞋包-->
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-suitcase"></i>
                            <span>鞋包</span>
                            <el-submenu index="4-1">
                                <template slot="title">鞋靴</template>
                                <el-menu-item index="4-1-1">女鞋</el-menu-item>
                                <el-menu-item index="4-1-2">男鞋</el-menu-item>
                                <el-menu-item index="4-1-3">流行</el-menu-item>
                            </el-submenu>
                            <el-submenu index="4-2">
                                <template slot="title">箱包</template>
                                <el-menu-item index="4-2-1">女士包袋</el-menu-item>
                                <el-menu-item index="4-2-1">男士包袋</el-menu-item>
                                <el-menu-item index="4-2-1">流行趋势</el-menu-item>
                                <el-menu-item index="4-2-1">功能类箱包</el-menu-item>
                            </el-submenu>
                        </template>
                    </el-submenu>
                    <!--食品-->
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-food"></i>
                            <span>食品</span>
                        </template>
                        <el-menu-item index="5-1">礼品礼包</el-menu-item>
                        <el-menu-item index="5-2">零食</el-menu-item>
                        <el-menu-item index="5-3">方便速食</el-menu-item>
                        <el-menu-item index="5-4">乳饮</el-menu-item>
                        <el-menu-item index="5-5">粮油调味</el-menu-item>
                        <el-menu-item index="5-6">冲饮</el-menu-item>
                        <el-menu-item index="5-7">茶</el-menu-item>
                        <el-menu-item index="5-8">名酒</el-menu-item>
                        <el-menu-item index="5-9">烘焙原料</el-menu-item>
                        <el-menu-item index="5-10">南北干货</el-menu-item>
                    </el-submenu>
                    <!--数码电器-->
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-table-lamp"></i>
                            <span>数码电器</span>
                            <el-submenu index="6-1">
                                <template slot="title">数码</template>
                                <el-menu-item index="6-1-1">笔记本电脑</el-menu-item>
                                <el-menu-item index="6-1-2">数码配件</el-menu-item>
                                <el-menu-item index="6-1-3">影音娱乐</el-menu-item>
                                <el-menu-item index="6-1-4">商务办公</el-menu-item>
                                <el-menu-item index="6-1-5">智能设备</el-menu-item>
                                <el-menu-item index="6-1-6">网络产品</el-menu-item>
                                <el-menu-item index="6-1-7">摄影摄像</el-menu-item>
                                <el-menu-item index="6-1-8">乐器</el-menu-item>
                                <el-menu-item index="6-1-9">数码服务</el-menu-item>
                            </el-submenu>
                            <el-submenu index="6-2">
                                <template slot="title">电器</template>
                                <el-menu-item index="6-2-1">厨房小电器</el-menu-item>
                                <el-menu-item index="6-2-2">生活电器</el-menu-item>
                                <el-menu-item index="6-2-3">大家电</el-menu-item>
                                <el-menu-item index="6-2-4">个护电器</el-menu-item>
                                <el-menu-item index="6-2-5">厨房大电</el-menu-item>
                                <el-menu-item index="6-2-6">家电服务</el-menu-item>
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
                            <el-menu-item index="7-1-1">护肤</el-menu-item>
                            <el-menu-item index="7-1-2">彩妆</el-menu-item>
                            <el-menu-item index="7-1-3">美容美体</el-menu-item>
                        </el-submenu>
                        <el-submenu index="7-2">
                            <template slot="title">洗护</template>
                            <el-menu-item index="7-2-1">家用清洁</el-menu-item>
                            <el-menu-item index="7-2-1">毛发护理</el-menu-item>
                            <el-menu-item index="7-2-1">洗浴用品</el-menu-item>
                            <el-menu-item index="7-2-1">纸品湿巾</el-menu-item>
                            <el-menu-item index="7-2-1">女性护理</el-menu-item>
                            <el-menu-item index="7-2-1">家政服务</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <!--运动-->
                    <el-submenu index="8">
                        <template slot="title">
                            <i class="el-icon-baseball"></i>
                            <span>运动</span>
                        </template>
                        <el-menu-item index="8-1">运动穿搭</el-menu-item>
                        <el-menu-item index="8-1">户外运动</el-menu-item>
                        <el-menu-item index="8-1">健身塑形</el-menu-item>
                        <el-menu-item index="8-1">球类及包配</el-menu-item>
                        <el-menu-item index="8-1">小众运动</el-menu-item>
                        <el-menu-item index="8-1">户外旅游</el-menu-item>
                    </el-submenu>
                    <!--生鲜-->
                    <el-submenu index="9">
                        <template slot="title">
                            <i class="el-icon-refrigerator"></i>
                            <span>生鲜</span>
                        </template>
                        <el-menu-item index="9-1">新鲜水果</el-menu-item>
                        <el-menu-item index="9-1">时令生鲜</el-menu-item>
                        <el-menu-item index="9-1">美味蔬菜</el-menu-item>
                        <el-menu-item index="9-1">海鲜水产</el-menu-item>
                        <el-menu-item index="9-1">新鲜肉类</el-menu-item>
                        <el-menu-item index="9-1">锅物料理</el-menu-item>
                        <el-menu-item index="9-1">禽蛋</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main class="top-main">
                    <!--广告栏-->
                    <el-header class="medium-header" height="230px">
                        <el-carousel :interval="4000" type="card" height="200px">
                            <el-carousel-item v-for="item in imagesbox" :key="item.id">
                                <img :src="item.idView" class="image">
                            </el-carousel-item>
                            <!--<el-carousel-item @click.native="link()">
                                <el-link herf="http://192.168.43.187:8080/" target="_blank">链接</el-link>
                            </el-carousel-item>-->
                        </el-carousel>
                    </el-header>
                    <!--猜你喜欢-->
                    <el-header class="bottom-header">
                        <el-breadcrumb-item>猜你喜欢<i class="el-icon-arrow-right"></i></el-breadcrumb-item>
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
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
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
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 40px">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
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
        <el-container>
            <el-main style="padding: 0px">
                <el-container>
                    <el-header height="30px"></el-header>
                    <!--商品推荐-->
                    <el-header height="30px" class="body-title">
                        <i class="el-icon-arrow-right"></i>
                        <el-breadcrumb-item>商品推荐</el-breadcrumb-item>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <el-row>
                            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 0.9 : 0">
                                <el-container>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                </el-container>
                <el-container  style="background-color: rgb(239, 245, 239)">
                    <el-header height="30px"></el-header>
                    <!--服饰-->
                    <el-header height="30px">
                        <i class="el-icon-arrow-right"></i>
                        <el-breadcrumb-item>服饰</el-breadcrumb-item>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <el-row>
                            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 0.9 : 0">
                                <el-container>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                </el-container>
                <el-container>
                    <el-header height="30px"></el-header>
                    <!--手机-->
                    <el-header height="30px">
                        <i class="el-icon-arrow-right"></i>
                        <el-breadcrumb-item>手机</el-breadcrumb-item>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <el-row>
                            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 0.9 : 0">
                                <el-container>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                </el-container>
                <el-container  style="background-color: rgb(239, 245, 239)">
                    <el-header height="30px"></el-header>
                    <!--百货-->
                    <el-header height="30px">
                        <i class="el-icon-arrow-right"></i>
                        <el-breadcrumb-item>百货</el-breadcrumb-item>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <el-row>
                            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 0.9 : 0">
                                <el-container>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                </el-container>
                <el-container>
                    <el-header height="30px"></el-header>
                    <!--鞋包-->
                    <el-header height="30px">
                        <i class="el-icon-arrow-right"></i>
                        <el-breadcrumb-item>鞋包</el-breadcrumb-item>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <el-row>
                            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 0.9 : 0">
                                <el-container>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                </el-container>
                <el-container  style="background-color: rgb(239, 245, 239)">
                    <el-header height="30px"></el-header>
                    <!--食品-->
                    <el-header height="30px">
                        <i class="el-icon-arrow-right"></i>
                        <el-breadcrumb-item>食品</el-breadcrumb-item>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <el-row>
                            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 0.9 : 0">
                                <el-container>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                </el-container>
                <el-container>
                    <el-header height="30px"></el-header>
                    <!--数码电器-->
                    <el-header height="30px">
                        <i class="el-icon-arrow-right"></i>
                        <el-breadcrumb-item>数码电器</el-breadcrumb-item>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <el-row>
                            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 0.9 : 0">
                                <el-container>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                </el-container>
                <el-container  style="background-color: rgb(239, 245, 239)">
                    <el-header height="30px"></el-header>
                    <!--美妆/洗护-->
                    <el-header height="30px">
                        <i class="el-icon-arrow-right"></i>
                        <el-breadcrumb-item>美妆/洗护</el-breadcrumb-item>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <el-row>
                            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 0.9 : 0">
                                <el-container>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                </el-container>
                <el-container>
                    <el-header height="30px"></el-header>
                    <!--运动-->
                    <el-header height="30px">
                        <i class="el-icon-arrow-right"></i>
                        <el-breadcrumb-item>运动</el-breadcrumb-item>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <el-row>
                            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 0.9 : 0">
                                <el-container>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                </el-container>
                <el-container  style="background-color: rgb(239, 245, 239)">
                    <el-header height="30px"></el-header>
                    <!--生鲜-->
                    <el-header height="30px">
                        <i class="el-icon-arrow-right"></i>
                        <el-breadcrumb-item>生鲜</el-breadcrumb-item>
                    </el-header>
                    <!--信息卡片-->
                    <el-main>
                        <el-row>
                            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 0.9 : 0">
                                <el-container>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
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
                                                <span>好吃的汉堡</span>
                                                <div class="bottom clearfix">
                                                    <time class="time">{{ currentDate }}</time>
                                                    <el-button type="text" class="button">操作按钮</el-button>
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div>
                                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px">
                                            <img src="../assets/01.jpg" class="image">
                                            <div style="padding: 14px;">
                                                <span>好吃的汉堡</span>
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
      currentDate: new Date()
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
