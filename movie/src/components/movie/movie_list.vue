<template>
    <div>
        <div class="header">
            <flexbox>
                <flexbox-item>
                   <search />
                </flexbox-item>
            </flexbox>
            <flexbox>
                <flexbox-item>
                    <tab>
                        <tab-item selected>
                            按观看人数
                        </tab-item>
                        <tab-item>
                            按评分
                        </tab-item>
                        <tab-item>
                            按时间
                        </tab-item>
                    </tab>
                </flexbox-item>
            
            </flexbox>
        </div>
        <div class="content">
              <div class="flex-demo">
      <flexbox>
        <flexbox-item class="movie_small_title">
          <span class="watch_person">观看人数:111</span>
          <a href="#">
            <img  src="http://www.wodedy.com/uploads/allimg/201811/0b10647a17b3cbed.jpg" />
          </a>
            <span>你和我的倾城时光</span>
        </flexbox-item>
        <flexbox-item class="movie_small_title">
          <span class="watch_person">观看人数:111</span>
          <a href="#">
            <img src="http://www.wodedy.com/uploads/allimg/201811/0b10647a17b3cbed.jpg" />
          </a>
            <span>你和我的倾城时光</span>
        </flexbox-item>
       <flexbox-item class="movie_small_title">
          <span class="watch_person">观看人数:111</span>
          <a href="#">
            <img src="http://www.wodedy.com/uploads/allimg/201811/0b10647a17b3cbed.jpg" />
          </a>
            <span>你和我的倾城时光</span>
        </flexbox-item>
      </flexbox>

        <flexbox>
        <flexbox-item class="movie_small_title">
          <span class="watch_person">观看人数:111</span>
          <a href="#">
            <img  src="http://www.wodedy.com/uploads/allimg/201811/0b10647a17b3cbed.jpg" />
          </a>
            <span>你和我的倾城时光</span>
        </flexbox-item>
        <flexbox-item class="movie_small_title">
          <span class="watch_person">观看人数:111</span>
          <a href="#">
            <img src="http://www.wodedy.com/uploads/allimg/201811/0b10647a17b3cbed.jpg" />
          </a>
            <span>你和我的倾城时光</span>
        </flexbox-item>
       <flexbox-item class="movie_small_title">
          <span class="watch_person">观看人数:111</span>
          <a href="#">
            <img src="http://www.wodedy.com/uploads/allimg/201811/0b10647a17b3cbed.jpg" />
          </a>
            <span>你和我的倾城时光</span>
        </flexbox-item>
      </flexbox>


    </div>
        </div>

        <div class="footer">

        </div>
    </div>
</template>
<script>
import { Tab, TabItem, Tabbar, TabbarItem, Group, Cell , Flexbox, FlexboxItem ,Grid, GridItem,  } from 'vux'
import search from '../utils/search'
export default {
    data(){
        return {

        }
    },
    components: {
    Tab,
    TabItem,
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem,
    search,
  },   
}
</script>
<style scoped>

</style>
