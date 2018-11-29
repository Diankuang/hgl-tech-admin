<template>
    <div id="banner">
      <el-col :span="24" :xs="24" class="banner-col-top">
        <el-carousel indicator-position="outside" :height = "imgHeight-28+'px'">
        <el-carousel-item v-for="item in imgList" :key="item.id" :style = "imgClass" >
            <el-row>
            <el-col :span="24" :xs="24"><img ref="imgHeight+'px'" :src="img+item.idView" class="banner_img"/></el-col>
            </el-row>
        </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="24" :xs="24" class="banner-col-bottom">
        <el-col class="banner-col-bottom-h">
          <h3>NEW ARRIVALS</h3>
        </el-col>
        <el-col :span="24" :xs="24" class="banner-col-bottom-col">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item in newArrival" :key="item.id" class="banner-col-bottom-col-slide">
              <el-col style="padding:10px;">
              <router-link :to="{path: '/power-bank/'+item.id}">
                <img :src="img+item.picture" class="banner_img" style="width:100%;height:100%;margin-bottom: 10px;"/>
              </router-link>
              <i class="el-icon-star-on"></i>
              <router-link :to="{path: '/power-bank/'+item.id}">
                {{item.name}}
              </router-link>
              </el-col>
            </swiper-slide>
          </swiper>
        </el-col>
      </el-col>
    </div>
</template>

<script>
import api from '@/utils/api'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Baner',
  data () {
    return {
      img: 'http://47.107.57.42/img/',
      imgList: [
        {id: 1, idView: '57c778644a448.jpg'},
        {id: 2, idView: '57c778b2decd8.jpg'},
        {id: 3, idView: '57c778ca85728.jpg'},
        {id: 4, idView: '57c778fae4f48.jpg'}
      ],
      imgHeight: 0,
      miniImg: [
        {id: 1, idView: '57d5facb1a838.jpg'},
        {id: 2, idView: '57d3a28202968.jpg'},
        {id: 3, idView: '57d3b94aa89a8.jpg'},
        {id: 4, idView: '57c778fae4f48.jpg'},
        {id: 5, idView: '57d3b94aa89a8.jpg'},
        {id: 6, idView: '57d3a28202968.jpg'}
      ],
      swiperOption: {
        slidesPerView: 6,
        slidesPerGroup: 1,
        loop: true,
        // autoplay: 3000,
        autoplay: true,
        interval: 1000,
        grabCursor: true
        // autoplayDisableOnInteraction: false
      },
      newArrival: []
    }
  },
  methods: {
    // initSwiper () {
    //   var mySwiper = new Swiper('.swiper-container', {
    //     autoplay: 5000
    //   })
    // },
    hh () {
      // console.log(window.innerHeight)
      this.imgHeight = window.innerHeight
      this.imgClass = 'height:  ' + window.innerHeight + 'px;'
    },
    getNewArrivals () {
      let that = this
      api.post('/product/query-all', null).then(data => {
        if (data.code === '0') {
          that.newArrival = data.list
        } else {
          alert('Source not found')
        }
      })
    }
  },
  created () {
    let that = this

    this.hh()
    window.addEventListener('resize', that.hh, false)
    this.getNewArrivals()
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>

<style scope>
/* * {
    margin: 0;
    padding: 0;
} */
.el-carousel {
    overflow: hidden;
    position: relative;
}
#banner{
  overflow: hidden;
}
.banner-col-top .el-carousel__arrow--right,.banner-col-top .el-carousel__arrow--left {
  height: 50px;
  width: 50px;
  font-size: 50px;
  color: black;
}
.banner-col-bottom{
  margin: 40px 0 100px 0;
  /* border: 1px #777777 solid; */
}
.banner-col-bottom-col{
  margin: 20px 0 0 0;
}
.banner-card{
  border: 0;
}
.banner-col-bottom-h{
  border-top: 1px #dddddd solid;
  border-bottom: 1px #dddddd solid;
}
.banner-col-bottom-col-slide{

}
</style>
