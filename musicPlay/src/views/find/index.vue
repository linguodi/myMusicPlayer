<template>
  <div class="find" >
    <!-- 头部 -->
    <header>
      <nav>
          <ul>
            <li v-for="(item,index) in findTav" :class="{cur:index==0}">
              {{item.title}}
            </li>
          </ul>
      </nav>
  </header>
  <!-- 列表 -->
  <div class="audio" v-height="50">
    <div class="date">
      <h2>2018好听的专辑</h2>
      <ul>
        <li>
          <div class="img">
            <img
              src="../../../static/img/2018_01.jpg"
            >
          </div>
          <div class="list">
            <dl>
              <dt>2018·落日孤单 </dt>
              <dd>曲数：50</dd>
              <dd>by 鮭魚先森 </dd>
            </dl>
          </div>
        </li>
        <li>
          <div class="img">
            <img
              src="../../../static/img/2018_02.jpg"
              alt
            >
          </div>
          <div class="list">
            <dl>
              <dt>《凛冬集》· 清辉素</dt>
              <dd>曲数：22</dd>
              <dd>by 讛七</dd>
            </dl>
          </div>
        </li>
        <li>
          <div class="img">
            <img
              src="../../../static/img/2018_03.jpg"
              alt
            >
          </div>
          <div class="list">
            <dl>
              <dt>年轻之歌</dt>
              <dd>曲数：20</dd>
              <dd>by 原创君</dd>
            </dl>
          </div>
        </li>
        <li>
          <div class="img">
            <img
              src="../../../static/img/2018_04.jpg"
              alt
            >
          </div>
          <div class="list">
            <dl>
              <dt>『十年一梦』</dt>
              <dd>曲数：10</dd>
              <dd>by 佐仓小小千代</dd>
            </dl>
          </div>
        </li>
        <li>
          <div class="img">
            <img
              src="../../../static/img/2018_05.jpg"
              alt
            >
          </div>
          <div class="list">
            <dl>
              <dt>『精选』 欢快可爱</dt>
              <dd>曲数：38</dd>
              <dd>by 天生黑夜兄</dd>
            </dl>
          </div>
        </li>
        <li>
          <div class="img">
            <img
              src="../../../static/img/2018_06.jpg"
              alt
            >
          </div>
          <div class="list">
            <dl>
              <dt>行走的CD </dt>
              <dd>曲数：21</dd>
              <dd>by KillBunny</dd>
            </dl>
          </div>
        </li>
        <li>
          <div class="img">
            <img
              src="../../../static/img/2018_07.jpg"
              alt
            >
          </div>
          <div class="list">
            <dl>
              <dt>综艺 | 奇妙的食光B</dt>
              <dd>曲数：8</dd>
              <dd>by PlusFeng</dd>
            </dl>
          </div>
        </li>
        <li>
          <div class="img">
            <img
              src="../../../static/img/2018_08.jpg"
              alt
            >
          </div>
          <div class="list">
            <dl>
              <dt>高 级 感 vlog 纯音乐</dt>
              <dd>曲数：16</dd>
              <dd>by 一勺海盐</dd>
            </dl>
          </div>
        </li>
        <li>
          <div class="img">
            <img
              src="../../../static/img/2018_09.jpg"
              alt
            >
          </div>
          <div class="list">
            <dl>
              <dt>Taylor Swift霉霉</dt>
              <dd>曲数：19</dd>
              <dd>by Cosette-</dd>
            </dl>
          </div>
        </li>
        <li>
          <div class="img">
            <img
              src="../../../static/img/2018_10.jpg"
              alt
            >
          </div>
          <div class="list">
            <dl>
              <dt>千山暮雪，只影向谁去</dt>
              <dd>曲数：28</dd>
              <dd>by 小铁Joe</dd>
            </dl>
          </div>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      findTav:[
        {title:"推荐",url:"find/music",show:true,},
        {title:"现场",url:"find/scene",show:false,},
        {title:"朋友",url:"find/friend",show:false}
      ],
    }
  }
}
</script>
<style scoped lang='stylus'>
  .find{
    nav{
      width:100%;background:#C20C0C;
      ul{
               text-align:center;margin:0 auto;width:60%;height:40px;line-height:40px;color:#fff;
               li{width:33.33%;float:left;font-size:20px;}
               li.cur{font-weight:blod;color:#000;}
        }
       }
      .audio{width:100%;background:#999;  overflow-y: scroll;
        .date{padding:5px;overflow:hidden;
            h2{heitgh:40px;line-height:40px;font-size:16px;background:#fff;
            }
            ul{
                li{ overflow:hidden;position:relative;margin-bottom:2px;background:#fff;
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
}
  }
</style>
