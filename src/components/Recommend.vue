<template>
    <el-main>
        <el-row>
            <el-col :span="8" v-for="item in data" :key="item" :offset="index > 0 ? 0.9 : 0">
                <el-container>
                    <div>
                        <el-card :body-style="{ padding: '0px' }" style="margin-left: 10px">
                            <img :src="item.mainurl" class="image">
                            <div style="padding: 14px;">
                                <span>{{ item.name }}</span>
                                <div class="bottom clearfix">
                                    <time class="time">{{ item.maindescribe }}</time>
                                    <el-button type="text" class="button" @click="buy">确认购买</el-button>
                                </div>
                            </div>
                        </el-card>
                    </div>
                </el-container>
            </el-col>
        </el-row>
    </el-main>
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
  methods: {
    buy () {
      this.$router.replace('/addorders')
    }
  },
  created () {
    var that = this
    console.log(baseUrl)
    axios.get(baseUrl + '/goods/0/3')
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
.el-card {
    width: 300px;
    height: 400px;
    margin: 0%;
}
.image {
    width: 100%;
    display: block;
}
</style>
