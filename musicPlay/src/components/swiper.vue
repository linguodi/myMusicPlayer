<template>
    <div>
        <swiper :options="swiperOption" >
            <!-- slides -->
            <swiper-slide v-for="item in swiperArr" :key="item.id">
				<img :src="item.imgSrc">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    props:["swiperArr"],
    data(){
        return {
        //使用轮播图小圆点
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    }
}
</script>
<style scoped lang='stylus'>
    img{width:100%;display:block;}
</style>

