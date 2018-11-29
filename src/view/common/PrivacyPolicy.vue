<template>
    <div id="privacy-policy">
        <el-row class="privacy-policy-row">
          <el-row class="el-row-privacy-policy-strong">
            <strong>Privacy Policy</strong>
         </el-row>
         <el-row class="el-row-privacy-policy-title">
            <el-col :span="6" :xs="24" class="el-col-privacy-policy-title">
                <strong>This Privacy Policy tells you:</strong><br>
                <p class="privacy-policy-p">What information we collect?</p><br>
                <p>How do we use the information we collect?</p><br>
                <p>How do we secure your personal information?</p><br>
                <p>Your choices regarding your personal information</p>
            </el-col>
            <el-col :span="16" :xs="24" class="el-col-privacy-policy-content">
                <el-col :span="24" :xs="24" class="el-col-privacy-policy-content-col">
                    <strong>1. Information We Collect</strong><br>
                    <p class="privacy-policy-p">We receive and may store any information you enter on our websites. For example, we collect information from you when you place an order, or use any of our services.</p><br>
                    <p>The information we collect from you includes things like:</p><br>
                    <ul>
                        <li><span>Your name</span></li>
                        <li><span>Your address</span></li>
                        <li><span>Your company information</span></li>
                        <li><span>Your e-mail address</span></li>
                        <li><span>Your phone number</span></li>
                        <li><span>Your payment information</span></li>
                    </ul>
                </el-col>
                <el-col :span="24" :xs="24"  class="el-col-privacy-policy-content-col">
                    <strong>2. Information From Other Sources</strong><br>
                    <p class="privacy-policy-p">We may also receive information about you from other sources, including third parties that help us update, expand and analyze our records and identify new customers.</p><br>
                </el-col>
                <el-col :span="24" :xs="24"  class="el-col-privacy-policy-content-col">
                    <strong>3. How Do We Use the Information We Collect</strong><br>
                    <p class="privacy-policy-p">We use the information we collect for things like:</p><br>
                    <ul>
                        <li><span>Fulfilling orders and requests for products, services or information</span></li>
                        <li><span>Processing returns and exchanges</span></li>
                        <li><span>Delivering products</span></li>
                        <li><span>Marketing and advertising products and services</span></li>
                        <li><span>Conducting research and analysis</span></li>
                        <li><span>Establishing and managing your accounts with us</span></li>
                        <li><span>Communicating things like special events, promotions and surveys</span></li>
                    </ul>
                    <p>We may send occasional e-mail updates with information about new products, software, or promotions.Operating, evaluating and improving our business</p>
                </el-col>
                <el-col :span="24" :xs="24"  class="el-col-privacy-policy-content-col">
                    <strong>4. How Do We Protect the Information We Collect</strong><br>
                    <p class="privacy-policy-p">We may use the information we collect to improve our products, services, and bjdgroup.cc  website. We also use this information for auditing, research, and analysis. In addition, we send occasional e-mail updates with information about new products, software, or promotions. If you do not want to receive e-mails from BJD, you may notify us to remove you from our mailing list. We use reasonable security measures to protect the confidentiality of personal information under our control and appropriately limit access to it. We cannot ensure or warrant the security of any information you transmit to us and you do so at your own risk.</p>
                </el-col>
                <el-col :span="24" :xs="24"  class="el-col-privacy-policy-content-col">
                    <strong>5. Your Choices Regarding the Information We Collect</strong><br>
                    <p class="privacy-policy-p">You may choose to:</p><br>
                    <ul>
                        <li><span>Stop receiving marketing or promotional e-mails, direct mail, phone and mobile marketing communications</span></li>
                        <li><span>Update and correct your personal information</span></li>
                         <li><span> Cancel your account or request that we no longer use your information to provide you services</span></li>
                    </ul>
                    <p>To do any of these, let us know by one of these methods:</p><br>
                    <ul>
                        <li><span>Follow the directions in a marketing e-mail or direct mail or mobile communication that you receive from us.</span></li>
                        <li><span>Send an e-mail with your request and current contact information to 888@szbdd.com </span></li>
                        <li><span>Send a letter with your request and current contact information to our headquarters.</span></li>
                    </ul>
                </el-col>
                <el-col :span="24" :xs="24"  class="el-col-privacy-policy-content-col">
                    <strong>6. Links to Other Websites</strong><br>
                    <p class="privacy-policy-p">Our websites link to other websites, many of which have their own privacy policies. Be sure to review the privacy policy on the site you're visiting.</p>
                </el-col>
                <el-col :span="24" :xs="24"  class="el-col-privacy-policy-content-col">
                    <strong>7. Privacy Policy Updates</strong><br>
                    <p class="privacy-policy-p">We may need to update our Privacy Policy as our customers grow and evolve. If we make significant changes to the Privacy Policy, we'll post a prominent message on our website(s).</p>
                </el-col>
            </el-col>
         </el-row>
         <el-row class="el-row-privacy-policy-content"></el-row>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy',
  data () {
    return {

    }
  },
  methods: {},
  created () {}
}
</script>

<style>
#privacy-policy{
  padding: 20px;
}
.privacy-policy-row{
  display: block;
  border: 1px solid #ececec;
  border-radius: 8px;
  background: #fff;
  border-top: 4px solid #000000;
  padding: 15px 10px 20px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.08);
  margin-top: 20px;
}
.el-row-privacy-policy-strong{
    font-size: 24px;
    text-align: left;
    border-bottom: 1px solid #000000;
    margin: 20px 0 10px 0;
}
.el-col-privacy-policy-title{
    margin: 20px 0px 0px 20px;
    text-align: left;
    font-size: 15px;
}
.el-col-privacy-policy-title p{
    margin: 5px 0 0 0;
}
.el-col-privacy-policy-content{
    margin: 20px 0px 0px 20px;
    text-align: left;
    font-size: 15px;
    border-left: 1px solid #ddd;
}
.el-col-privacy-policy-content-col{
    margin: 0 0 30px 10px;
}
/* .el-col-privacy-policy-content-col p{
    margin: 5px 0 0 20px;
} */
.el-col-privacy-policy-content-col ul li{
    margin: 0 0 0 20px;
    font-size: 14px;
}
.privacy-policy-p{
    margin: 10px 0 0 0;
}
</style>
