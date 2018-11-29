<template>
    <div id="add-products">
        <e-row class="add-products-row">
            <el-col class="add-products-row-col" :span="4" :xs="24">
                <strong>Add Products</strong>
                <el-menu
                router
                :default-active="$router.path"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @select="handleSelect"
                @close="handleClose">
                <el-menu-item index="/add-products/add-usb"><i class="el-icon-menu"></i>Add Micro USB</el-menu-item>
                <el-menu-item index="1-2"><i class="el-icon-menu"></i>Add Type-C</el-menu-item>
                <el-menu-item index="1-3"><i class="el-icon-menu"></i>Add Lightning</el-menu-item>
                <el-menu-item index="1-4-1"><i class="el-icon-menu"></i>Add Other</el-menu-item>
                <el-menu-item index="/add-products/add-temper">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Add Temper</span>
                </el-menu-item>
                <!-- <el-menu-item index="add-news">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Add News</span>
                </el-menu-item> -->
                <el-menu-item index="/add-news">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Add News</span>
                </el-menu-item>
                </el-menu>
            </el-col>
            <el-col class="add-products-row-col" :span="19" :xs="24">
                <router-view></router-view>
            </el-col>
        </e-row>
    </div>
</template>

<script>
export default {
  name: 'AddProducts',
  data () {
    return {

    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key + '==' + keyPath)
      this.$router.push(keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
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
    }
    if (this.userInfo.email !== '1832054053@qq.com') {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.add-products-row{
    text-align: left;
    padding: 20px;
}
.add-products-row-col{
    padding: 20px;
}
.el-col-add-products-content-left{
    display: block;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #fff;
    /* border-top: 1px solid #777; */
    /* padding: 15px 10px 0; */
    box-shadow: 0 2px 3px rgba(0,0,0,0.08);
    margin-top: 10px;
}
.el-col-add-products-content-left-title{
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
.el-col-add-products-content-left-content{
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
.el-col-add-products-content-left-content-ul{
    list-style:none;
    line-height:30px;
    padding-top: 10px;
    text-align: left;
}
</style>
