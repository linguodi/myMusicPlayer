<template>
  <div class="index" v-height="50">
    <VuiSwiperX :swiperArr="swiperArr"></VuiSwiperX>
    <div class="album">
      <h3>热歌专辑</h3>
      <ul>
        <li v-for="(item,index) in album" @click="showAlbum(item, index)">
          <img :src="item.albumbg">
          <p>{{item.albumTitle}}</p>
        </li>
      </ul>
    </div>
    <!-- 最新音乐 -->
    <div class="recommend">
      <h3>单曲循环</h3>
      <ul>
        <li v-for="(item,index) in recommend" @click="playAudioRecommend(recommend,index)">
          <img :src="item.singerImg">
          <p>{{item.musicName}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import VuiSwiperX from "../../components/swiper.vue";
export default {
  data() {
    return {
      //轮播图的数组
      swiperArr: [
        {
          imgSrc:
            "http://p1.music.126.net/fjuJ77oQCNqhl9Oh-0_p1Q==/109951163602599542.jpg"
        },
        {
          imgSrc:
            "http://p1.music.126.net/1j7JC9ijByhF_2jr8Q6lKg==/109951163598837461.jpg"
        },
        {
          imgSrc:
            "http://p1.music.126.net/L9_Y6ZJYS-LiazUBvIG0oQ==/109951163601422085.jpg"
        },
        {
          imgSrc:
            "http://p1.music.126.net/dk2ppBJ34GKo43yVlwsqVg==/109951163602543559.jpg"
        }
      ]
    }
  },
  components: {
    VuiSwiperX
  },
  created(){
      //请求data.json文件
      this.$store.dispatch("getAll")
  },
  methods:{
    showAlbum(item,index){
      this.$store.commit("showAlbum",{
        index:index,
        album:item,
        isShowAlbum:true
      })
    },
    playAudioRecommend(recommend,index){
      // recommend表示单曲列表，index表示点击的是单曲列表里面的第几首歌
        this.$store.commit("playAudio",{
            isShowAudio: true,  //显示播放器页面
            album: recommend,	//设置专辑列表
            index: index,		//下标
            albumImg: recommend[index].singerImg,	//专辑作者头像
            playerImg: recommend[index].playerbg,//播放器背景图
            //设置播放的第几张专辑 对应 0 1 2 3 4 方便切换歌曲
            albumIndex: null
        })
    }
  },
  computed:{
    album(){
      //得到专辑列表
      return this.$store.state.mapList.album
    },
    recommend(){
      return this.$store.state.mapList.recommend
    }
  }
}
</script>
<style scoped lang='stylus'>
.index{overflow-y: scroll;}
 h3 {font-weight: normal;font-size: 18px;height: 40px;line-height: 40px;}
    h3:before{
        content:'|';color: #C20C0C;background:#C20C0C;font-size:15px;margin: 0 6px;
    }
  .album{
    ul{
      overflow:hidden;font-size:12px;
      li{
        float:left;width:32%;margin-left:1%;
        img{width:98%;display:block;padding:2%;}
        p{padding-left:5px;}
      }
    }
  }
  .recommend{
    ul{
      overflow:hidden;font-size:12px;
      li{
        float:left;width:32%;margin-left:1%;margin-bottom:4%;
        img{width:98%;display:block;padding:2%;}
        p{padding-left:5px;}
      }
    }
  }
</style>

