<template>
  <div class="power-bank">
    <el-row class="power-bank-row">
      <el-col :span="17" class="power-bank-row-col-left" :xs="24">
        <el-col class="power-bank-row-col-left-col-left" :span="8" :xs="24">
          <el-col :span="24" :xs="24" class="big-img">
            <swiper :options="swiperOptionTop" ref="swiperTop" class="gallery-top">
            <!-- <swiper :options="swiperOptionTop" id="gallery"> -->
              <swiper-slide v-for="item in productPicture" :key="item.id" class="banner-col-top-col-slide">
                  <img :src="img+item.picture" style="width:100%;height:100%" >
              </swiper-slide>
            </swiper>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </el-col>
          <el-col class="little-img" >
            <swiper :options="swiperOptionThumbs" ref="swiperThumbs" class="gallery-thumbs">
            <!-- <swiper :options="swiperOptionBottom" id = "thumbs"> -->
            <swiper-slide v-for="item in productPicture" :key="item.id">
              <!-- <el-col style="border: 1px #000000 solid"> -->
                <img :src="img+item.picture" style="width:100%;height:100%" >
              <!-- </el-col> -->
            </swiper-slide>
          </swiper>
          </el-col>
        </el-col>
        <el-col class="power-bank-row-col-left-col-right" :span="16" :xs="24">
          <h1><span class="power-bank-row-col-left-col-right-span">{{product.name}}</span></h1>
          <el-col class="power-bank-row-col-left-col-right-1" :span="24" :xs="24">
            <a class="action" href="https://www.visiontek.com/hdmi-pivot-cable-3-ft-m-m.html#review-form">
              Be the first to review this productId
            </a>
          </el-col>
          <el-col class="power-bank-row-col-left-col-right-2">
            <h1><span class="power-bank-row-col-left-col-right-span">${{product.price}}</span></h1>
          </el-col>
          <el-col class="power-bank-row-col-left-col-right-2"></el-col>
          <el-col class="power-bank-row-col-left-col-right-3" :span="24" :xs="24">
            <p>{{product.introductions}}</p>
            <p><strong><span>Features:</span></strong></p>
            <el-row>
              <ul>
                <el-col  :span="12" :xs="24"  v-for="(value,key,index) in product"  :key="index" class="power-bank-row-col-left-col-right-3">
                <li v-if="key !== 'introductions' && value !== '' && key !== 'id'"><strong>{{key}}：</strong>&nbsp;{{value}}</li>
                </el-col>
              </ul>
            </el-row>
          </el-col>
        </el-col>
        <el-col class="power-bank-row-col-left-col-right-4" :span="24" :xs="24">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick" value="Detail">
            <el-tab-pane label="Detail" name="Detail">
              <ul>
                <li v-for="item in productDetail" :key="item.id">
                  <img :src="img+item.picture">
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-col>
      <el-col :span="5" :offset="2" class="power-bank-row-col-right" :xs="24">
        <el-row class="power-bank-row-col-right-questions">
          <img :src="techSupport">
        </el-row>
        <e-row class="power-bank-row-col-right-latest-news">
          <LatestNews></LatestNews>
        </e-row>
        <el-row class="power-bank-row-col-right-latest-faq">
          <LatestFAQ></LatestFAQ>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/utils/api'
