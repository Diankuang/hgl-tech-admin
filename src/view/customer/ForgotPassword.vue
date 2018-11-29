<template>
  <div class="reset">
    <el-row class="el-row-reset">
      <el-row class="el-row-reset-strong">
        <strong>Reset Password</strong>
      </el-row>
      <el-row class="el-row-reset-content">
        <el-col :span="10" :xs="24" class="el-row-reset-content-col">
          <el-card shadow="never" class="el-row-reset-content-col-card">
            <!-- <strong>Please enter your email address below to receive an email get verification code.</strong> -->
            <el-form :label-position="labelPosition" :model="resetForm" ref="resetForm" class="demo-dynamic reset-form" size="mini">
              <p>Please enter your email address below to receive an email get verification code.</p>
              <el-form-item prop="email" label="Email" class="reset-form-item" :rules="[
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
              ]">
                <el-input v-model="resetForm.email">
                  <template slot="append">
                    <el-button v-show="sendAuthCode" type="primary" @click="getVerifyCode('resetForm')">Get Validation Code</el-button>
                    <span v-show="!sendAuthCode" class="auth_text">Retrieve after<span class="auth_text_blue">{{authTime}} </span> seconds</span>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item prop="password" label="Verification Code" class="reset-form-item" :rules="[{ required: true, message: 'Password can not be null'}]">
                <el-input v-model="resetForm.verifyCode"></el-input>
              </el-form-item>
              <el-form-item prop="password" label="New Password" class="reset-form-item" :rules="[{ required: true, message: 'Password can not be null'}]">
                <el-input v-model="resetForm.password"></el-input>
              </el-form-item>
              <el-form-item class="reset-form-item">
                <el-button type="primary" class="sign-in" @click="submitForm('resetForm')">Reset My Password</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
        <el-col :span="10" :offset="4" :xs="24" class="el-row-reset-content-col">
          <el-card shadow="never" class="el-row-reset-content-col-card">
            <strong>New Customers</strong>
            <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
            <el-row class="el-row-reset-content-col-card-row">
              <router-link to="register">Create an Account</router-link>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import api from '@/utils/api'

export default {
  name: 'reset',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      labelPosition: 'top',
      resetForm: {
        email: '',
        password: '',
        verifyCode: ''
      },
      sendAuthCode: true,
      authTime: 0
    }
  },
  methods: {
    submitForm (resetForm) {
      let that = this
      this.$refs[resetForm].validate((valid) => {
        if (valid) {
          let params = {
            email: that.resetForm.email,
            password: that.resetForm.password
          }
          api.post('/user/reset', params).then(data => {
            if (data.code === '0') {
              sessionStorage.setItem('user', JSON.stringify(data.user))
              this.$router.push('/my-account')
            } else {
              alert(data.msg)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getAuthCode () {
      this.sendAuthCode = false
      this.authTime = 60
      var authTimetimer = setInterval(() => {
        this.authTime--
        if (this.authTime <= 0) {
          this.sendAuthCode = true
          clearInterval(authTimetimer)
        }
      }, 1000)
    },
    getVerifyCode (resetForm) {
      let that = this
      that.getAuthCode()
      let params = {
        email: that.resetForm.email
      }
      api.postC('/common/send-email', params).then(data => {
        if (data.code === '0') {
        } else {
          alert(data.msg)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reset{
  padding: 20px;
}
.el-row-reset-strong{
  text-align: left;
}
.el-row-reset-content{
  display: block;
  border: 1px solid #ececec;
  border-radius: 8px;
  background: #fff;
  border-top: 4px solid #000000;
  padding: 15px 10px 0;
  box-shadow: 0 2px 3px rgba(0,0,0,0.08);
  margin-top: 20px;
}
.el-row-reset-content-col-card{
  text-align: left;
  border: none;
  /* padding: 0px; */
  color: #777;
}
.el-form-strong{
    color: #777;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
    font-size: 1.3rem;
}
.reset-form-item{
    margin-top: 20px;
    margin-bottom: 5px;
    color: #fff;
}
.el-row-reset-content-col-card a{
    color: #777;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
}
.reset-a-a{
    padding-left: 20px;
}
.sign-in{
  background: #000000;
  color: #fff;
  font-size: 15px;
}
.el-row-reset-content-col-card p{
  margin-top: 20px;
  font-size: 0.8rem;
}
.el-row-reset-content-col-card-row{
  margin-top: 20px;
}
.el-row-reset-content-col-card-row a{
  background: #000000;
  padding: 5px 15px;
  color: #fff;
}
.auth_text{
  margin: 0;
  padding: 0;
}
</style>
