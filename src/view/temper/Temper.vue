<template>
  <div class="temper">
    <el-row class="el-row-temper">
        <el-col :span="5" :xs="24" class="el-col-temper-content-left">
            <el-col :span="24" :xs="24" class="el-col-temper-content-left-title">
                <strong>About us</strong>
            </el-col>
            <el-col :span="24" :xs="24" class="el-col-temper-content-left-content">
                <ul class="el-col-temper-content-left-content-ul">
                    <li>
                        <router-link to="/temper/iPhone">iPhone</router-link>
                    </li>
                     <li>
                        <router-link to="/temper/huawei">Huawei</router-link>
                    </li>
                    <li>
                        <router-link to="/temper/samsung">Samsung</router-link>
                    </li>
                    <li>
                        <router-link to="/temper/oppo">Oppo</router-link>
                    </li>
                    <li>
                        <router-link to="/temper/vivo">Vivo</router-link>
                    </li>
                    <li>
                        <router-link to="/temper/others">Others</router-link>
                    </li>
                </ul>
            </el-col>
        </el-col>
        <el-col :span="14" :xs="24" class="el-col-temper-content-center">
            <router-view></router-view>
        </el-col>
        <el-col :span="5" :xs="24" class="el-col-temper-content-right">
            <LatestNews></LatestNews>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import LatestNews from '@/view/latest/LatestNews'
export default {
  name: 'Temper',
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
.temper{
    padding: 20px;
}
.el-row-temper{
  text-align: left;
}
.el-col-temper-content-left{
    display: block;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #fff;
    /* border-top: 1px solid #777; */
    /* padding: 15px 10px 0; */
    box-shadow: 0 2px 3px rgba(0,0,0,0.08);
    margin-top: 10px;
}
.el-col-temper-content-left-title{
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
.el-col-temper-content-left-content{
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
.el-col-temper-content-left-content-ul{
    list-style:none;
    line-height:30px;
    padding-top: 10px;
    text-align: left;
}
.el-col-temper-content-center{
    padding: 10px 15px 15px;
}
.el-col-temper-content-right{
    display: block;
    background: #fff;
    margin-top: 20px;
}
</style>
