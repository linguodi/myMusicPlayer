// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import directive from "./plugins/directives.js"
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(directive)
Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)
const store = new Vuex.Store({
  state:{
    mapList:[],
    player:{
      isShowAlbum: false,//是否显示页面
      album: [],//专辑列表
      index: null//专辑的index
    },
    audio: {
      isShowAudio: false,
      album: [],		//播放数组
      index: null,	//第几首歌
      albumbg: null,	//专辑的图片 在热歌里面没用
      playerbg: null, //播放器的背景图
      // 专辑的index ,
      // 如果 == null表示播放的单曲
      // 如果 == 1 表示第一张专辑
      // 如果 == 2 表示第二张专辑
      albumIndex: null
    },
    mySelf:{
      isShowMySelf:false,
      isShowUser:true,
      isShowUserInfo:false
    }
  },
  mutations:{
    getAll(state,payload){
      state.mapList = payload.mapList
    },
    showAlbum(state,payload){
      //控制显示专辑页面
      state.player.isShowAlbum = payload.isShowAlbum
      // 给专辑页面传入整张专辑
      state.player.album = payload.album
      //专辑下标
      state.player.index = payload.index
    },
    hideShow(state,payload){
      state.player.isShowAlbum = payload.isShowAlbum
    },
    playAudio(state,payload){
      // 显示播放器
      state.audio.isShowAudio = payload.isShowAudio
      // 控制 播放器里面的 列表 有可能是 单曲 有可能是 专辑
      state.audio.album = payload.album
      // 点击显示播放器的时候 设置 当前点击的是第几首歌曲
      state.audio.index = payload.index
      // 专辑或者单曲 作者的头像
      state.audio.albumImg = payload.albumImg
      // 播放器背景图
      state.audio.playerbg = payload.playerImg
      // 专辑的index ,
      // 如果 == null 表示播放的单曲
      // 如果 == 1 表示第一张专辑
      // 如果 == 2 表示第二张专辑
      state.audio.albumIndex = payload.albumIndex

    },
    hideShowAudio(state,payload){
      state.audio.isShowAudio = payload.isShowAudio
    },
    changeMusic(state,payload){
      state.audio.index = payload.index
      state.audio.albumImg = payload.albumbg
      state.audio.playerbg = payload.playerbg
    },
    isShowMySelf(state,payload){
      state.mySelf.isShowMySelf = payload.isShowMySelf
    },
    isShowUser(state,payload){
      state.mySelf.isShowUser = payload.isShowUser
      state.mySelf.isShowUserInfo = payload.isShowUserInfo
    }
    
  },
  actions:{
    getAll({commit},payload){
      Vue.axios.get('../static/data.json').then(res=>{
        commit('getAll', res.data)
      })
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
