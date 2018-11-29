<template>
  <div class="my-account">
    <el-row class="tac">
        <el-col :sm="5" :xs="24" :span="5">
          <!-- <strong> My Account</strong> -->
          <el-row>
            <h3> My Account</h3>
          </el-row>
          <el-row>
            <el-menu
            router
            :default-active="$router.path"
            class="el-menu-vertical-demo my-account-menu"
            @select="handleSelect"
            @open="handleOpen"
            @close="handleClose">
                <!-- <el-menu-item index="account-dashboard" class="qqqqqq"><i class="el-icon-caret-right"></i>Account Dashboard</el-menu-item> -->
                <el-menu-item index="/my-account/account-information"><i class="el-icon-caret-right"></i>Account Information</el-menu-item>
                <el-menu-item index="/my-account/address-book"><i class="el-icon-caret-right"></i>Address Book</el-menu-item>
                <!-- <el-menu-item index="my-downloadable-products"><i class="el-icon-caret-right"></i>My Downloadable Products</el-menu-item> -->
                <!-- <el-menu-item index="my-orders"><i class="el-icon-caret-right"></i>My Orders</el-menu-item> -->
                <!-- <el-menu-item index="my-product-reviews"><i class="el-icon-caret-right"></i>My Product Reviews</el-menu-item> -->
                <!-- <el-menu-item index="newsletter-subscriptions"><i class="el-icon-caret-right"></i>Newsletter Subscriptions</el-menu-item> -->
                <!-- <el-menu-item index="my-credit-cards"><i class="el-icon-caret-right"></i>My Credit Cards</el-menu-item> -->
                <!-- <el-menu-item index="billing-agreements"><i class="el-icon-caret-right"></i>Billing Agreements</el-menu-item> -->
                <el-menu-item index="/my-account/my-wish-list"><i class="el-icon-caret-right"></i>My Wish List</el-menu-item>
                <el-menu-item index="/add-products"><i class="el-icon-caret-right"></i>Add Products</el-menu-item>
            </el-menu>
          </el-row>
        </el-col>
        <el-col :sm="19" :xs="24" :span="19" class="my-account-col-router">
            <router-view></router-view>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MyAccount',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      console.log(key + '==' + keyPath)
      this.$router.push(keyPath)
    },
    getSessionStorage () {
      var that = this
      const user = JSON.parse(sessionStorage.getItem('user'))
      that.user = user
    }
  },
  computed: {
    user () {
      return JSON.parse(this.$store.state.user)
    }
  }
}
</script>

<style scoped>
.my-account{
    text-align: left;
    padding: 20px;
}
.my-account-menu{
  border-right:0px;
}
.el-menu-item, .el-submenu__title {
    height: 30px;
    /* padding: 0; */
    position: relative;
    line-height: 1;
    border-bottom: 1px solid #ddd;
    color: #777;
    padding: 8px 15px;
}
.my-account-row-div{
  height: 60px;
  margin: 0px;
  padding: 0px;
  background-color: rgb(84, 92, 100);
  position: relative;
}
.my-account-col-router{
  padding: 20px 50px;
}
</style>
