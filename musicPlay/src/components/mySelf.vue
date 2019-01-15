<template>
    <div>
        <div class="mySelf" v-if="mySelf.isShowMySelf">
        <div class="conter"  v-height="0">
            <div class="sign" v-if="mySelf.isShowUser">
               <div>
                    <p>尽享高品质音乐</p>
                    <p class="radiusBorder" @click="login">立即登录</p>
               </div>
            </div>
            <div class="sign" v-if="mySelf.isShowUserInfo">
               <div>
                    <p>欢迎你来到</p>
                    <p class="radiusBorder">dzs</p>
               </div>
            </div>
            <!-- 推荐列表 -->
            <div class="MyList">
                <ul>
                    <li class="iconfont icon-wode"><span>我的消息</span></li>
                    <li class="iconfont icon-anquan"><span>会员中心</span></li>
                    <li class="iconfont icon-dianpu"><span>商城</span></li>
                    <li class="iconfont icon-xingji"><span>游戏推荐</span></li>
                    <li class="iconfont icon-kefu"><span>在线听歌</span></li>
                </ul>
            </div>
            <!-- 消息列表 -->
            <div class="MyListInfo">
                <ul>
                    <li class="iconfont icon-wode"><span>我的消息</span></li>
                    <li class="iconfont icon-anquan"><span>会员中心</span></li>
                </ul>
            </div>
            <!-- 设置列表 -->
             <div class="MyList">
                <ul>
                    <li class="iconfont icon-huanfu"><span>个性皮肤</span></li>
                    <li class="iconfont icon-Voice"><span>听歌识曲</span></li>
                    <li class="iconfont icon-dingshi_l"><span>定时播放</span></li>
                    <li class="iconfont icon-richscan_icon"><span>扫一扫</span></li>
                    <li class="iconfont icon-noun__cc"><span>音乐闹钟</span></li>
                    <li class="iconfont icon-cheliang"><span>驾驶模式</span></li>
                    <li class="iconfont icon-qinzi"><span>亲子频道</span></li>
                    <li class="iconfont icon-binggun-"><span>小冰电台</span></li>
                </ul>
            </div>
            <!--   设置 -->
            <div class="setUp">
                <ul>
                    <li class="iconfont icon-yejian"><span>夜间模式</span></li>
                    <li class="iconfont icon-shezhi"><span>设置</span></li>
                    <li class="iconfont icon-icon" @click="hideShow"><span>关闭</span></li>
                </ul>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    props:["mySelf"],
    methods:{
        login(){
        	this.$router.push({path:"login"})
             return this.$store.commit("isShowMySelf",{isShowMySelf:false})
        },
        hideShow(){
        	return this.$store.commit("isShowMySelf",{isShowMySelf:false})
        }
    }
}
</script>
<style scoped lang='stylus'>
    .iconfont{transition:0.8s;}
    .iconfont:hover{background-color:#999;}
    .mySelf{
        width:100%;position:fixed;top:0px;left:0px;height:100%;z-index:2;overflow-y: scroll;background:rgba(0,0,0,.5);
        .conter{z-index:3;width:80%;background-color:#999;opacity:1;
            .sign{height:150px;background-image:url("../../static/img/strats.jpg");width:100%;color:#fff;position:relative;
                div{position: absolute ;left:0;top:0;bottom:0;right:0px;margin:auto auto;text-align:center;height:44px;
                .radiusBorder{border:1px solid #fff;width:40%;height:30px;line-height:30px;text-aline:center;border-radius:20px;margin:10px auto;}
                }
        }
        .MyList{
            background-color:#fff;
            ul{
                li{font-size:16px;padding:12px;
                span{margin-left:10px;}
                }
            }
        }
        .MyListInfo{
            margin:5px 0;background-color:#fff;
            ul{
                li{font-size:16px;padding:12px;
                span{margin-left:10px;}
                }
            }
        }
        .setUp{position: fixed;;bottom:0;left:0px;border-top:1px solid #333;background-color:#fff;width:80%;
            ul{overflow:hidden;margin:0 auto;
                li{float:left;font-size:12x;text-align:center;line-height:40px;height:40px;width:33.33%;
                    span{margin-left:10px;}
        }
        }
        }
        }
    }
</style>
