<template>
    <div class="albumPage" v-if="player.isShowAlbum" v-height="0">
        <div class="header">
            <h3>歌单<p class="like">猜你喜欢</p>
            <span class="iconfont icon-houtui1" @click="hideShow"></span>
            <span class="iconfont icon-more-vert"></span>
            </h3>
            <div class="statInfo">
                <div class="left">
                    <img :src="player.album.albumbg" alt="">
                </div>
                <div class="right">
                   <p>{{player.album.albumTitle}}</p>
                   <div>
                       <img :src="player.album.albumbg" alt="">
                       <span>歌手:{{player.album.albumSinger}}</span>
                   </div>
                </div>
                 <div class="list">
                        <ul>
                            <li class="iconfont icon-addfile"></li>
                            <li class="iconfont icon-fenxiang1"></li>
                            <li class="iconfont icon-BAI-pinglun"></li>
                            <li class="iconfont icon-icon--"></li>
                        </ul>
                </div>
            </div>
        </div>
        <div class="albumList">
            <ul>
                <li 
                v-for="(item,index) in player.album.albumList" @click="playAudio(player.album.albumList,index)"
                :class="{cur:index==$store.state.audio.index&& albumIndex == $store.state.audio.albumIndex}"
                >
                    <span class="num">{{index+1}}</span>
                    <div>
                        <p>{{item.musicName}}</p>
                        <p>{{item.musicSinger}}</p>
                    </div>
                    <span class="iconfont icon-more-vert"></span>
                    <span class="iconfont icon-laba" v-show="index==$store.state.audio.index&& albumIndex == $store.state.audio.albumIndex"></span>
                    </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:["player"],
    methods:{
        hideShow(){
            this.$store.commit("hideShow", {isShowAlbum: false})
        },
        playAudio(itemList,index){
        // itemlist表示专辑列表的数组，index表示点击的是专辑列表里面的第几首歌
        this.$store.commit("playAudio",{
            isShowAudio: true,  //显示播放器页面
            album: itemList,	//设置专辑列表
            index: index,		//下标
            albumImg: this.player.album.albumImg,	//专辑作者头像
            playerImg: this.player.album.playerbg,	//播放器背景图
            //设置播放的第几张专辑 对应 0 1 2 3 4 方便切换歌曲
            albumIndex: this.albumIndex
        })
    }
    },
    computed: {
        albumIndex(){
            return this.$store.state.player.index //获取当前播放的专辑数
        },
    },
    
}
</script>
<style scoped lang='stylus'>
    .albumPage{ position: fixed;top: 0;left: 0;width: 100%;z-index: 1;background-color:#fff;height:100%;overflow-y: scroll;
        .header{height:320px;background-color:#666;
            h3{height:40px;color:#fff;font-size:18px;padding-left:10%;position:relative;padding-top:20px;
                .like{font-size:12px;opacity:0.8;}
                .iconfont{position:absolute;top:50%;}
                .icon-houtui1{left:2%;}
                .icon-more-vert{right:0%;}
            }
        }
        .statInfo{height:200px;margin-top:40px;padding:4%;
           .left{float:left;width:40%;
                img{width:100%;}
           }
           .right{float:left;width:50%;margin-left:20px;
          div{  overflow:hidden;
               img{width:20%;height:20%;border-radius:50%;margin-top:10px;float:left}
               span{float:left;line-height:50px;margin-left:10px;}
          }
           }
           .list{
               ul{overflow:hidden;width:100%;
               li{float:left;font-size:40px;text-align:center;width:25%;margin-top:20px;}
               }
           }
        }
        .albumList{width:100%;background:#fff;
            ul{
                padding:0% 4%;
                li{height:50px;margin-top:20px;
                    .num{float:left;height:50px;line-height:50px;text-align:center;width:30px;}
                    div{float:left;
                    p{height:25px;}
                    }
                    .iconfont{float:right;font-size:28px;height:50px;line-height:50px;}
                    .icon-more-vert{margin-top:-3px;}
                }
                .cur{color:red; }
            }
        }

    }
</style>

