<template>
<div>
    <flexbox>
        <flexbox-item>
            <div class="movie_player">
                <moviePlayer />
            </div>
        </flexbox-item>
    </flexbox>

    <flexbox>
        <flexbox-item>
            <div class="chat">
            </div>
            <div>
              <input type="text" x-webkit-speech />
            </div>
        </flexbox-item>
    </flexbox>
    <flexbox>
        <flexbox-item>
            <footerOption />
        </flexbox-item>
    </flexbox>
</div>
</template>
<script>
import { Tabbar, TabbarItem, Group, Cell , Flexbox, FlexboxItem ,Grid, GridItem, Search, Swiper, SwiperItem } from 'vux'
import moviePlayer from '../utils/moviePlayer'
import footerOption from '../utils/footer_option'

export default {
    components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem,
    Search,
    Swiper,
    SwiperItem,
    moviePlayer,
    footerOption
  },
}
</script>
<style scoped>
.movie_player{
}
.chat{
    width: 100%;
}
</style>
