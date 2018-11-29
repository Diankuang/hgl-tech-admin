<template>
    <div id="news">
        <el-row class="news-row">
            <el-col :span="24" :xs="24" class="el-row-news-strong">
                <strong>BJD News</strong>
            </el-col>
            <el-col v-if="newsList.length === 0" class="news-row-col-null"><span>There's no News Info</span></el-col>
            <el-col :span="24" :xs="24" v-for="item in newsList" :key="item.id" class="news-row-col">
                <el-col :span="4" :xs="24" class="news-row-col-img">
                    <router-link :to="{path: '/news-detail/'+item.newsId}"><img :src="img+item.picture" style="width:200px;height:120px;"/></router-link>
                </el-col>
                <el-col :span="19" :xs="24" class="news-row-col-content">
                    <p>
                        <router-link :to="{path: '/news-detail/'+item.newsId}"><span class="news-row-col-title">{{item.title}}</span></router-link>
                    </p><br>
                    <p class="news-row-col-content-p">{{item.summarize}}</p><br>
                    <p class="read-more">
                        <router-link :to="{path: '/news-detail/'+item.newsId}">
                            <span>Read More</span>
                            <i class="el-icon-d-arrow-right"></i>
                        </router-link>
                        <span style="margin-left: 20px;">{{item.createTime}}</span>
                    </p>
                </el-col>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import api from '@/utils/api'

export default {
  name: 'NEWS',
  data () {
    return {
      newsList: [],
      logo: require('@/assets/images/5bbeafcb2798f.jpg'),
      img: 'http://www.gugualao.top/img/'
    }
  },
  methods: {
    queryNewsList () {
      let that = this
      api.post('/news/query-news', null).then(data => {
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

<style scoped>
.news-row{
    /* margin-top: 20px; */
    display: block;
    border: 1px solid #ececec;
    border-radius: 8px;
    background: #fff;
    border-top: 4px solid #000000;
    padding: 15px 10px 0 10px;
    box-shadow: 0 2px 3px rgba(0,0,0,0.08);
}
.el-row-news-strong{
    font-size: 24px;
    text-align: left;
    border-bottom: 1px solid #000000;
    margin: 20px 0 10px 0;
}
.news-row-col{
    margin: 20px 0 10px 0;
    padding: 15px 10px 10px 10px;
    border-bottom: 1px solid #ddd;
}
.news-row-col-content{
    margin-left: 20px;
}
.news-row-col-title{
    color: #000000;
}
.news-row-col-content-p{
    color: #777777;
    font-size: 14px;
    margin-top: 10px;
}
.read-more{
    margin-top: 10px;
    font-size: 14px;
    color: #292727;
}
.read-more span{
    font-size: 14px;
    color: #292727;
}
.news-row-col-null{
    text-align: center;
    height: 82px;
}
</style>
