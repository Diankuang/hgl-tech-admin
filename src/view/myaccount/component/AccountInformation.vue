<template>
  <div class="account-information">
    <el-row class="account-row">
      <el-row class="account-row-strong">
        <strong>Account Information</strong>
      </el-row>
      <el-row class="account-row-content">
        <el-col :sm="10" :xs="24" :span="10" class="account-row-content-col">
          <el-row class="account-row-content-col-title">
            <strong><span class="account-row-content-col-title-span">CONTACT INFORMATION</span></strong>
          </el-row>
          <el-row class="account-row-content-col-content">
            <p>{{userInfo.firstName}}&nbsp;{{userInfo.lastName}}<br>{{userInfo.email}}</p>
          </el-row>
          <el-row class="account-row-content-col-actions">
            <router-link to="edit-account"><span class="account-row-content-col-actions-span">Edit</span></router-link>
            <router-link to="forgot-password"  style="padding-left:20px;" class="account-row-content-col-actions-span">Forgot Your Password?</router-link>
          </el-row>
        </el-col>
        <el-col :sm="11" :xs="24" :span="11" :offset="3" class="account-row-content-col">
          <el-row class="account-row-content-col-title">
            <strong><span class="account-row-content-col-title-span">NEWSLETTERS</span></strong>
          </el-row>
          <el-row class="account-row-content-col-content">
            <p>userInfo.subscribe</p>
          </el-row>
          <el-row class="account-row-content-col-actions">
            <router-link to="edit-subscription" class="account-row-content-col-actions-span">Edit</router-link>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'AccountInformatoin',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.account-information{
    position: relative;
}
.account-row-content{
    padding-top: 10px;
}
.account-row-content-col{
    display: block;
    border: 1px solid #ececec;
    border-radius: 8px;
    background: #fff;
    /* border-top: 1px solid #000000; */
    /* padding: 15px 10px 0; */
    /* box-shadow: 0 2px 3px rgba(0,0,0,0.08); */
    margin-top: 10px;
}
.account-row-content-col-title{
    display: block;
    border-bottom: 1px solid #ececec;
    padding: 10px 15px;

}
.account-row-content-col-title-span{
    color: #313131;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    line-height: 1.4;
    font-size: 0.8rem;
}
.account-row-content-col-content{
    display: block;
    padding: 30px 15px;
    border-bottom: 1px solid #ececec;
}
.account-row-content-col-content p{
    color: #777;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
    font-size: 0.8rem;
    margin-bottom: 30px;
}
.account-row-content-col-actions{
    padding: 10px 15px;
}
.account-row-content-col-actions-span{
    color: #313131;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    line-height: 1.4;
    font-size: 0.8rem;
}
</style>
