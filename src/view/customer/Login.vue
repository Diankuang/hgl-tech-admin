<template>
  <div class="admin-login"  :height = "loginHeight+'px'">
    <el-row class="el-row-login">
        <el-col :span="24" :xs="24" class="el-row-login-content">
          <el-card shadow="never" class="el-row-login-content-col-card">
            <el-form  :model="loginForm" ref="loginForm" >
              <el-form-item prop="email" label="Email" class="login-form-item" :rules="[
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
              ]">
                <el-input v-model="loginForm.email"></el-input>
              </el-form-item>
              <el-form-item prop="password" label="Password" class="login-form-item" :rules="[{ required: true, message: 'Password can not be null'}]">
                <el-input v-model="loginForm.password"></el-input>
              </el-form-item>
              <el-form-item class="login-form-item">
                <el-button type="primary" class="sign-in" @click="submitForm('loginForm')"> Sign In</el-button>
                <router-link to="/reset-password" class="login-a-a">Sign InForgot Your Password?</router-link>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import api from '@/utils/api'

export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      labelPosition: 'left',
      loginForm: {
        email: '',
        password: ''
      },
      loginHeight: 0
    }
  },
  methods: {
    // submitForm () {
    //   let params = {
    //     email: '1832054053@qq.com',
    //     password: '123456'
    //   }
    //   // console.log(res)
    // },
    submitForm (loginFrom) {
      var that = this
      this.$refs[loginFrom].validate((valid) => {
        if (valid) {
          let params = {
            email: that.loginForm.email,
            password: that.loginForm.password
          }
          api.post('/user/login', params).then(data => {
            if (data.code === '0') {
              sessionStorage.setItem('user', JSON.stringify(data.user))
              // let loginUser = sessionStorage.getItem('user')
              // this.$store.commit('$_setStorage', JSON.stringify(data.user))
              // this.$store.commit('$_setLogin', '1')
              // this.$store.commit('$_setUserId', data.user.userId)
              this.$router.push('/home')
            } else {
              alert(data.msg)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  created () {
    this.loginHeight = window.innerHeight
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admin-login{
  background: #dddddd;
  width: 100%;
  height: 100%;
  position: relative;
  overflow:hidden;
  padding:0px;
  margin:0px;
}
.el-row-login{
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}
.el-row-login-content{
  display: block;
  border: 1px solid #ececec;
  border-radius: 8px;
  background: #fff;
  border-top: 4px solid #000000;
  /* padding: 15px 10px 0; */
  box-shadow: 0 2px 3px rgba(0,0,0,0.08);
  margin-top: 0px;
}
.el-row-login-content-col-card{
  text-align: left;
  border: none;
  /* padding: 0px; */
  color: #777;
  width: 382px;
  height: 305px;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}
.login-form-item{
    margin-top: 20px;
    margin-bottom: 5px;
    color: #fff;
}
.login-a-a{
    padding-left: 20px;
}
.sign-in{
  background: #000000;
  color: #fff;
  font-size: 15px;
}
</style>
