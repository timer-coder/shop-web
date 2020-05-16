<template>
    <div class="background">
        <pre>    请用户遵守以下协议：</pre>
        <pre></pre>
        <div class="signup-box">
            <div>
                <img src="../assets/Logo2.png" style="width:150px; height:150px">
            </div>
            <el-form label-width="80px" class="signup-form" size="mini">
                <el-form-item style="font-family: 宋体">
                    <el-radio v-model="radio" label="1">买家账号</el-radio>
                    <el-radio v-model="radio" label="2">卖家账号</el-radio>
                </el-form-item>
                <el-form-item label="昵称" style="font-family: 宋体">
                    <el-input style="width:240px"></el-input>
                </el-form-item>
                <el-form-item label="手机号" style="font-family: 宋体">
                    <el-input style="width:240px"></el-input>
                </el-form-item>
                <el-form-item label="密码" style="font-family: 宋体">
                    <el-input style="width:240px"></el-input>
                </el-form-item>
                <el-form-item label="确定密码" style="font-family: 宋体">
                    <el-input style="width:240px"></el-input>
                </el-form-item>
                <el-form-item class="button-box">
                    <el-button style="background: #b0dddf">注册</el-button>
                    <el-button style="background: #b0dddf">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1'
    }
  }
}
</script>

<style lang="less">
html,
body,
#app,
.background {
    background-color: #b0dddf;
    max-width: 100%;
    max-height: 100%;
    .signup-box {
        width: 350px;
        height: 500px;
        background-color: #fff;
        border-radius: 3px;
        position: absolute;
        left: 70%;
        top: 40px;
        img {
            position: absolute;
            left:30%;
        }
    }
}
.signup-form {
    position: absolute;
    bottom: 15%;
    .button-box {
        display: flex;
        justify-content: flex-end;
    }
}
</style>
