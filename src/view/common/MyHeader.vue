<template>
    <div id="myheader">
        <el-header>
            <el-row class="header-row">
                <ul class="header-ul">
                    <li><span class="header-span">Welcome to BJD</span></li>
                    <li v-if="user !== null && user !== ''"><router-link to="/my-account" class="header-router-link">{{user.firstName}}&nbsp;{{user.lastName}}</router-link></li>
                    <li><router-link to="/support/faq" class="header-router-link">FAQ</router-link></li>
                    <li v-if="user === null"><router-link to="/login" class="header-router-link">Sign In</router-link></li>
                    <li v-if="user !== null && user !== ''"><router-link to="/logout" class="header-router-link" @click.native="logout()">Sign Out</router-link></li>
                    <!-- <li v-if="user"><span class="header-router-link">Sign Out</span></li> -->
                    <li v-if="!user"><router-link to="/register" class="header-router-link">Create an Account</router-link></li>
                    <li><a class="header-a"><i class="el-icon-search"></i></a></li>
                </ul>
            </el-row>
            <el-row class="header-row1">
                <!-- <a href="/"><img src="@/assets/logo.png"></a> -->
                <el-menu
                router
                :default-active="$router.path"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                collapse-transition=true
                active-text-color="#ddd">
                     <!-- <el-menu-item index="/"><img src="@/assets/logo.png"></el-menu-item> -->
                    <el-menu-item index="/">Home</el-menu-item>
                    <el-submenu index="2">
                        <!-- <template slot="title"><el-menu-item index="about-us">About us</el-menu-item></template> -->
                        <template slot="title"><router-link class="el-menu-router-link" to="/about-us"><span>About us</span></router-link></template>
                        <el-menu-item index="/about-us/structure">Structure</el-menu-item>
                        <el-menu-item index="/about-us/terms-of-service">Teams of Service</el-menu-item>
                        <el-menu-item index="/about-us/news">BJD News</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <!-- <template slot="title"><el-menu-item  index="cables">Cables</el-menu-item></template> -->
                        <template slot="title"><router-link class="el-menu-router-link" to="/cables"><span>Cables</span></router-link></template>
                        <!-- <template slot="title"><router-link class="header-router-link" to="/cables">Cables</router-link></template> -->
                        <el-menu-item index="/cables/micro-usb">Micro USB</el-menu-item>
                        <el-menu-item index="/cables/type-c">Type-C</el-menu-item>
                        <el-menu-item index="/cables/lightning">Lightning </el-menu-item>
                        <el-menu-item index="/cables/other">Others</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <!-- <template slot="title"><el-menu-item  index="temper">Temper</el-menu-item></template> -->
                        <!-- <template slot="title">Temper</template> -->
                        <template slot="title"><router-link class="el-menu-router-link" to="/temper"><span>Temper</span></router-link></template>
                        <el-menu-item index="/temper/iPhone">iPhone</el-menu-item>
                        <el-menu-item index="/temper/huawei">Huawei</el-menu-item>
                        <el-menu-item index="/temper/samsung">Samsung</el-menu-item>
                        <el-menu-item index="/temper/oppo">Oppo</el-menu-item>
                        <el-menu-item index="/temper/vivo">Vivo</el-menu-item>
                        <el-menu-item index="/temper/others">Others</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <!-- <template slot="title"><el-menu-item index="supoort">Support</el-menu-item></template> -->
                        <!-- <template slot="title">Support</template> -->
                        <template slot="title"><router-link class="el-menu-router-link" to="/support"><span>Support</span></router-link></template>
                        <el-menu-item index="/support/faq">FAQ</el-menu-item>
                        <el-menu-item index="/support/map">Map</el-menu-item>
                        <el-menu-item index="/support/after-sale-policy">After sale Policy</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/contact-us">Contact us</el-menu-item>
                    <!-- <el-submenu index="6"> -->
                         <!-- <template slot="title">Contact us</template> -->
                        <!-- <template slot="title"><router-link class="el-menu-router-link" to="/contact-us">Contact us</router-link></template> -->
                        <!-- <el-menu-item index="/contact-us">Contact us</el-menu-item> -->
                    <!-- </el-submenu> -->
                </el-menu>
            </el-row>
        </el-header>
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
.el-header{
    margin: 0px;
    padding: 0px;
    background-color:#545c64;
    /* position: sabsolute; */
    width: 100%;
    z-index: 1;
    /* height: 100px; */
}
.header-row{
    position: absolute;
    margin-top: 5px;
    z-index: 2;
    float: right;
    position: relative;
}
.header-ul{
    margin-top: 10px;
    width: auto;
}
.header-ul li{
    float:left;
    list-style: none;
    border-right: 1px solid;
    border-color: #fff;
    margin-left: 10px;
    /* margin-top: 5px; */
    /* padding-left: 5px; */
    padding-right: 10px;
}
.header-span, .header-a{
    color: #fff;
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
/* .el-menu-router-link:active{
    background-color: #ffd04b;
    color: #ffd04b;
} */
/* .el-menu-router-link span:hover{
    background-color: #ffd04b;
} */
</style>
