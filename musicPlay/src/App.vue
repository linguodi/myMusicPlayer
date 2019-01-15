<template>
   <div id="app">
        <div class="header">
            <span class="iconfont icon-caidan caidan" @click="isShowMySelf"></span>
            <nav>
                <ul>
                    <li class="iconfont" v-for="item in tabNav" :class="[item.fontClass,{cur:$route.name==item.fontClass},item.bg]" @click='goUrl(item.url)'></li>
                </ul>
            </nav>
            <span class="iconfont icon-zhuanjiguangpan"  @click="played"></span>
        </div>
        <transition name="animation">
            <router-view></router-view>
        </transition>
        <transition name="animation">
            <album :player="player"></album>
        </transition>
        <transition name="animation">
            <audioPlayer :audio="audio" :player="player"></audioPlayer>
        </transition>
        <transition name="animation">
            <mySelf :mySelf="mySelf"></mySelf>
        </transition>
    </div>
</template>
<script>
import album from './components/album'
import audioPlayer from './components/audioplayer'
import mySelf from './components/mySelf'
export default {
    data(){
        return {
            tabNav:[
                {url:'index',fontClass:'icon-music'},
                {url:'radioMUsic',fontClass:'icon-wangyiyunyinlezizhi-copy'},
                {url:'find',fontClass:'icon-diantai',bg:"change"}
            ]
        }
    },
    methods:{
        goUrl(url){
            this.$router.push({path:url})
        },
        played(){
             return this.$store.commit("hideShowAudio",{
                 isShowAudio:true,
                 })
        },
        isShowMySelf(){
            return this.$store.commit("isShowMySelf",{isShowMySelf:true})
        }
    },
    computed: {
        player(){
            return this.$store.state.player
        },
        audio(){
            return this.$store.state.audio
        },
        mySelf(){
            return this.$store.state.mySelf
        }
    },
    components:{
        album,
        audioPlayer,
        mySelf
    }
}
</script>
<style scoped lang='stylus' type='text/css'>
    #app{width:100%;height: 100%;overflow: hidden;}
    .header{
       width:100%;line-height:50px;color:#fff;background:#C20C0C;position:relative;
       span{height:50px;width:20%;font-size:26px;position:absolute;top:0px;text-align:center;}
       .caidan{left:0px;}
       .icon-zhuanjiguangpan{right:0px;}
       nav{
           ul{
               overflow:hidden;text-align:center;margin:0 auto;width:60%;
               li{width:33.33%;float:left;font-size:26px;}
               li.cur{background: #9B0909;}
           }
       }
        }
</style>

