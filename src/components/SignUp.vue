<template>
    <div class="background">
        <div style="margin: 40px;"></div>
        <pre style="font-size:20px">   <strong>请用户遵守以下协议：</strong></pre>
        <pre style="font-size:16px">    同一手机号可以创建三种账户：买家/卖家/管理员，但不能创建多个同种账户。</pre>
        <pre style="font-size:16px">    同一卖家账户可以创建多个商铺，但商铺间的评分相互关联，请商家谨慎操作哦！</pre>
        <pre style="font-size:16px">    管理员账户的注册需要申请，请用户耐心等待24小时，您会收到我们的告知短信。</pre>
        <pre style="font-size:16px">    密码丢失的用户不要担心，您可以通过您的手机号找到您的账户，所以请保证您的手机号是您正在使用的，谢谢配合！</pre>
        <pre style="font-size:16px">    对于您的手机号等相关隐私信息，我们在此承诺不会泄露给他人。</pre>
        <pre style="font-size:16px">    您的账号在注册后会自动生成，不可更改；但其他的信息，您都可以进入设置页面进行修改。</pre>
        <pre style="font-size:16px">    卖家/管理员在进行其他操作前需要进行身份认证，未进行身份认证的买家在透支消费额度上会受到更多的限制。</pre>
        <pre style="font-size:16px">    后期不需要该账户的用户可以进行注销，我们会删除所有的相关信息。</pre>
        <pre style="font-size:16px">    谢谢您的配合！</pre>
        <br>
        <pre style="font-size:32px; color: #cb6304">                  <strong>欢迎加入我们！</strong></pre>
        <div class="signup-box">
            <div>
                <img src="../assets/Logo2.png" style="width:150px; height:150px">
            </div>
            <el-form label-width="80px" class="signup-form" size="mini">
                <el-form-item style="font-family: 宋体">
                    <el-radio-group v-model="radio" size="mini" fill="#b0dddf" style="margin-left: 20px">
                        <el-radio-button label="买家"></el-radio-button>
                        <el-radio-button label="卖家"></el-radio-button>
                        <el-radio-button label="管理员"></el-radio-button>
                    </el-radio-group>
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
      radio: '买家'
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
.signup-radio.is-active {
    color: #b0dddf !important;
}
</style>
