<template>
    <div id="my-footer">
        <el-footer>
            <el-col :span="24" class="footer-row-top" type="flex">
                <el-col :span="5" class="footer-col" :offset="2"  :xs="24">
                    <ul class="footer-ul">
                        <li><strong class="title">CORPORATE</strong></li>
                        <li>
                            <i class="el-icon-caret-right"></i><router-link to="/about-us">About us</router-link>
                        </li>
                        <li>
                            <i class="el-icon-caret-right"></i><router-link to="/contact-us">Contact us</router-link>
                        </li>
                        <li>
                            <i class="el-icon-caret-right"></i><router-link to="/my-account">My account</router-link>
                        </li>
                        <li>
                            <i class="el-icon-caret-right"></i><router-link to="/cables">Cables</router-link>
                        </li>
                        <li>
                            <i class="el-icon-caret-right"></i><router-link to="/temper">Temper</router-link>
                        </li>
                        <li>
                            <i class="el-icon-caret-right"></i><router-link to="/news">News</router-link>
                        </li>
                        <li>
                            <!-- <i class="el-icon-caret-right"></i><a href="https://www.visiontek.com/reviews-awards.html" title="Reviews &amp; Awards">Reviews &amp; Awards</a> -->
                        </li>
                    </ul>
                </el-col>
                <el-col :span="5" :xs="24">
                    <ul class="footer-ul">
                    <!-- <ul> -->
                        <li><strong class="title">CONTACT INFORMATION</strong></li>
                        <li>
                            <p><i class="el-icon-location"></i><b>Address:</b><br><span class="contact-span">105 Prairie Lake Rd Unit C, East Dundee, IL 60118</span></p>
                        </li>
                        <li>
                            <p><i class="el-icon-phone"></i><b>Phone:</b><br><span class="contact-span">(866) 883-5411</span></p>
                        </li>
                        <li>
                            <p><i class="el-icon-message"></i><b>Email:</b><br> <a class="footer-a" href="mailto:support@visiontek.com"><span class="contact-span">support@visiontek.com</span></a></p>
                        </li>
                            <li>
                            <!-- <i class="el-icon-phone"></i> -->
                            <p><i class="el-icon-time"></i><b>Working Days/Hours::</b><br><span class="contact-span"> Mon - Fri / 8:00AM - 5:00PM CST</span></p>
                        </li>
                    </ul>
                </el-col>
                <el-col :span="5" :xs="24">
                        <ul class="footer-ul">
                            <li> <strong class="title">CUSTOMER SERVICE</strong></li>
                        <li>
                            <i class="el-icon-caret-right"></i><router-link to="/support"> Support</router-link>
                        </li>
                        <li>
                            <i class="el-icon-caret-right"></i><router-link to="/terms-of-service">Terms of Service</router-link>
                        </li>
                        <li>
                            <i class="el-icon-caret-right"></i><router-link to="/privacy-policy">Privacy Policy</router-link>
                        </li>
                        <li>
                            <i class="el-icon-caret-right"></i><router-link to="/warranty-safety">Warranty & Safety</router-link>
                        </li>
                    </ul>
                </el-col>
                <el-col :span="5" :xs="24">
                    <ul class="footer-ul">
                        <li><strong class="title">BE THE FIRST TO KNOW</strong></li>
                        <li>
                            <span class="contact-span">Get all the latest information on Events,<br>Sales and Offers. Sign up for newsletter today.</span>
                        </li>
                        <li  style="margin-top:20px;">
                            <el-col :span="24" :xs="24"><span for="footer_newsletter" class="contact-span">Enter your email address</span></el-col>
                            <el-col :span="12" :xs="24">
                              <el-input v-model="email" class="footer-el-input" type="email" :rules="[{ required: true, message: 'Content can not be null'}]"></el-input>
                            </el-col>
                            <el-col :span="12" :xs="24">
                              <el-button type="primary" @click="onSubmit()"><span>Subscribe</span></el-button>
                            </el-col>
                        </li>
                    </ul>
                </el-col>
            </el-col>
            <el-col :span="24" class="footer-row-bottom">
                <el-col :span="24" :xs="24">
                    <router-link to="/" style="padding-right:30px;"><img :src="logo"/></router-link>
                    <a href="http://www.szbjd.com/" style="font-size:21px"><img :src="cn" style="width:33px;height:21px;;"/>CN</a>
                    <a href="https://www.facebook.com/bjdgroup.interactive/"><img :src="fb"  style="width:21px;height:21px;"/></a>
                    <a href="https://twitter.com/BJDGROUP2008"><img :src="tw" style="width:21px;height:21px;"/></a>
                    <a href="https://plus.google.com/u/0/113045667935168848164"><img :src="go" style="width:21px;height:21px;"/></a>
                    <a href="http://www.linkedin.com/in/Jabernet"><img :src="lin" style="width:21px;height:21px;"/></a>
                    <a href="mailto:admin@bjdgroup.com"><img :src="el" style="width:21px;height:21px;"/></a>
                    <!-- <ul> -->
                        <!-- <li style="margin-right:30px;"><router-link to="/"><img :src="logo"/></router-link></li>
                        <li><a href="http://www.szbjd.com/"><img :src="cn" style="width:45px;height:30px;"/>CN</a></li>
                        <li><a href="https://www.facebook.com/bjdgroup.interactive/"><img :src="fb"/></a></li>
                        <li><a href="https://twitter.com/BJDGROUP2008"><img :src="tw"/></a></li>
                        <li><a href="https://plus.google.com/u/0/113045667935168848164"><img :src="go"/></a></li>
                        <li><a href="http://www.linkedin.com/in/Jabernet"><img :src="lin"/></a></li>
                        <li><a href="mailto:admin@bjdgroup.com"><img :src="el"/></a></li> -->
                    <!-- </ul> -->
                </el-col>
                <el-col :span="24" :xs="24">
                    <span>Copyright©2016 SHENZHEN BJD GROUP CO., LTD All rights reserved.</span>
                </el-col>
            </el-col>
        </el-footer>
    </div>
