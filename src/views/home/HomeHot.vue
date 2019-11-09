<template>
    <div class="container">
        <HomeList :movies="movies"></HomeList>
    </div>
</template>

<script>
import HomeList from './HomeList'
import { mapState, mapActions} from 'vuex'

export default {
    components:{
        HomeList
    },
    mounted() {
        this.getMovies()
    },
    methods: {
        ...mapActions(['getMovies'])
    },
    computed: {
        ...mapState({
            movies: state => state.home.movies
        })
        // movies(){
        //     return this.$store.state.home.movies
        // }
    }
}
</script>

<style lang="stylus" scoped>
.container
    flex 1
    overflow hidden
    height 100%
</style>