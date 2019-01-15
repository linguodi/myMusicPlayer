<template>
        <div class="showAudio" v-show="audio.isShowAudio" :style="{background:`#14277a  url(${audio.playerbg}) 0 0 /100% 100%`}">
        <!-- 头部 -->
            <div class="header">
                <h3>{{typeof audio.albumIndex=='number' ? player.album.albumTitle: '歌名'}}<p class="like">{{typeof audio.index=='number' ? audio.album[audio.index].musicName : '播放器'}}</p>
                <span class="iconfont icon-houtui1" @click="goBack" ></span>
                <span class="iconfont icon-more-vert"></span>
                </h3>
                <span v-if="typeof audio.index == 'number'">
        	        <audio :src="audio.album[audio.index].musicUrl" autoplay @timeupdate="play" class="audio">
                    </audio>
                </span>         
            </div>
            <!-- 光盘 -->
            <div class="content" v-if="!isShowLyric" @click="showLyric">
                <div class="cd">
                    <img src="../../static/img/cd.png">
                    <div class="singerbg" :class="{cur:isPlay}">
                        <img :src="audio.albumImg">
                    </div>
                </div>
                <div class="swith" :class="{cur:isPlay}">
                    <img src="../../static/img/swith.png">
                </div>
            </div>
            <!-- 歌词盒子 -->
            <div class="lyric" v-if="isShowLyric" @click="hideShow" v-height="280">
                <ul>
                     <!-- index+1 > lyric.length-1 ? lyric.length-1 : index + 1-->
                <li v-for="(item,index) in lyric"
                    :class="{cur:currentTime > lyric[index][0] && currentTime + (lyric[index][0] - lyric[index+1 > lyric.length-1 ? lyric.length-1 : index + 1][0]) < lyric[index][0]}"
                >
                    <span class="animationLyric_origin">
                        {{item[1]}}
                        <!-- {{index <= 0 ? 0 : index+1 > lyric.length-1 ? lyric.length-1 : index + 1}} -->
                        <span class="animationLyric_current"
                            :style="[
                                {'animation-play-state':isPlay ? 'running':'paused'},
                                {'animation-duration':lyric[index+1 > lyric.length-1 ? lyric.length-1 : index + 1][0] - lyric[index][0] + 's'}
                            ]">
                            {{item[1]}}
                        </span>
                    </span>
                </li>
                </ul>
            </div>
            <!-- 控件列表 -->
            <div class="playList">
                <ul>
                  <li class="iconfont icon-xin1"></li>
                  <li class="iconfont icon-icon--"></li>
                  <li class="iconfont icon-yuleyinleshoucang"></li>
                  <li class="iconfont icon-BAI-pinglun"></li>
                  <li class="iconfont icon-more-vert"></li>
                </ul>
                <!-- 播放进度条 -->
                <div class="progressBar">
                    <p class="start">{{currentTime|maxTime}}</p>
                    <p class="range">
                        <span class="duration" @click="gotoTime($event)">
                        <span class="currentTime" :style="{width:currentTime/duration*100+'%'}"></span>
                        </span>
                    </p>
                    <p class="end">{{duration|maxTime}}</p>
                </div>
                <!-- 切换歌曲进度条 -->
                 <div class="controller">
                        <p 
                        class="playmodebtn iconfont"
                        :class="[
                                    {'icon-xunhuan':playState === 'all'},
                                    {'icon-singlecycle':playState === 'once'},
                                    {'icon-bofangye-caozuolan-suijibofang':playState === 'random'},
                                ]"
                        @click="changePlaystate"
                        >
                        </p>
                            <ul>
                                <li class="iconfont icon-previous" @click="goPrev()"></li>
                                <li 
                                 class="iconfont" :class="[isPlay == true ? 'icon-pause-20':'icon-bofang']" @click="pausedAndPlay">
                                </li>
                                <li class="iconfont icon-next" @click="goNext"></li>
                            </ul>
                        <p class="playlistbtn iconfont icon-caidan"  @click="isShowPlayListBtn"></p>
                 </div>
            </div>
            <!-- 弹出列表 -->
            <div class="playlist" :class="{cur : isShowPlayList}" v-if="isShowPlayList">
                <ul>
                    <li v-for="(item, index) in audio.album"  :class="{cur:index==$store.state.audio.index}" @click="playList(index)">
                        <span class="iconfont icon-laba"></span>
                        <span>{{item.musicName}}</span>
                    </li>
                </ul>
                <footer @click="isShowPlayListBtn">
                    <span class="iconfont icon-guanbi"></span>
                </footer>
            </div>
        </div>