</template>

<script>
import api from '@/utils/api'

export default {
  name: 'MyFooter',
  data () {
    return {
      email: '',
      logo: require('@/assets/images/logo.jpg'),
      cn: require('@/assets/images/cn.jpg'),
      fb: require('@/assets/images/Facebook.png'),
      tw: require('@/assets/images/Twitter.png'),
      go: require('@/assets/images/Google.png'),
      el: require('@/assets/images/email.png'),
      lin: require('@/assets/images/linkedin.png')
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key + '==' + keyPath)
      this.$router.push(keyPath)
    },
    onSubmit () {
      let that = this
      if (that.email === '') {
        alert('Email Address null')
        return false
      } else {
        let param = {email: that.email}
        api.postC('/user/subscribe-email', param).then(data => {
          if (data.code === '0') {
            alert('Subscribe Success')
            that.email = ''
          }
        })
      }
    }
  }
}
</script>

<style scope>
.el-footer{
    margin: 0px;
    padding: 0px;
}
.footer-row-top{
    background-color: #F5F5F5;
    margin: 0px;
    padding: 30px 40px;
    position: relative;
    min-height: 1px;
}
.footer-ul{
    list-style:none;
    /* margin-bottom:20px; */
    line-height:25px;
    padding-top: 20px;
    /* text-align: left; */
    text-align:center;
    text-align:left
}
.el-menu-item, .el-submenu__title {
    height: 30px;
    /* padding: 0; */
    position: relative;
    line-height: 1;
    /* border-bottom: 1px solid #ddd; */
    color: #777;
    padding: 8px 15px;
    text-align: left;
}
.footer-col{
    /* text-align: left; */
    position: relative;
}
/* .footer-menu{
    margin: 30px;
    padding-left: 26%;
} */
/* p{
    display: inline-block;
    vertical-align: top;
    margin: 0;
} */
.el-form-item__content{
    margin-left: 0px;
}
.footer-el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
    height: 30px;
}
.footer-el-input__inner {
    height: 30px;
}
.el-button--primary {
    color: #fff;
    background-color: rgb(3, 7, 12);
    border-color: rgb(3, 7, 12);
}
a{
    color: #777777;
}
a:link {color: #777777; text-decoration:none;}
a:hover {color: #777777; text-decoration:underline;} /*鼠标移近：红色、下划线 */
/* span{
    color: #777777;
    font-size: 0.9rem;
} */
.contact-span{
    /* padding-left: 8px; */
    color: #777777;
    font-size: 13px;
}
.footer-row-bottom{
    margin: 20px 0 20px 0;
}
.footer-row-bottom span{
    color: #777;
    line-height: 30px;
    margin: 0;
    font-style: normal;
    font-size: 11px;
}
/* .footer-row-bottom ul li{
    float:left;
    list-style: none;
    border-color: #fff;
    margin-left: 5px;
    font-size: 30px;
} */

</style>
