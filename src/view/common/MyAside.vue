<template>
    <div id="my-aside">
        <el-row class="my-aside-row" style="height: 100%;">
            <el-col class="my-aside-row-col" :span="4" :xs="24" style="min-height: 100%; min-width:100%;background-color: #324057;">
              <!-- <strong>HGL TECH ADMINISTRATOR</strong> -->
              <el-menu
              router
              :default-active="$router.path"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @select="handleSelect"
              @close="handleClose"
              background-color="#324057"
              text-color="#fff"
              active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <!-- <i class="el-icon-location"></i> -->
                    <span>ADD PRODUCTS</span>
                  </template>
                  <el-menu-item index="/add-product/add-cables">
                    <!-- <i class="el-icon-menu"></i> -->
                    Add Cables
                  </el-menu-item>
                  <el-menu-item index="/add-product/add-temper">
                      <!-- <i class="el-icon-menu"></i> -->
                      <span slot="title">Add Temper</span>
                  </el-menu-item>
                  <el-menu-item index="/add-product/add-news">
                      <!-- <i class="el-icon-menu"></i> -->
                      <span slot="title">Add News</span>
                  </el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                  <!-- <i class="el-icon-location"></i> -->
                  <span>CABLES</span>
                  </template>
                  <el-menu-item index="/cables/micro-usb">Micro USB</el-menu-item>
                  <el-menu-item index="/cables/type-c">Type-C</el-menu-item>
                  <el-menu-item index="/cables/lightning">Lightning </el-menu-item>
                  <el-menu-item index="/cables/other">Others</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                  <!-- <i class="el-icon-location"></i> -->
                  <span>TEMPER</span>
                  </template>
                  <el-menu-item index="/temper/iPhone">iPhone</el-menu-item>
                  <el-menu-item index="/temper/huawei">Huawei</el-menu-item>
                  <el-menu-item index="/temper/samsung">Samsung</el-menu-item>
                  <el-menu-item index="/temper/oppo">Oppo</el-menu-item>
                  <el-menu-item index="/temper/vivo">Vivo</el-menu-item>
                  <el-menu-item index="/temper/others">Others</el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'MyAside',
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
.my-aside{
  height: 100%;
}
.my-aside-row{
    text-align: left;
    height: 100%;
}
/* .my-aside-row-col{
    background-color: #324057;
    min-height: 100%;
    min-width: 100%;
} */
.el-menu-vertical-demo{
  height: 100%;
}
</style>
