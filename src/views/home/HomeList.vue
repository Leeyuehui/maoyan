<template>
    <div class="content">
      <ul class="page">
        <div v-if="movies" class="inner">
          <li class="cont-li"  v-for="item in movies.movieList" :key="item.id">
              <div class="img-box">
                  <img :src="item.img | imgFilter" alt="">
              </div>
              <div class="cont-info">
                   <p>{{ item.nm }}</p>
                  <span class="pingfen">{{ item.sc }}</span>
                  <span>{{ item.star }}</span>
                  <span>{{ item.showInfo }}</span>
              </div>
              <div class="btn" >
                 <p :class="[ item.globalReleased  ?  'normal' : 'pre' ]"><span>{{ item.globalReleased  &&  '购票' || '预购'  }}</span></p> 
              </div>
          </li>
        </div>  
        <Loading v-if="loadingFlag"></Loading>
      </ul>
      
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import _ from 'loadsh'
import { mapActions ,mapState} from 'vuex'
import {Toast} from 'mint-ui'
export default {
    props: [ 'movies' ],
    methods:{
        ...mapActions(['getComingMovies','showLoading','hideLoading'])
    },
    computed: {
        ...mapState({
            loadingFlag: state => state.home.loadingFlag
        })
    },
    mounted(){
        let count = 0
        const scroll = new BScroll('.container',{
            pullUpLoad: {
                threshold: 40 //距离底部40是开始执行加载
            }
        })
        // better-scroll中 pullingUp 上拉加载
        scroll.on('pullingUp',() =>{
            const movieIds = this.movies.movieIds.slice(12)
            const ids = _.chunk(movieIds , 10)

            if( count == ids.length ){
                scroll.finishPullUp()
                Toast({
                    message: '到底了...',
                    position: 'bottom',
                    duration: 1000
                    });

                return
            }

            if( count < ids.length ){
                //数据请求
              
                this.showLoading()
                this.getComingMovies( ids[count].join(','))
               
            }
            scroll.finishPullUp()
            count++
        })
    }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/theme.styl';
.content
    flex 1
    overflow hidden
    display flex
    // height 100%
.cont-li
    display flex
    justify-content space-around
    align-items center
    padding .1rem
    .img-box
        width .7rem
        height .9rem
        flex 70
        img 
            display block
            width 100%
            height 100%
    .cont-info
        display flex
        flex-direction column
        flex 220
        padding .12rem
        p
         font-size .17rem
         color #777
         margin 0
        span 
         font-size .13rem
         color #777
        .pingfen
            color #faaf00
            font-weight bold
    .btn
        font-size .12rem
        align-self center
        text-align center
        line-height .27rem
        flex 85
       
        p
          width .47rem
          height .27rem
          border-radius .06rem
          margin 0 auto
         
      
         
.normal
    background-color $theme_color 
.pre
    background lightblue 
        
</style>