<template>
    <Fresh></Fresh>
</template>

<script>
import Fresh from './Fresh'
export default {
  data () {
    return {
      input: '',
      currentDate: new Date()
    }
  },
  components: {
    Fresh
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
