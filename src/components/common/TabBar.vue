<template>
   <footer>
       <ul>
           <router-link tag="li" v-for  = "item in items" :key="item.id" active-class="active" :to="item.path">
               <i class="fas" :class="[item.icon]"></i>
              <span> {{ item.text }}</span>
           </router-link>
       </ul>
   </footer>
</template>

<script>
export default {
    data () {
        return {
            items: [
                {
                    id: 1,
                    text: '电影',
                    path: '/home',
                    icon: 'fa-angry'
                },
                {
                    id: 2,
                    text: '影院',
                    path:'/cinema',
                    icon:'fa-film'
                },
                {
                    id: 3,
                    text: '我的',
                    path: 'mine',
                    icon: 'fa-user'
                }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/css/theme.styl';
@import '../../assets/css/border.styl';
    footer 
        height .48rem
        border 1px 0 0 0,#ccc
        ul
            list-style none
            height 100%
            display flex
            justify-content space-around
            padding-top .04rem
            li
                display flex
                flex-direction column
                text-align center
                align-items center
                &.active
                    i
                        color $theme_color
                    span 
                        color $theme_color
                i 
                 font-size .2rem
                 margin-bottom .04rem
                 color #696969
                span 
                 font-size .12rem
                 color  #696969
</style>