<template>
  <div class="my-wish-list">
    <el-row>
      <el-col :span="5" :xs="24" v-for="item in wishList" :key="item.id" class="wish-col">
        <el-card class="wish-card" shadow="hover">
          <el-col :span="24" :xs="24" style="width:100%;height: 200px;">
            <router-link v-if="item.type === 0 " :to="{path: '/power-bank/'+item.productId}">
              <img :src="img+item.picture" class="image" style="height:100%;width:100%">
            </router-link>
            <router-link v-if="item.type === 1 " :to="{path: '/temper-pro/'+item.productId}">
              <img :src="img+item.picture" class="image" style="height:100%;width:100%">
            </router-link>
          </el-col>
          <el-col :span="24" :xs="24" class="mywishlist-div">
            <!-- <el-button type="text" class="button">操作按钮</el-button> -->
            <h4 style="text-align: center;">${{item.price}}</h4>
            <router-link v-if="item.type === 0 " :to="{path: '/power-bank/'+item.productId}">
              <h4 style="text-align: center;">{{item.name}}</h4>
            </router-link>
            <router-link v-if="item.type === 1 " :to="{path: '/temper-pro/'+item.productId}">
              <h4 style="text-align: center;">{{item.name}}</h4>
            </router-link>
            <div class="bottom clearfix" style="text-align: center;" >
              <!-- <time class="time">{{ currentDate }}</time> -->
              <el-button icon="el-icon-delete" circle style="padding:5px;" class="button" @click="remove(item)"></el-button>
              <span class="add-wish-list-span" @click="remove(item)">remove</span>
            </div>
          </el-col>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/utils/api'

export default {
  name: 'MyWishList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgList: [
        {id: 1, idView: require('@/assets/images/timg.jpg')}
      ],
      currentDate: '2018-11-05',
      wishList: [],
      img: 'http://www.gugualao.top/img/'
    }
  },
  methods: {
    getMyWishList () {
      let that = this
      let params = {
        userId: this.userInfo.userId
      }
      api.postC('/user/query-my-wish-List', params).then(data => {
        if (data.code === '0') {
          that.wishList = data.list
          console.log(that.wishList)
        } else {

        }
      })
    },
    remove (param) {
      let params = {id: param.id}
      api.postC('/user/remove-wish-list', params).then(data => {
        if (data.code === '0') {
          this.$router.go(0)
        }
      })
    }
  },
  computed: {
    userInfo () {
      return JSON.parse(sessionStorage.getItem('user'))
    }
  },
  created () {
    if (this.userInfo === null) {
      this.$router.push('/login')
    } else {
      this.getMyWishList()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wish-col{
  padding: 0 10px 0 0;
}
.button{
  text-align: center;
}
.wish-card{
  height: 400px;
}
.mywishlist-div{
  margin: 50px 0 10px 0;
}
.add-wish-list-span{
  font-size: 12px;
  color: #999;
  cursor: pointer;
}
</style>
