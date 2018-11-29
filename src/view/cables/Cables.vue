<template>
  <div class="cables">
    <el-row class="el-row-cables">
        <el-col :span="5" class="el-col-cables-content-left" :xs="24">
            <el-col :span="24" class="el-col-cables-content-left-title" :xs="24">
                <strong>About us</strong>
            </el-col>
            <el-col :span="24" class="el-col-cables-content-left-content" :xs="24">
                <ul class="el-col-cables-content-left-content-ul">
                    <li>
                        <router-link to="/cables/micro-usb">Micro USB</router-link>
                    </li>
                     <li>
                        <router-link to="/cables/type-c">Type-C</router-link>
                    </li>
                    <li>
                        <router-link to="/cables/lightning">Lightning</router-link>
                    </li>
                     <li>
                        <router-link to="/cables/other">Other</router-link>
                    </li>
                </ul>
            </el-col>
        </el-col>
        <el-col :span="14" class="el-col-cables-content-center" :xs="24">
            <router-view></router-view>
        </el-col>
        <el-col :span="5" class="el-col-cables-content-right" :xs="24">
            <LatestNews></LatestNews>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import LatestNews from '@/view/latest/LatestNews'
export default {
  name: 'Cables',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {},
  components: {LatestNews}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cables{
    padding: 20px;
}
.el-row-cables{
  text-align: left;
}
.el-col-cables-content-left{
    display: block;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #fff;
    /* border-top: 1px solid #777; */
    /* padding: 15px 10px 0; */
    box-shadow: 0 2px 3px rgba(0,0,0,0.08);
    margin-top: 10px;
}
.el-col-cables-content-left-title{
    color: rgb(119, 119, 119);
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    border-bottom: 1px solid #ddd;
    background: #F5F5F5;
    padding: 10px 10px 10px;
    /* font-weight: 400;
    line-height: 1.4;
    font-size: 1.3rem; */
}
.el-col-cables-content-left-content{
    font-size: 13px;
    background-color: rgb(251, 251, 251);
    margin: 0px;
    padding: 10px 10px;
    border-width: 0px 0px 0px;
    border-style: solid solid solid;
    border-color: rgb(221, 221, 221) rgb(221, 221, 221) rgb(221, 221, 221);
    /* border-top: 0px; */
    border-radius: 0px 0px 7px 7px;
}
.el-col-cables-content-left-content-ul{
    list-style:none;
    line-height:30px;
    padding-top: 10px;
    text-align: left;
}
.el-col-cables-content-center{
    padding: 10px 15px 15px;
}
.el-col-cables-content-right{
    display: block;
    background: #fff;
    margin-top: 20px;
}
</style>
