<template>
  <div class="micro-usb">
    <el-row class="micro-usb-row">
      <el-col :span="4" :xs="24" v-for="item in productList" :key="item.id"  class="micro-usb-row-col">
        <el-card :body-style="{ padding: '0px' }" class="micro-usb-row-col-card" shadow="hover">
          <el-col :span="24" :xs="24" style="width:100%;height: 250px;">
            <router-link :to="{path: '/edit-product/edit-cables/'+item.id}">
              <img :src="img+item.picture" class="image">
            </router-link>
          </el-col>
          <el-col :span="24" :xs="24" class="cables-div">
            <router-link :to="{path: '/edit-product/edit-cables/'+item.id}">
              {{item.item}}
            </router-link>
            <el-col>
              <el-button icon="el-icon-delete" circle style="padding:5px;" @click="deleteProduct(item)"></el-button>
              <span class="add-wish-list-span" @click="deleteProduct(item)">remove this product</span>
            </el-col>
          </el-col>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="micro-usb-row-pagination">
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
  name: 'MicroUsb',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgUrl: require('@/assets/1539869424.jpg'),
      currentPage: 5,
      pageNum: 1,
      pageSize: 10,
      total: 0,
      img: 'http://www.gugualao.top/files/',
      productList: [],
      type: '2'
    }
  },
  methods: {
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.pageNum = val
      this.getMicroUsbList()
    },
    getMicroUsbList () {
      let that = this
      let params = {
        type: that.type,
        pageSize: that.pageSize,
        pageNum: this.pageNum
      }
      api.post('/cables/query-list', params).then(data => {
        if (data.code === '0') {
          that.productList = data.list
          that.total = data.total
        } else {
          alert('source not found')
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
        cablesId: item.id,
      }
      api.postC('/cables/delete-cables', params).then(data => {
        if (data.code === '0') {
          alert('Remove Success')
          this.$router.go(0)
        } else {
          alert(data.msg)
        }
      })
    }
  },
  created () {
    this.getMicroUsbList()
  },
  computed: {
    userInfo () {
      return JSON.parse(sessionStorage.getItem('user'))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.micro-usb{
  margin: 0px;
  padding: 0px;
}
.micro-usb-col-img{
  width: 100%
}
.time {
  font-size: 13px;
  color: #999;
}
.image {
  width: 100%;
  display: block;
  height: 100%;
}
.micro-usb-row-col{
  margin-left: 0px;
  margin-bottom: 20px;
  text-align: center
}
.el-pagination.is-background.el-pager li {
  background-color:#000;
  color:#fff;
}
.usb-el-select .el-input__inner{
  border: 1px #0000 solid;
}
.micro-usb-row-select{
  margin-bottom: 20px;
}
.micro-usb-row-col-card{
  /* margin-bottom: 20px;
  padding-bottom: 10px; */
  height: 400px;
}
.cables-div{
  margin: 50px 0 10px 0;
}
.add-wish-list-span{
  font-size: 12px;
  color: #999;
  cursor: pointer;
}
a {
    color: #777;
}
</style>
