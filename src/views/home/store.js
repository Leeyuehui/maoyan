import axios from 'axios'
const GET_MOVIES = 'GET_MOVIES'
const GET_COMMING = 'GET_COMMING'
const SHOW_LOADING = 'SHOW_LOADING'
const HIDE_LOADING = 'HIDE_LOADING'
export default {
    state:{
        movies: null,
        loadingFlag: false 
    },
    actions: {
        // 数据请求
        getMovies( { commit }){
            axios({
                url: '/ajax/movieOnInfoList',
                params: {
                    token: ''
                }
            }).then( res => {
                commit({
                    type: GET_MOVIES,
                    payload: res.data
                })
            })
            .catch( err => console.log(err))
        },
        getComingMovies( { commit },movieIds ){
            axios({
                url:'/ajax/moreComingList',
                params: {
                    token: '',
                    movieIds
               }
            }).then( res => {
                commit({
                    type: GET_COMMING,
                    payload: res.data
                })
            }).catch( err => {
                console.log(err)
            })
        },
        showLoading ( { commit } ){
            commit({
                type: SHOW_LOADING
            })
        },
        hideLoading ( { commit } ){
            commit({
                type: HIDE_LOADING
            })
        }
    },
    mutations :{
        GET_MOVIES( state,action ){
            state.movies = action.payload
        },
        GET_COMMING( state, action ){
            state.movies.movieList.push( ...action.payload.coming) 
        },
        SHOW_LOADING( state){
            state.loadingFlag = true
        },
        HIDE_LOADING( state ){
            state.loadingFlag = false
        }
    }
}