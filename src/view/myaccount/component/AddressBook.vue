<template>
  <div class="address-book">
    <el-row class="el-row-address-book">
      <el-row class="el-row-address-book-strong">
        <strong>Create New Customer Account</strong>
      </el-row>
      <el-row class="el-row-address-book-content">
        <el-form :label-position="labelPosition" :model="userFrom" ref="userFrom" >
            <el-col :span="11" :xs="24" class="el-row-address-book-content-col">
                <el-card shadow="never" class="el-row-address-book-content-col-card">
                    <strong><span class="address-book-row-content-col-title-span">CONTACT INFORMATION</span></strong>
                    <el-form-item prop="firstName" label="First Name" class="address-book-form-item" :rules="[{ required: true, message: 'This is a required field.'}]">
                        <el-input v-model="userFrom.firstName"></el-input>
                    </el-form-item>
                    <el-form-item prop="lastName" label="Last Name" class="address-book-form-item" :rules="[{ required: true, message: 'This is a required field.'}]">
                        <el-input v-model="userFrom.lastName"></el-input>
                    </el-form-item>
                    <el-form-item prop="company" label="Company" class="address-book-form-item">
                        <el-input v-model="userFrom.company"></el-input>
                    </el-form-item>
                    <el-form-item prop="phoneNumber" label="Phone Number" class="address-book-form-item" :rules="[{ required: true, message: 'This is a required field.'}]">
                        <el-input v-model="userFrom.phoneNumber"></el-input>
                    </el-form-item>
                    <el-form-item prop="fax" label="Fax" class="address-book-form-item" :rules="[{ required: true, message: 'This is a required field.'}]">
                        <el-input v-model="userFrom.fax"></el-input>
                    </el-form-item>
                    <el-form-item class="address-book-form">
                        <el-button type="primary" class="sign-in" @click="submitForm('userFrom')">Save Address</el-button>
                    </el-form-item>
                </el-card>
            </el-col>
            <el-col :span="11" :offset="2" :xs="24" class="el-row-address-book-content-col">
                <el-card shadow="never" class="el-row-address-book-content-col-card">
                    <strong><span class="address-book-row-content-col-title-span">ADDRESS</span></strong>
                    <el-form-item prop="password" label="Street Address" class="address-book-form-item" :rules="[{ required: true, message: 'This is a required field.'}]">
                        <el-input v-model="userFrom.streetAddress"></el-input>
                    </el-form-item>
                    <el-form-item prop="city" label="City" class="address-book-form-item" :rules="[{ required: true, message: 'This is a required field.'}]">
                        <el-input v-model="userFrom.city"></el-input>
                    </el-form-item>
                     <el-form-item prop="state" label="State/Province" class="address-book-form-item" :rules="[{ required: true, message: 'This is a required field.'}]">
                        <el-input v-model="userFrom.state"></el-input>
                    </el-form-item>
                    <el-form-item prop="postCode" label="Zip/Postal Code" class="address-book-form-item" :rules="[{ required: true, message: 'This is a required field.'}]">
                        <el-input v-model="userFrom.postCode"></el-input>
                    </el-form-item>
                     <el-form-item prop="country" label="Country" class="address-book-form-item" :rules="[{ required: true, message: 'This is a required field.'}]">
                        <el-input v-model="userFrom.country"></el-input>
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
  name: 'AddressBook',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      labelPosition: 'top',
      userFrom: {
        userId: '4563258971',
        firstName: '',
        lastName: '',
        password: '',
        company: '',
        phoneNumber: '',
        fax: '',
        streetAddress: '',
        city: '',
        state: '',
        postCode: '',
        country: ''
      },
      confirmPasswprd: ''
    }
  },
  methods: {
    submitForm (formName) {
      let that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = that.userFrom
          api.post('/user/save-address', params).then(data => {
            if (data.code === '0') {
              alert('Save Address Success')
            } else {
              alert('Try Again Please')
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getRow (userInfo) {
      let that = this
      that.userFrom = userInfo
    }
  },
  computed: {
    userInfo () {
      // let user = JSON.parse(this.$store.state.user)
      return JSON.parse(sessionStorage.getItem('user'))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row-address-book-strong{
  text-align: left;
}
.el-row-address-book-content{
  display: block;
  border: 1px solid #ececec;
  border-radius: 8px;
  background: #fff;
  border-top: 4px solid #000000;
  padding: 15px 10px 0;
  box-shadow: 0 2px 3px rgba(0,0,0,0.08);
  margin-top: 20px;
}
.el-row-address-book-content-col-card{
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
.address-book-form-item{
    margin-top: 5px;
    margin-bottom: 0px;
    color: #fff;
}
.sign-in{
    background: #000000;
    color: #fff;
    font-size: 15px;
}
.el-row-address-book-content-col-card-row{
  margin-top: 20px;
}
.el-row-address-book-content-col-card-row a{
  background: #000000;
  padding: 5px 15px;
  color: #fff;
}
.address-book-row-content-col-title-span{
    color: #313131;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    line-height: 1.4;
    font-size: 0.8rem;
}
.address-book-form{
    margin-top: 20px;
    margin-bottom: 5px;
    color: #fff;
}
</style>
