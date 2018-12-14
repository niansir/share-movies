<template>
  <div>
      <div class="header">
        <flexbox>
        <search></search>
        </flexbox>
         <div class="type">
         <flexbox>
            <flexbox-item>
              <grid :show-lr-borders="false" :show-vertical-dividers="false">
                <grid-item>
                  <div>
                    <img style="width:16px;height:16px;" src="../../assets/movie.png"/>
                    <span>电影</span>
                  </div>
                </grid-item>
            <grid-item>
                  <div>
                    <img style="width:16px;height:16px;" src="../../assets/xs.png"/>
                    <span>小说</span>
                  </div>
                </grid-item>
                  <grid-item>
                  <div>
                    <img style="width:16px;height:16px;" src="../../assets/dm.png"/>
                    <span>动漫</span>
                  </div>
                </grid-item>
                  <grid-item>
                  <div>
                    <img style="width:16px;height:16px;" src="../../assets/mz.png"/>
                    <span>妹子图</span>
                  </div>
                </grid-item>

              </grid>
             </flexbox-item>
          </flexbox>
          </div>

          <div class="banner">
            <swiper :list="baseList" auto>

            </swiper>
          </div>

     </div>

    <div class="content">
      <flexbox>
        <flexbox-item>
          <div class="movie_title">
       
            <span class="line">|</span> 
            <span>大家正在看</span>
            <router-link to="movielist">更多 ></router-link>
          </div>
        </flexbox-item>
      </flexbox>
    <div class="flex-demo">
      <flexbox>
 <flexbox-item class="movie_small_title">
        <div class="watch_person">
            <img class="hot_people" src="../../assets/hot_people.png">
            <span>观看人数:111</span>
          </div>
          <router-link to="/movieplayer">
            <img src="http://www.wodedy.com/uploads/allimg/201811/0b10647a17b3cbed.jpg" />
          </router-link>
          <span class="movie_label">你和我的倾城时光</span>
        </flexbox-item>

        <flexbox-item class="movie_small_title">
        <div class="watch_person">
            <img class="hot_people" src="../../assets/hot_people.png">
            <span>观看人数:111</span>
          </div>
         <router-link to="/movieplayer">
            <img src="http://www.zzyo.cc/upload/vod/2018-12-04/15439145685.jpg" />
         </router-link>
            <span class="movie_label">候选人</span>
        </flexbox-item>
       <flexbox-item class="movie_small_title">
          <div class="watch_person">
            <img class="hot_people" src="../../assets/hot_people.png">
            <span style="position:absoulte;right:0;">观看人数:111</span>
          </div>
          <a href="#">
            <img src="http://www.zzyo.cc/upload/vod/2018-12-04/15439145686.jpg" />
          </a>
            <span class="movie_label">分时度假</span>
        </flexbox-item>
      </flexbox>
    </div>
   

     <flexbox>
        <flexbox-item>
          <div class="movie_title">
           <span class="line">|</span> 
            <span>电影</span>
            <router-link to="movielist">更多 ></router-link>
          </div>
        </flexbox-item>
      </flexbox>
    <div class="flex-demo">
      <flexbox>
        <flexbox-item class="movie_small_title">
             <div class="watch_person">
            <img class="hot_people" src="../../assets/hot_people.png">
            <span style="position:absoulte;right:0;">观看人数:111</span>
          </div>
          <a href="#">
            <img  src="http://www.zzyo.cc/upload/vod/2018-12-04/15439145684.jpg" />
          </a>
            <span class="movie_label">女人之名</span>
        </flexbox-item>
        <flexbox-item class="movie_small_title">
            <div class="watch_person">
            <img class="hot_people" src="../../assets/hot_people.png">
            <span style="position:absoulte;right:0;">观看人数:111</span>
          </div>
          <a href="#">
            <img src="http://www.zzyo.cc/upload/vod/2018-12-03/15438458420.jpg" />
          </a>
            <span class="movie_label">南茜</span>
        </flexbox-item>
       <flexbox-item class="movie_small_title">
        <div class="watch_person">
            <img class="hot_people" src="../../assets/hot_people.png">
            <span style="position:absoulte;right:0;">观看人数:111</span>
          </div>
          <a href="#">
            <img class="hot_people" src="http://www.zzyo.cc/upload/vod/2018-12-03/15438453417.jpg" />
          </a>
            <span class="movie_label">小美人鱼</span>
        </flexbox-item>
      </flexbox>
    </div>
   

     <flexbox>
        <flexbox-item>
          <div class="movie_title">
            <span class="line">|</span> 
            <span>动漫</span>
            <router-link to="movielist">更多 ></router-link>
          </div>
        </flexbox-item>
      </flexbox>
    <div class="flex-demo">
      <flexbox>
        <flexbox-item class="movie_small_title">
             <div class="watch_person">
            <img class="hot_people" src="../../assets/hot_people.png">
            <span style="position:absoulte;right:0;">观看人数:111</span>
          </div>
          <a href="#">
            <img  src="http://www.zzyo.cc/upload/vod/2018-12-03/15438258556.jpg" />
          </a>
            <span class="movie_label">神犬小巴迪</span>
        </flexbox-item>
        <flexbox-item class="movie_small_title">
          <div class="watch_person">
            <img class="hot_people" src="../../assets/hot_people.png">
            <span style="position:absoulte;right:0;">观看人数:111</span>
          </div>
          <a href="#">
            <img src="http://www.zzyo.cc/upload/vod/2018-12-02/15437301324.jpg" />
          </a>
            <span class="movie_label">冒牌搭档</span>
        </flexbox-item>
       <flexbox-item class="movie_small_title">
            <div class="watch_person">
            <img class="hot_people" src="../../assets/hot_people.png">
            <span style="position:absoulte;right:0;">观看人数:111</span>
          </div>
          <a href="#">
            <img src="http://www.zzyo.cc/upload/vod/2018-12-03/15438258555.jpg" />
          </a>
            <span class="movie_label">生死格斗</span>
        </flexbox-item>
      </flexbox>
    </div>
    <footerOption />
    </div>
 
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell , Flexbox, FlexboxItem ,Grid, GridItem, Search, Swiper, SwiperItem } from 'vux'
import search from '../utils/search'
import footerOption from '../utils/footer_option'
export default {
  components: {
    Group,
    Cell,
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem,
    search,
    Swiper,
    SwiperItem,
    footerOption
  },
  
  data(){
    return {
      baseList : [{
          url: 'javascript:',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
          title: '送你一朵fua'
        }, {
          url: 'javascript:',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
          title: '送你一辆车'
        }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/5.jpg', // 404
          title: '送你一次旅行',
          fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
        }]
     }
  }
}




</script>

<style scoped>

.type{
  text-align: center;
}
.movie_title{
  padding: 5px;
}
.movie_title span{
  font-size: 15px;
}

.movie_title a:last-child{
 float: right;
}
.movie_label {
  margin-top: 5px;
}

.line{
  overflow:hidden; 
  width:6px;
  height:14px;
  background-color:#5aace9;
  color: #5aace9;
  margin-right: 5px;
}


.hot_people{
  width: 16px;
  height: 16px;
}
.watch_person{
  width: 130px;
}

</style>
