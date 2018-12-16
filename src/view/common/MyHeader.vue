<template>
    <div id="myheader">
        <el-row class="header-row">
            <ul class="header-ul">
                <li><span class="header-span">Hello Admin</span></li>
                <!-- <li v-if="user !== null && user !== ''"><router-link to="/my-account" class="header-router-link">{{user.firstName}}&nbsp;{{user.lastName}}</router-link></li>
                <li><router-link to="/support/faq" class="header-router-link">FAQ</router-link></li>
                <li v-if="user === null"><router-link to="/login" class="header-router-link">Sign In</router-link></li>
                <li v-if="user !== null && user !== ''"><router-link to="/logout" class="header-router-link" @click.native="logout()">Sign Out</router-link></li>
                <li v-if="!user"><router-link to="/register" class="header-router-link">Create an Account</router-link></li>
                <li><a class="header-a"><i class="el-icon-search"></i></a></li> -->
            </ul>
            <!-- <el-col :span="12" :xs="24">
            <h2>HGL TECH ADMINISTRATOR</h2>
            </el-col>
            <el-col :span="12" :xs="24">
                2018-12-1 11:57:00
            </el-col> -->
        </el-row>
    </div>
</template>

<script>
import api from '@/utils/api'

export default {
  name: 'MyHeader',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push(keyPath)
    },
    logout () {
      api.get('/user/logout', null).then(res => {
        sessionStorage.removeItem('user')
        this.$router.push('/')
      })
    }
  },
  computed: {
    user () {
      return JSON.parse(sessionStorage.getItem('user'))
    }
  }
}
</script>

<style scope>
.header-row{
    position: absolute;
    margin: 5px 0 0 5px;
    z-index: 2;
    float: left;
    position: relative;
    height: 100%;
    width: 100%;
}
.header-ul{
    /* margin-top: 10px; */
    width: auto;
}
.header-ul li{
    float:right;
    list-style: none;
    margin-left: 10px;
    /* margin-top: 5px; */
    /* padding-left: 5px; */
    padding-right: 10px;
}
.header-span, .header-a{
    color: rgb(94, 90, 90);
    font-size: 13px;
}
.header-router-link{
    color: #fff;
    font-size: 13px;
}
.header-router-link:link{
    color: #fff;
}
.header-a:link{
    color: #fff;
}
.el-menu-router-link{
    color: #fff;
}
.el-menu-router-link:link{
    color: #fff;
}
h2{
    color: #fff;
    text-align: left;
}
</style>
