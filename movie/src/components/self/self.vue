<template>
    <div>
       <div>

<group>
  <x-input title="用户名" class="weui-vcode">
      </x-input>
    </group>

<group>
  <x-input title="密码" class="weui-vcode">
      </x-input>
    </group>
<group>
  <x-input title="发送验证码" class="weui-vcode">
        <x-button slot="right" type="primary" mini>发送验证码</x-button>
      </x-input>
    </group>
   </div>
   <div class="login">
    <x-button round type="primary">登陆</x-button>
   </div>
    <flexbox>
        <flexbox-item>
            <div class="left">
                免费注册
            </div>
            <div class="right">
                找回密码
            </div>
        </flexbox-item>
    </flexbox>

    <divider>使用第三方登陆</divider>
   <footerOption />

    </div>
</template>
<script>
import { XInput,XButton,Group,Flexbox,FlexboxItem,Divider  } from 'vux'
import footerOption from '../utils/footer_option'
export default {
    components:{
        XInput,
        XButton,
        Group,
        footerOption,
        Flexbox,
        FlexboxItem,
        Divider 
    }
}
</script>
<style scoped>
.login{
    padding: 15px 0;
}
.left{
    float: left;
    padding-left: 5px;
}
.right{
    float: right;
    padding-right: 5px;

}
</style>
