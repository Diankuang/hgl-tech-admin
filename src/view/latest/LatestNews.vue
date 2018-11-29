<template>
  <div class="latest-news">
    <el-row class="el-row-latest-news">
      <span class="el-row-latest-news-span">Latest News</span>
      <ul class="el-row-latest-news-ul">
          <li class="el-row-latest-news-ul-li" v-for="item in newsList" :key="item.id">
              <router-link :to="{path: '/news-detail/'+item.newsId}">{{item.title}}</router-link>
          </li>
      </ul>
    </el-row>
    <el-row class="view-all">
      <router-link to="/about-us/news"><span class="view-span">View All</span></router-link>
    </el-row>
  </div>
</template>

<script>
import api from '@/utils/api'
export default {
  name: 'LatestNews',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgUrl: require('@/assets/1539869424.jpg'),
      newsList: []
    }
  },
  methods: {
    queryNewsList () {
      let that = this
      api.post('/news/query-news-title', null).then(data => {
        if (data.code === '0') {
          that.newsList = data.list
        }
      })
    }
  },
  created () {
    this.queryNewsList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.latest-news{
  margin: 0px;
  padding: 0px;
}
.el-row-latest-news-span{
    color: #777;
    font-size: 17px;
    font-family: MingLiU;
    font-style: normal;
}
.el-row-latest-news-ul{
    list-style:none;
    line-height:20px;
    /* padding-top: 10px; */
    text-align: left;
    font-size: 12px;
}
.el-row-latest-news-ul-li{
    text-decoration: none;
    outline: none;
    border-bottom: 1px solid #dddddd;
    display: block;
    margin: 10px 0 10px 0;
    padding-bottom: 5px;
}
.view-span{
  color: #777777;
  font-size: 12px;
}
</style>
