<template>
   <div class="footer">
    <tabbar style="position:fixed">
      <tabbar-item>
        <img slot="icon" src="../../assets/hotwatch.png">
        <span slot="label">正在热播</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../../assets/shortvideo.png">
        <span slot="label">短视频</span>
      </tabbar-item>
      <tabbar-item selected>
        <img slot="icon" src="../../assets/chat.png">
        <span slot="label">一起来聊</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../../assets/myself.png">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
    </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
    components:{
        Tabbar,
        TabbarItem
    }
}
</script>
<style scoped>
.footer{
  width: 100%;
  margin-top: 80px;
}
</style>
