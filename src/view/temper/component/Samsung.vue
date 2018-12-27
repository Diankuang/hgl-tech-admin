<template>
  <div class="Samsung">
    <el-row class="Samsung-row">
      <el-col :span="4" :xs="24" v-for="item in temperList" :key="item.id"  class="Samsung-row-col">
        <el-card :body-style="{ padding: '0px' }" class="Samsung-row-col-card" shadow="hover">
           <router-link :to="{path: '/edit-product/edit-temper/'+item.id}">
            <img :src="img+item.picture" class="image">
          </router-link>
          <router-link :to="{path: '/edit-product/edit-temper/'+item.id}" class="temper-router-link">
            <p class="Samsung-row-col-p">{{item.item}}</p>
          </router-link>
          <el-col>
            <el-button icon="el-icon-delete" circle style="padding:5px;" @click="deleteProduct(item)"></el-button>
            <span class="add-wish-list-span" @click="deleteProduct(item)">remove this product</span>
          </el-col>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="Samsung-row-pagination">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
import api from '@/utils/api'
export default {
  name: 'Samsung',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgUrl: require('@/assets/1539869424.jpg'),
      currentPage: 5,
      pageNum: 1,
      pageSize: 10,
      total: 0,
      temperList: [],
      img: 'http://www.gugualao.top/files/'
    }
  },
  methods: {
    handleSizeChange (val) {
      this.pageSize = val
      this.getTemperList()
    },
    handleCurrentChange (val) {
      this.pageNum = val
      this.getTemperList()
    },
    getTemperList () {
      let that = this
      let params = {
        type: '3',
        pageSize: that.pageSize,
        pageNum: that.pageNum
      }
      api.post('/temper/query-list', params).then(data => {
        if (data.code === '0') {
          that.temperList = data.list
          that.total = data.total
        }
      })
    },
    deleteProduct (item) {
      let that = this
      if (that.userInfo === null) {
        this.$router.push('/login')
        return false
      }
      let params = {
        userId: that.userInfo.userId,
        temperId: item.id,
      }
      api.postC('/temper/delete-temper', params).then(data => {
        if (data.code === '0') {
          alert('Remove Success')
          this.$router.go(0)
        } else {
          alert(data.msg)
        }
      })
    }
  },
  computed: {
    userInfo () {
      // let user = JSON.parse(this.$store.state.user)
      return JSON.parse(sessionStorage.getItem('user'))
    }
  },
  created () {
    this.getTemperList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Samsung{
  margin: 0px;
  padding: 0px;
}
.Samsung-col-img{
  width: 100%
}
.time {
  font-size: 13px;
  color: #999;
}
.image {
  width: 100%;
  height: 100%;
  display: block;
  margin: 20px 0 20px 0;
}
.Samsung-row-col{
  margin-left: 0px;
  margin-bottom: 20px;
  text-align: center
}
.Samsung-row-col-p{
    margin: 0px 0px 5px 0px;
    font-size: 14px;
}
.el-pagination.is-background.el-pager li {
  background-color:#000;
  color:#fff;
}
.temper-router-link :hover {text-decoration:underline;}
.add-wish-list-span{
  font-size: 12px;
  color: #999;
  cursor: pointer;
}
.Samsung-row-col-card{
  height: 400px;
}
a {
    color: #777;
}
</style>
