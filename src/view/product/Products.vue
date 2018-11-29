<template>
  <div class="products">
    <el-row class="products-row">
      <el-col :span="17" class="products-row-col-left" :xs="24">
        <el-col class="products-row-col-left-col-left" :span="8" :xs="24">
          <div class="block">
            <el-carousel trigger="click"  indicator-position="none" @change='change1()'>
              <el-carousel-item v-for="item in imgList" :key="item.id">
                <img :src="item.idView" >
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="little_img" >
            <ul>
                <li v-for="item in imgList" :key="item.id" @click='getIndex(item.idView)' style="width: 50px; height: 50px">
                    <img :src="item.idView" style="width: 50px; height: 50px" >
                </li>
            </ul>
          </div>
        </el-col>
        <el-col class="products-row-col-left-col-right" :span="16" :xs="24">
          <h1><span class="products-row-col-left-col-right-span">{{product.name}}</span></h1>
          <el-col class="products-row-col-left-col-right-1" :span="24" :xs="24">
            <a class="action" href="https://www.visiontek.com/hdmi-pivot-cable-3-ft-m-m.html#review-form">
              Be the first to review this productId
            </a>
          </el-col>
          <el-col class="products-row-col-left-col-right-2">
            <h1><span class="products-row-col-left-col-right-span">${{product.price}}</span></h1>
          </el-col>
          <el-col class="products-row-col-left-col-right-2"></el-col>
          <el-col class="products-row-col-left-col-right-3" :span="24" :xs="24">
            <p>DDR4 is the latest generation of RAM for newer desktop computers and notebooks. It offers increased speed and efficiency over DDR3 memory. Along with its increased speed, DDR4 is also more efficient, using a maximum of 1.2 Volts compared to DDR3’s maximum 1.65 Volts.</p>
            <p><strong><span>Features:</span></strong></p>
            <el-row>
              <ul>
                <el-col  :span="12" :xs="24"  v-for="(value,key,index) in product"  :key="index" class="products-row-col-left-col-right-3">
                <li><strong>{{key}}：</strong>&nbsp;{{value}}</li>
                </el-col>
              </ul>
            </el-row>
          </el-col>
        </el-col>
        <el-col class="products-row-col-left-col-right-4" :span="24" :xs="24">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick" value="Detail">
            <el-tab-pane label="Detail" name="Detail">
              <ul>
                <li><strong>Size:</strong>&nbsp;1 x 8GB module</li>
                <li><strong>Technology:</strong>&nbsp;DDR4 SDRAM</li>
                <li><strong>Speed:</strong>&nbsp;PC4-19200 2400MHz</li>
                <li><strong>Latency Timings:</strong>&nbsp;CL17</li>
                <li><strong>Voltage:</strong>&nbsp;1.2V</li>
                <li><strong>Warranty:</strong>&nbsp;Limited Lifetime</li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-col>
      <el-col :span="5" :offset="2" class="products-row-col-right" :xs="24">
        <el-row class="products-row-col-right-questions">
          <img :src="techSupport">
        </el-row>
        <e-row class="products-row-col-right-latest-news">
          <LatestNews></LatestNews>
        </e-row>
        <el-row class="products-row-col-right-latest-faq">
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
export default {
  name: 'Products',
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
      img: '',
      activeName: 'Detail',
      techSupport: require('@/assets/images/Tech-Support.jpg')
    }
  },
  created () {
    this.getProductDetail()
  },
  methods: {
    handleSizeChange () {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange () {
      // console.log(`当前页: ${val}`);
    },
    getIndex (imgUrl) {
      console.log()
      console.log(imgUrl)
      this.ImgUrl = imgUrl
    },
    getProductDetail () {
      let that = this
      let param = {
        productId: '6582116488'
      }
      api.postC('/product/query-power-pro-detail', param).then(data => {
        console.log(data)
        if (data.code === '0') {
          that.product = data.product
          that.productPicture = data.productPicture
        }
      })
    },
    change1 (val, oldVal) {
      // this.resetItemPosition(oldVal);
      // this.$emit('change', val, oldVal);
      console.log('--------------')
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  components: {LatestNews, LatestFAQ},
  watch: {
    change1 (val, oldVal) {
      // this.resetItemPosition(oldVal);
      // this.$emit('change', val, oldVal);
      console.log('--------------')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products{
  margin: 0px;
  padding: 0px;
}
.products-row{
  text-align: left;
}
.little_img ul{
  list-style: none;
  float:left
}

.products-row-col{
  margin-left: 0px;
  margin-bottom: 20px;
  text-align: center
}
.products-row-col-left-col-right{
  padding: 0px 20px 0px;
}
.products-row-col-left-col-right-span{
    font-size: 28px;
    font-weight: 600;
    line-height: 1;
    color: #555;
}
.products-row-col-left-col-right-1{
    padding: 0 15px 0 10px;
    display: inline-block;
    vertical-align: middle;
    margin-top: 0;
    line-height: 16px;
    margin-bottom: 10px;
    margin-top: 10px;
}
.products-row-col-left-col-right-1 a{
    color: #bdbdbd;
    text-decoration: none;
}
.products-row-col-left-col-right-2{
    border-bottom: 1px #ebebeb solid;
    display: table;
    width: 100%;
    margin-bottom: 15px;
    display: table-cell;
    vertical-align: top;
}
.products-row-col-left-col-right-3{
    color: #777;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
    font-size: 0.8rem;
}
.products-row-col-left-col-right-3 p{
    display: block;
    -webkit-margin-before: 0.9em;
    -webkit-margin-after: 0.9em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
.products-row-col-left-col-right-3 li{
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 20px;
    margin: 5px 5px 0px 0px;
}
.products-row-col-left-col-right-4{
    margin: 30px 10px 10px 0;
}
</style>