</template>
<script>
export default {
    props:["audio" ,"player"],
    data(){
        return{
            isShowPlayList:false,
            duration: 0,
            currentTime: 0,
            isPlay:true,		//因为audio标签有autoplay所以默认是true（加cur类）
            isAddClass:true, 	//需要一个量去控制什么时候 加 类
            playState:'all',	    //播放模式 all  once  random
            isShowLyric:false,
            lyric:[]
        }
    },
    computed:{
            playerIndex(){
                return this.audio.index;
            }
    },
    filters: {
        maxTime(s) {
            var t;
            if (s > -1) {
                var min = Math.floor(s / 60) % 60;
                var sec = s % 60;
                if (min < 10) { t += "0"; }
                t = min + ":";
                if (sec < 10) { t += "0"; }
                t += sec | 0;
            }
            return t;
        }
    },
    methods:{
        goBack(){
            return this.$store.commit("hideShowAudio",{isShowAudio:false})
        },
        isShowPlayListBtn(){
            this.isShowPlayList = !this.isShowPlayList
        },
        play(){
            // 每时每刻都在执行的函数
            this.duration = $("audio")[0].duration;//获取总时长
            this.currentTime = $("audio")[0].currentTime;//换取当前歌曲播放的位置时长
            //判断歌曲是否播放，如果是播放那么点击就暂停，播放状态加类。
            if($("audio")[0].paused&&this.isAddClass){
                this.isPlay = false;
                this.isAddClass = false;
            }else{
                this.isPlay = true;
            }
            // 最后的逻辑判断
            if($('.audio')[0].ended){ //ended返回当前音频是否已结束
            	//如果本手歌曲播放完毕时，会返回true进到这里
            	if(this.playState === 'all'){ //顺序播放
            		if(this.audio.index === this.audio.album.length - 1){
            			this.changeMusic(0);
            		}else{
            			this.changeMusic(this.audio.index + 1);
            		}
            	}else if(this.playState === 'once'){ //单曲循环播放
            		this.changeMusic(this.audio.index);
            		$('.audio')[0].load()
            	}else if(this.playState === 'random'){ //随机播放
            		let index = ~~(Math.random() * this.audio.album.length);
            		this.changeMusic(index);
            	}
            }
            //歌词的滚动
            for(var i = 0; i < this.lyric.length - 1; i++){
                if(this.currentTime > this.lyric[i][0]){
                    $(".lyric ul").css({
                        "top": $('.lyric').height() / 2 - 26 * (i + 1)
                    });
                }
            }
        },
        gotoTime(event){
            //点击跳跃播放时间
        	$('.audio')[0].currentTime = (event.offsetX / $('.duration').width()) * $('.audio')[0].duration
        },
        pausedAndPlay(){
            //暂停和播放
            this.isPlay = !this.isPlay
            if(this.isPlay != true){
                $("audio")[0].pause();
                this.isAddClass = true;
            }else{
                $("audio")[0].play()
            }

        },
        changePlaystate(){
            if(this.playState=="all"){
                this.playState="random"
            }else if(this.playState=="random"){
                this.playState = "once"
            }else if(this.playState == "once"){
                this.playState = "all"
            }
        },
        goNext(){
            //点击下一首，只要不是随机播放，点击的时候一律切换到下一首歌曲
            if(this.playState=="random"){
                let index = ~~(Math.random()*this.audio.album.length)
                this.changeMusic(index)
            }else{
                if(this.audio.index>=this.audio.album.length-1){
                    this.changeMusic(0)
                }else{
                    this.changeMusic(this.audio.index+1)
                }
            }
        },
        goPrev(index){
             //点击上一首，点击的时候一律切换到上一首歌曲,无论是哪一种播放模式都会回到上一首歌，第一首歌直接去到最后一首歌
            if(this.playState=="random"){
                let index = ~~(Math.random()*this.audio.album.length)
                this.changeMusic(index)
            }else{
                if(this.audio.index==0){
                    this.changeMusic(this.audio.album.length-1)
                }else{
                    this.changeMusic(this.audio.index-1)
                }
            }
        },
        changeMusic(index){
            //判断吗是单曲还是专辑
            if(this.audio.albumIndex==null){
                this.$store.commit("changeMusic",{//单曲结构
                    index:index,
	        		playerbg:this.audio.album[index].playerbg,
	        		albumbg:this.audio.album[index].singerImg
                })
            }else if( typeof this.audio.albumIndex=="number"){
                this.$store.commit("changeMusic",{//专辑的数据结构
                   	index:index,
	        		playerbg:this.audio.playerbg,
	        		albumbg:this.audio.albumImg
                })
            }
        },
        playList(index){
            this.changeMusic(index)
        },
        hideShow(){
            return  this.isShowLyric = !this.isShowLyric
        },
        showLyric(){
            // 显示歌词，同时得到歌词
            this.isShowLyric = true;
            this.isShowLyric = true;
            this.$http.get(this.audio.album[this.audio.index].musicLyric).then(res =>{
                this.lyric = this.parseLyric(res.data);
            });
        },
        parseLyric(lyric){
            //将歌词放在数组里面
            var arr = [];
            //将歌词换行加入数组
            var lines = lyric.split(/\n/)
            //得到时间
            var getLyricTime =/\[\d{2}:\d{2}.\d{2}\]/g;
            // 使用while语句，得到有时间的歌词 
            while (!getLyricTime.test(lines[0])) {
                lines = lines.splice(1);
            }
            // 如果空行没有时间会出问题，所以去掉最后的空行
            if (lines[lines.length - 1].length === 0){
                lines.pop()
            }
             lines.forEach(item=>{
                // 得到 时间 和 歌词的分界点
                var index = item.indexOf(']')
                // 字符串方法截取，得到时间  
                var time = item.substr(1, index - 1);
                // 将这样的时间 01:05.08 转换成 ['01','05.08']
                var timeArr = time.split(':');
                // 得到歌词
                var geci = item.substr(index + 1)
                // ["120","爱上对方就哭了"] 将处理过的歌词,放进 arr 里面
                arr.push([timeArr[0] * 60 + parseFloat(timeArr[1]), geci])
            });
            return arr
        }
    },
    watch:{
        // 监听歌词的变化
        playerIndex() {
            this.$http.get(this.audio.album[this.audio.index].musicLyric).then(res=>{
                this.lyric = this.parseLyric(res.data);
            });
        },
    }
}
</script>
<style scoped lang='stylus'>
    .showAudio{ position: fixed;top: 0;left: 0;width: 100%;z-index: 3;background-color:#fff;height:100%;
        .header{
            h3{height:40px;color:#fff;font-size:18px;padding-left:10%;position:relative;padding-top:10px;border-bottom:1px solid #fff;
                .like{font-size:12px;opacity:0.8;}
                .iconfont{position:absolute;top:50%;}
                .icon-houtui1{left:2%;}
                .icon-more-vert{right:0%;}
            }
        }
        .content{
        padding:30px 0px;position: relative;overflow: hidden;
        .cd{
            width: 80%;margin:0 auto;position: relative;
            img{width: 100%;display: block;}
            .singerbg{
                width: 60%;border-radius:50%;overflow: hidden;
                position: absolute;top:50%;left:50%;transform:translate(-50%,-50%);
                transition:all 1s;
                animation:rotate 8s linear infinite;
                animation-play-state:paused;
            }
            .singerbg.cur{animation-play-state:running;}
            @keyframes rotate{
                from{transform:translate(-50%, -50%) rotate(0deg);}
                to{transform:translate(-50%, -50%) rotate(360deg);}
            }
        }
        .swith{
            width:110px;height: 165px;position: absolute;top:-20px;left:52%;
            transform:translateX(-50%) rotate(-25deg);
            transform-origin:15px 15px;transition:all 0.8s;
            img{width: 100%;display: block;}
        }
        .swith.cur{transform:translateX(-50%) rotate(0deg);}
    }
       .lyric{overflow: hidden;padding:30px 0;
        ul{ position: relative;transition: all 0.3s;
            li {
                text-align:center;height:26px;line-height:26px;
                span.animationLyric_origin {
                    position:relative;color:#fff;height:26px;
                    line-height:26px;display: inline-block;
                    span.animationLyric_current {
                        position:absolute;top:0;left:0;
                        overflow:hidden;white-space:nowrap;line-height:26px;
                        width:0%;height:26px;animation-play-state: paused;color:red;
                    }
                }
            }
            li.cur{
                span.animationLyric_current {
                    animation-name: lyricdonghua; color: red;
                    animation-timing-function: linear;
                    @keyframes lyricdonghua {
                        from {width: 0%;}
                        to {width: 100%;}
                    }
                }
            }
        }
       }
        .playList{position:relative;
            ul{width:100%;height:30px;overflow:hidden;
                li{float:left;text-align:center;line-height:30px;font-size:30px;color:#fff;width:20%;}
        }
        .progressBar{
            overflow:hidden;padding:12px 3.2%;font-size:14px;color:rgba(255,255,255,0.6);
            p{float: left;}
            p.start{width:11%;height:40px;line-height:40px;text-align:right;}
            p.end{width: 11%;height: 40px;line-height:40px;text-align: left;}
            p.range{width:70%;padding:0 3%;margin:19px auto;
                span.duration{
                    width:100%;height:2px;display:block;
                    background:rgba(255,255,255,0.5); position: relative;
                    span.currentTime{
                        width:10%; height:2px;display: block;
                        background:#c20c0c;position:absolute;top:0;left: 0;
                    }
                }
            }
        }
        .controller{
            position:relative;text-align:center;width:100%;line-height:60px;
            height:60px;color:rgba(255,255,255,0.6);
            p{position: absolute;top:0;font-size:30px;}
            p.playmodebtn{left:3.2%;}
            p.playlistbtn{right:3.2%;}
            ul{width:68%;margin:0 auto;height:60px;
                li{width:33.33%;float:left;font-size: 40px;height:60px;line-height:60px;}
                li.icon-bofang,li.icon-pause-20{font-size: 52px;}
            }
        }
        }
        .playlist.cur{bottom: 0;z-index: 2;}
        .playlist{
            position:absolute;width:100%;height:300px;bottom:0px;left:0px;
            background:#fff;transition: all 0.8s ease 0s;
            ul{height:260px;overflow-y: scroll;
                li{overflow: hidden;color:#000;width:100%;font-size:20px;
                    span{float:left;line-height:50px;height:50px;}
                    span.icon-laba{width:50px;text-align:center;font-size:28px;}
                }
                li.cur{color:#c20c0c;}
            }
             footer{
                position:absolute;bottom:0px;width:100%;height:50px;text-align:center;
                span{
                    display:block;height:50px;line-height:50px;font-size: 28px;
                }
            }
        }
    }
   
</style>

