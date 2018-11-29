<template>
  <div class="contact">
    <el-row class="el-row-contact">
      <el-row class="el-row-contact-strong">
        <strong>Contact us</strong>
      </el-row>
      <el-row class="el-row-contact-content">
        <el-col :span="12" :xs="24" class="el-row-contact-content-col">
          <el-card shadow="never" class="el-row-contact-content-col-card1">
            <strong>BJD GROUP CO,. LIMITED</strong>
            <el-row class="el-row-contact-content-col-card-row">
              <p>Shenzhen Headquarter : C Building, Keshangmei Technology Park,Chongqing Road, Fuyong Town, Bao'an District, Shenzhen, China 518103</p><br>
              <p>Tel : 0086-755-29595841   29595842   29595843</p><br>
              <p>Fax : 0086-755-29595847</p><br>
              <p>Email: admin@bjdgroup.cc</p>
            </el-row>
            <el-row class="el-row-contact-content-col-card-row">
              <p>Hunan Factory: Baijunda Industrial Park, Guiyang Country Industrial Zone, Chenzhou, Hunan Province, China</p><br>
              <p>Tel: 0086-735-2456996</p>
            </el-row>
            <el-row class="el-row-contact-content-col-card-row">
              <p>India Factory: B5, Sector 65, Noida, Uttar Pradesh,India</p><br>
              <p>Tel: 0091-120 4999111</p>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="12" :xs="24" class="el-row-contact-content-col" >
          <el-card shadow="never" class="el-row-contact-content-col-card2">
            <strong>Write Us</strong><br>
            <!-- <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p> -->
             <el-form :label-position="labelPosition" :model="contactForm" label-width="80px" ref="contactForm" class="demo-dynamic contact-form" size="mini">
              <el-form-item prop="name" label="Name" class="contact-form-item" :rules="[
                { required: true, message: 'Name can not be null', trigger: 'blur' }]">
                <el-input v-model="contactForm.name"></el-input>
              </el-form-item>
              <el-form-item prop="tel" label="TEL" class="contact-form-item" :rules="[
                { required: true, message: 'TEL can not be null', trigger: 'blur' }]">
                <el-input v-model="contactForm.tel"></el-input>
              </el-form-item>
              <el-form-item prop="email" label="E-Mail" class="contact-form-item" :rules="[
                { required: true, message: 'E-Mail can not be null', trigger: 'blur' },
                { type: 'email', message: 'Illegal E-mail address', trigger: ['blur', 'change'] }
              ]">
                <el-input v-model="contactForm.email"></el-input>
              </el-form-item>
              <el-form-item prop="content" label="Content" class="contact-form-item" :rules="[{ required: true, message: 'Content can not be null'}]">
                <el-input v-model="contactForm.content"></el-input>
              </el-form-item>
              <el-form-item prop="code" label="code" class="contact-form-item" :rules="[{ required: true, message: 'code can not be null'}]">
                <el-input v-model="contactForm.code"></el-input>
              </el-form-item>
              <el-form-item class="contact-form-item">
                <el-button type="primary" class="sign-in" @click="submitForm('contactForm')">submit</el-button>
                <el-button @click="resetForm('contactForm')">reset</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import api from '@/utils/api'

export default {
  name: 'ContactUs',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      labelPosition: 'right',
      contactForm: {
        name: '',
        tel: '',
        email: '',
        contect: '',
        code: ''
      },
      currentCode: ''
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
    submitForm (contactFrom) {
      let that = this
      console.log(that.contactFrom)
      this.$refs[contactFrom].validate((valid) => {
        if (valid) {
          let params = that.contactForm
          api.post('/contact/add-contact', params).then(data => {
            console.log(data)
            if (data.code === '0') {
              // sessionStorage.setItem('user', JSON.stringify(data.user))
              // this.$store.commit('$_setStorage', JSON.stringify(data.user))
              // this.$store.commit('$_setLogin', '1')
              // this.$router.push('/my-account')
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (contactFrom) {
      this.$refs[contactFrom].resetFields()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row-contact{
  padding: 20px;
}
.el-row-contact-strong{
  text-align: left;
}
.el-row-contact-content{
  display: block;
  border: 1px solid #ececec;
  border-radius: 8px;
  background: #fff;
  border-top: 4px solid #000000;
  padding: 15px 10px 0;
  box-shadow: 0 2px 3px rgba(0,0,0,0.08);
  margin-top: 20px;
}
.el-row-contact-content-col-card1{
  text-align: left;
  border: none;
  color: #777;
}
.el-row-contact-content-col-card2{
  text-align: left;
  border: none;
  /* padding: 0px; */
  color: #777;
  border-left: #ddd 1px solid
}
.el-form-strong{
    color: #777;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
    font-size: 1.3rem;
}
.contact-form-item{
    margin-top: 20px;
    margin-bottom: 5px;
    color: #fff;
}
.el-row-contact-content-col-card1 a{
    color: #777;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
}
.el-row-contact-content-col-card2 a{
    color: #777;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
}
.contact-a-a{
    padding-left: 20px;
}
.sign-in{
  background: #000000;
  color: #fff;
  font-size: 15px;
}
.el-row-contact-content-col-card1 p{
  margin-top: 20px;
  font-size: 0.8rem;
}
.el-row-contact-content-col-card2 p{
  margin-top: 20px;
  font-size: 0.8rem;
}
.el-row-contact-content-col-card-row{
  /* margin-top: 20px; */
}
.el-row-contact-content-col-card-row a{
  background: #000000;
  padding: 5px 15px;
  color: #fff;
}
</style>
