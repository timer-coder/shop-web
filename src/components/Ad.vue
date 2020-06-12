<template>
    <el-container>
        <el-main class="top-main">
            <!--广告栏-->
            <el-header class="medium-header" height="230px">
                <el-carousel :interval="4000" type="card" height="200px">
                    <div id = "Ad">
                        <el-carousel-item v-for="item in data" v-bind:key="item">
                            <img :src="item.mainurl" class="image">
                        </el-carousel-item>
                    </div>
                </el-carousel>
            </el-header>
        </el-main>
    </el-container>
</template>

<script>
import axios from 'axios'
import { baseUrl } from '../js/config'

export default {
  data () {
    return { data: [] }
  },
  mounted () {},
  computed: {},
  methods: {},
  created () {
    var that = this
    console.log(baseUrl)
    axios.get(baseUrl + '/goods/0/10')
      .then(function (response) {
        console.log(response.data)
        that.data = response.data.data
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
