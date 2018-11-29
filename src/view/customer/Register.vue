<template>
  <div class="register">
    <el-row class="el-row-register">
      <el-row class="el-row-register-strong">
        <strong>Create New Customer Account</strong>
      </el-row>
      <el-row class="el-row-register-content">
        <el-form :label-position="labelPosition" :model="registerForm" ref="registerForm" class="demo-dynamic register-form">
            <el-col :span="10" :xs="24" class="el-row-register-content-col">
                <el-card shadow="never" class="el-row-register-content-col-card">
                    <strong>PERSONAL INFORMATION</strong>
                    <el-form-item prop="firstName" label="First Name" class="register-form-item" :rules="[{ required: true, message: 'This is a required field.'}]">
                        <el-input v-model="registerForm.firstName"></el-input>
                    </el-form-item>
                    <el-form-item prop="lastName" label="Last Name" class="register-form-item" :rules="[{ required: true, message: 'This is a required field.'}]">
                        <el-input v-model="registerForm.lastName"></el-input>
                    </el-form-item>
                     <el-form-item class="register-form">
                        <input type="checkbox" name="is_subscribed" title="Sign Up for Newsletter" value="1" id="is_subscribed" class="checkbox">
                    </el-form-item>
                    <el-form-item class="register-form">
                        <el-button type="primary" class="sign-in" @click="submitForm('registerForm')">Create an Account</el-button>
                    </el-form-item>
                </el-card>
            </el-col>
            <el-col :span="10" :offset="4" :xs="24" class="el-row-register-content-col">
                <el-card shadow="never" class="el-row-register-content-col-card">
                    <strong>SIGN-IN INFORMATION</strong>
                    <el-form-item prop="email" label="Email" class="register-form-item" :rules="[
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ]">
                        <el-input v-model="registerForm.email"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="Password" class="register-form-item" :rules="[{ required: true, message: 'This is a required field.'}]">
                        <el-input v-model="registerForm.password"></el-input>
                    </el-form-item>
                    <el-form-item prop="checkPassword" label="Confirm Password" class="register-form-item" :rules="[{ required: true, message: 'This is a required field.'}]">
                        <el-input v-model="registerForm.checkPassword"></el-input>
                    </el-form-item>
                </el-card>
            </el-col>
        </el-form>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import api from '@/utils/api'

export default {
  name: 'register',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      labelPosition: 'top',
      registerForm: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        checkPassword: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      var that = this
      console.log(formName)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = {
            firstName: that.registerForm.firstName,
            lastName: that.registerForm.lastName,
            email: that.registerForm.email,
            password: that.registerForm.password,
            userClass: 2
          }
          api.post('/user/register', params).then(data => {
            if (data.code === '0') {
              // this.$router.push('/login')
              alert('Createed Success')
              let params = {
                email: data.user.email,
                password: data.user.password
              }
              api.post('/user/login', params).then(loginData => {
                if (loginData.code === '0') {
                  // sessionStorage.setItem('user', JSON.stringify(data.user))
                  this.$store.commit('$_setStorage', JSON.stringify(loginData.user))
                  this.$store.commit('$_setLogin', '1')
                  this.$router.push('/my-account')
                }
              })
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register{
  padding: 20px;
}
.el-row-register-strong{
  text-align: left;
}
.el-row-register-content{
  display: block;
  border: 1px solid #ececec;
  border-radius: 8px;
  background: #fff;
  border-top: 4px solid #000000;
  padding: 15px 10px 0;
  box-shadow: 0 2px 3px rgba(0,0,0,0.08);
  margin-top: 20px;
}
.el-row-register-content-col-card{
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
.register-form-item{
    margin-top: 0px;
    margin-bottom: 5px;
    color: #fff;
}
.sign-in{
  background: #000000;
  color: #fff;
  font-size: 15px;
}
.el-row-register-content-col-card-row{
  margin-top: 20px;
}
.el-row-register-content-col-card-row a{
  background: #000000;
  padding: 5px 15px;
  color: #fff;
}
</style>
