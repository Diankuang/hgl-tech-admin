<template>
  <div class="latest-faq">
    <el-row class="el-row-latest-faq">
      <el-row class="el-row-latest-faq-title">
        <span class="el-row-latest-faq-span">Latest FAQ</span>
      </el-row>
      <el-row class="el-row-latest-faq-content">
        <el-collapse accordion  @change="onChange()"  class="latest-faq-collapse">
            <el-collapse-item v-for="item in latestFaqList" :key="item.id">
                <template slot="title" class="tem-faq">
                    <!-- <i class="el-icon-plus" v-if="i == 1"></i>
                    <i class="el-icon-plus" v-if="i == 0"></i> -->
                    <span style="line-height: 20px;">{{item.title}}</span>
                </template>
                <div v-if="item.content1" class="faq-content">{{item.content1}}</div>
                <div v-if="item.content2">{{item.content2}}</div>
                <div v-if="item.content3">{{item.content3}}</div>
                <div v-if="item.content4">{{item.content4}}</div>
            </el-collapse-item>
        </el-collapse>
        <!-- <ul class="el-row-latest-faq-ul">
          <li class="el-row-latest-faq-ul-li" v-for="item in ulList" :key="item.path">
              <router-link to="item.path">{{item.title}}</router-link>
          </li>
        </ul> -->
      </el-row>
    </el-row>
  </div>
</template>

<script>
import api from '@/utils/api'
export default {
  name: 'LatestFAQ',
  data () {
    return {
      ulList: [
        {path: 'faq-info1', title: 'VisionTek Launches the VT100 Universal USB 3.0 Portable Dock'},
        {path: 'faq-info2', title: 'VisionTek Launches Portable Thunderbolt 3 SSD Enclosures for Mac and PC'},
        {path: 'faq-info3', title: 'VisionTek Introduces New Thunderbolt™ 3 eGFX External Graphics Accelerator Enclosure'},
        {path: 'faq-info4', title: 'VisionTek Unveils Radeon RX Vega 64 Editions'},
        {path: 'faq-info5', title: 'VisionTek Adds The Radeon RX 550 To Its GPU Family'},
        {path: 'faq-info6', title: 'VisionTek Launches Radeon RX 580 8GB and RX 570 4GB Overclocked Editions'}
      ],
      activeName: '1',
      latestFaqList: [],
      i: 1
    }
  },
  methods: {
    getLatestFaq () {
      let that = this
      api.post('/faq/query-latest', null).then(data => {
        console.log(data)
        if (data.code === '0') {
          that.latestFaqList = data.list
        }
      })
    },
    onChange (name) {
      console.log('faq')
    }
  },
  created (key) {
    this.getLatestFaq()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.latest-faq{
  margin: 0px;
  padding: 0px;
}
.el-row-latest-faq-span{
    color: #777;
    font-size: 17px;
    font-family: MingLiU;
    font-style: normal;
}
.el-row-latest-faq-ul{
    list-style:none;
    line-height:30px;
    padding-top: 10px;
    text-align: left;
    font-size: 12px;
}
.el-row-latest-faq{
    border: 1px solid #cccccc;
    margin-top: 10px;
}
.el-row-latest-faq-title{
    border-bottom: 1px solid #cccccc;
    padding: 7px 10px 7px 10px;
    background-color: #f4f4f4;
    color: #636363;
    text-transform: uppercase;
}
.faq-content{
   line-height: 20px;
}
.tem-faq{
    line-height: 20px;
}
.latest-faq-collapse.el-collapse-item__header {
    height: 48px;
    line-height: 20px;
    color: #303133;
    cursor: pointer;
    border-bottom: 1px solid #ebeef5;
    font-size: 13px;
    font-weight: 500;
    -webkit-transition: border-bottom-color .3s;
    transition: border-bottom-color .3s;
    outline: 0;
}
</style>
