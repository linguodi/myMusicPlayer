<template>
    <div class="audioStation" v-height="50">
        <div class="date">
            <h2>今日优选</h2>
            <ul>
                <li>
                    <div class="img">
                <img src="http://p1.music.126.net/bZwIbbku1T-ZOpXmbTm8RQ==/109951163753491897.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp" alt="">
            </div>
            <div class="list">
                <dl>
                    <dt>一周新歌推荐</dt>
                    <dd>歌单：7</dd>
                    <dd>一个音乐的爱好者</dd>
                </dl>
            </div>
                </li>
                <li>
                    <div class="img">
                <img src="http://p1.music.126.net/sNUaBAMikRrIQg2Yw831EQ==/109951163674065074.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp" alt="">
            </div>
            <div class="list">
                <dl>
                    <dt>陪你过冬</dt>
                    <dd>节目：17</dd>
                    <dd>孤独的时候唱歌给你听</dd>
                </dl>
            </div>
                </li>
                <li>
                    <div class="img">
                <img src="https://p1.music.126.net/HK9nZoE0NeYFE0jwdT1EjQ==/109951163700235665.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp" alt="">
            </div>
            <div class="list">
                <dl>
                    <dt>最美国风</dt>
                    <dd>节目：7</dd>
                    <dd>先导五期</dd>
                </dl>
            </div>
                </li>
            </ul>
        </div>

        <div class="book">
            <h2>有书生<span>&gt</span></h2>
            <ul>
                <li>
                    <div class="img" style="background-image:url('../../../static/img/binwang.jpg')"><span>超级兵王</span></div>
                    <span>都市的逆袭之旅</span>
                </li>
                <li>
                    <div class="img" style="background-image:url('../../../static/img/minjiang.jpg')"><span>山野怪谈</span></div>
                    <span>行一生江湖，讲一段民间鬼事</span>
                </li>
                <li>
                    <div class="img" style="background-image:url('../../../static/img/daomubiji.jpg')"><span>盗墓笔记</span></div>
                    <span>盗墓小说的鼻祖</span>
                </li>
            </ul>
        </div>
        <div class="book" >
            <h2>知识技能<span>&gt</span></h2>
            <ul>
                <li>
                    <div class="img" style="background-image:url('../../../static/img/dili.jpg')"><span>cookie地理学</span></div>
                    <span>让你听见这个世界的声音</span>
                </li>
                <li>
                    <div class="img" style="background-image:url('../../../static/img/mingren1.jpg')"><span>一刻talks</span></div>
                    <span>汇聚全球名人的知识分享</span>
                </li>
                <li>
                    <div class="img" style="background-image:url('../../../static/img/mingren.jpg')"><span>围炉夜话</span></div>
                    <span>美食家带你品美食，说历史</span>
                </li>
            </ul>
        </div>
        <div class="book">
            <h2>人文历史<span>&gt</span></h2>
            <ul>
                <li>
                    <div class="img" style="background-image:url('../../../static/img/lishi_01.jpg')"><span>秦风</span></div>
                    <span>老师带你了解秦朝</span>
                </li>
                <li>
                    <div class="img" style="background-image:url('../../../static/img/lishi_02.jpg')"><span>小黑大历史</span></div>
                    <span>趣说历史百科，期待人生洒脱</span>
                </li>
                <li>
                    <div class="img" style="background-image:url('../../../static/img/lishi_03.jpg')"><span>一堂课</span></div>
                    <span>清华最有意义的一堂课</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang='stylus'>
    .audioStation{width:100%;background:#999;overflow-y: scroll;
        .date{background:#fff;padding:5px;overflow:hidden;
            h2{heitgh:40px;line-height:40px;font-size:16px;
            }
            ul{
                li{ overflow:hidden;margin-top:10px;position:relative;
                    .img{width:30%;float:left;border-radius:10px;
                    img{width:100%;display:block;}
                        }
                    .list{margin-left:10px;float:left;
                        dl{line-height:30px;position:relative;
                        dt{font-size:16px;color:#000;font-weight:bold;}
                        dd{color:#999;font-size:12px;}
                        }
                       
                    }
                }
            }
        }
        .book{width:100%;background:#fff;padding:10px 5px;
            h2{heitgh:40px;line-height:40px;font-size:16px;span{color:#666;margin-left:5px;font-size:20px;}}
            ul{
                overflow:hidden;
                li{float:left;width:30%;margin-right:3%;
                    .img{width:100%;float:left;background-size:100% 100%;height:120px;border-radius:5px;background-repeat: no-repeat;position:relative;
                    span{color:#fff;position:absolute;bottom:5px;left:5px;color:12px;}
                    }
                    span{font-size:12px;}
                }
            }
        }
    }
</style>