import LatestNews from '@/view/latest/LatestNews'
import LatestFAQ from '@/view/latest/LatestFAQ'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'PowerBank',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgUrl: require('@/assets/1539869424.jpg'),
      currentPage: 5,
      imgList: [
        {id: 1, idView: require('@/assets/images/1.jpg')},
        {id: 2, idView: require('@/assets/images/2.jpg')},
        {id: 3, idView: require('@/assets/images/3.jpg')},
        {id: 4, idView: require('@/assets/images/4.jpg')}
      ],
      ImgUrl: require('@/assets/images/1.jpg'),
      product: {},
      productPicture: [],
      productDetail: [],
      img: 'http://www.gugualao.top/img/',
      activeName: 'Detail',
      techSupport: require('@/assets/images/Tech-Support.jpg'),
      bottomSwiper: '',
      mySwiper: '',
      swiperOptionTop: {
        // notNextTick: true,
        autoplay: true,
        interval: 1000,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
        centeredSlides: true
      }
    }
  },
  created () {
    this.getProductDetail()
  },
  methods: {
    handleSizeChange () {},
    handleCurrentChange () {},
    getIndex (imgUrl) {
      this.ImgUrl = imgUrl
    },
    getProductDetail () {
      let that = this
      let param = {
        productId: this.$route.params.productId
      }
      api.postC('/product/query-power-pro-detail', param).then(data => {
        if (data.code === '0') {
          that.product = data.product
          let type = that.product.type
          if (type === '1') {
            that.product.type = 'Wireles schargers'
          }
          if (type === '2') {
            that.product.type = 'Car Chargers'
          }
          if (type === '3') {
            that.product.type = 'Single USB Chargers'
          }
          if (type === '4') {
            that.product.type = 'Wall Chargers'
          }
          if (type === '5') {
            that.product.type = 'Multi-function'
          }
          if (type === '6') {
            that.product.type = 'Power Socket'
          }
          that.productPicture = data.productPicture
          api.postC('/product/get-product-detail', param).then(detail => {
            if (detail.code === '0') {
              that.productDetail = detail.list
              console.log(that.productDetail)
            }
          })
        } else {
          alert(data.msg)
        }
      })
    },
    handleClick (tab, event) {
      // console.log(tab, event)
    }
  },
  components: {LatestNews, LatestFAQ, swiper, swiperSlide},
  // computed: {
  //   swiper () {
  //     return this.$refs.mySwiper.swiper
  //   }
  // },
  mounted () {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.power-bank{
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}
.power-bank-row{
  text-align: left;
}
.big-img{
  border:#ddd 1px solid;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.power-bank-row-col{
  margin-left: 0px;
  margin-bottom: 20px;
  text-align: center
}
.power-bank-row-col-left-col-right{
  padding: 0px 20px 0px;
  position: relative;
}
.power-bank-row-col-left-col-right-span{
    font-size: 28px;
    font-weight: 600;
    line-height: 1;
    color: #555;
}
.power-bank-row-col-left-col-right-1{
    padding: 0 15px 0 10px;
    display: inline-block;
    vertical-align: middle;
    margin-top: 0;
    line-height: 16px;
    margin-bottom: 10px;
    margin-top: 10px;
}
.power-bank-row-col-left-col-right-1 a{
    color: #bdbdbd;
    text-decoration: none;
}
.power-bank-row-col-left-col-right-2{
    border-bottom: 1px #ebebeb solid;
    display: table;
    width: 100%;
    margin-bottom: 15px;
    display: table-cell;
    vertical-align: top;
}
.power-bank-row-col-left-col-right-3{
    color: #777;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
    font-size: 0.8rem;
}
.power-bank-row-col-left-col-right-3 p{
    display: block;
    -webkit-margin-before: 0.9em;
    -webkit-margin-after: 0.9em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
.power-bank-row-col-left-col-right-3 li{
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 20px;
    margin: 5px 5px 0px 0px;
}
.power-bank-row-col-left-col-right-4{
    margin: 30px 10px 10px 0;
}
.el-carousel__arrow .el-carousel__arrow--left{
  left: 0px;
}
.el-carousel__arrow--right{
  right: 0px;
}
.big-img-carousel .el-carousel__arrow--right,.big-img-carousel .el-carousel__arrow--left {
  height: 100%;
  width: 50px;
  font-size: 50px;
  color: black;
  border-radius: 0%;
}
.big-img-carousel .el-carousel__arrow{
  height: 100%;
}
/* .swiper-button-prev{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");} */
/*改变了颜色和加粗的样式*/
/* .swiper-button-prev{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l4.2%2C4.2L8.4%2C22l17.8%2C17.8L22%2C44L0%2C22z'%20fill%3D'%23ff6600'%2F%3E%3C%2Fsvg%3E");} */
.power-bank-row-col-left-col-left{
  position: relative;
  border: #777 1px solid;
}
/* .little-img{
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
  position: relative;
} */
.gallery-thumbs {
    height: 15%!important;
    box-sizing: border-box;
    /* padding: 10px 0; */
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
    opacity: 1;
}
.swiper-button-next, .swiper-button-prev{
  top: 40%;
}
</style>
