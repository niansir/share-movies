<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0} 
body{font:12px"宋体","Arial Narrow",HELVETICA;background:#fff;-webkit-text-size-adjust:100%;} 
a{color:#2d374b;text-decoration:none} 
a:hover{color:#cd0200;text-decoration:underline} 
em{font-style:normal} 
li{list-style:none} 
img{border:0;vertical-align:middle} 
table{border-collapse:collapse;border-spacing:0} 
p{word-wrap:break-word} 
a:link{text-decoration:none;}

a:visited{text-decoration:none;}

a:hover{text-decoration:none;}

a:active{text-decoration:none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

.flex-demo {
  text-align: center;
  font-size: 12px;
  border-radius: 4px;
  background-clip: padding-box;
  padding: 5px;
  
}

.flex-demo img:last-child{
  width: 100%;
  height: 160px;
} 

.watch_person{
  position: absolute;
  color: #fff;
}

.movie_small_title{
  text-align: center;

}



</style>
