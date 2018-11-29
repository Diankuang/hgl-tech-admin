<template>
    <div id="news-detail">
        <el-row class="news-detail-row">
          <el-col class="news-detail-title" :span="18" :offset="4" :xs="24">
            <P><strong>{{news.title}}</strong></P>
            <p><span class="news-detail-span">Time: {{news.createTime}}&nbsp;&nbsp;&nbsp;&nbsp;Source: BJD group</span></p>
          </el-col>
          <el-col v-html="html" class="news-detail-content" :span="24" :offset="4" :xs="24"></el-col>
          <el-col class="news-detail-share" :span="18" :offset="4" :xs="24">
            <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间">fdsfds</a>
            <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博">fdsf</a>
            <a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博">fdsaf</a>
            <a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网">fsd</a>
            <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信">fsda</a>
          </el-col>
        </el-row>
    </div>
</template>

<script>
import api from '@/utils/api'
import '../../../static/UE/lang/zh-cn/zh-cn.js'
export default {
  name: 'NewsDetail',
  data () {
    return {
      news: '',
      html: ''
    }
  },
  methods: {
    getNewDetail () {
      let that = this
      let newsId = this.$route.params.newsId
      let params = {newsId: newsId}
      api.postC('/news/query-news-detail', params).then(data => {
        if (data.code === '0') {
          that.news = data.news
          that.html = that.news.content
          console.log(that.html)
        }
      })
    }
  },
  created () {
    this.getNewDetail()
  }
}
</script>

<style scoped>
.news-detail-span{
  font-size: 14px;
  text-align: center;
  color: #888;
}
.news-detail-title{
  text-align: left;
  border-bottom: 1px solid #ddd;
}
.news-detail-title p{
  margin: 20px 0 5px 0;
}
.news-detail-content{
  margin: 30px 0 150px 0;
}
.news-detail-share{
  text-align: left;
  margin-bottom: 30px;
}
</style>
