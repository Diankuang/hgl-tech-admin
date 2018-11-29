<template>
    <div id="termsservice">
        <el-row class="termsservice-row">
            <el-row class="el-row-termsservice-strong">
                <strong>Terms Of Service</strong>
            </el-row>
            <el-row class="el-row-termsservice-title">
                <el-col :span="24" :xs="24" class="el-col-termsservice-content-col">
                    <strong>1. Introduction</strong><br>
                    <p class="termsservice">These Terms and Conditions of Use (the "Terms of Use") apply to www.bjdgroup.cc . By using this website, you accept these Terms of Use in full. If you disagree with these Terms of Use or any part of these Terms of Use, you must not use this website. BJD reserves the right, at its sole discretion, to change, modify, add or remove portions of these Terms of Use, at any time. If you continue to use the Site, you shall check the terms of use periodically for changes.</p>
                </el-col>
                <el-col :span="24" :xs="24" class="el-col-termsservice-content-col">
                    <strong>2. Acceptance clause</strong><br>
                    <p class="termsservice">You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website, or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.</p><br>
                    <p>You must not use this website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.</p><br>
                    <p>You must not conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to this website without BJD's express written consent.</p><br>
                    <p>You must not use this website to transmit or send unsolicited commercial communications.</p><br>
                    <p>You must not use this website for any purposes related to marketing without BJD’s express written consent</p>
                </el-col>
                <el-col :span="24" :xs="24" class="el-col-termsservice-content-col">
                    <strong>3. Disclaimers</strong><br>
                    <p class="termsservice">By using the BJD Web site, you expressly agree that use of the BJD Web site is at your sole risk. The BJD Web site is provided on an "AS IS" and "as available" basis.BJD does not promise that the site or any content, service or feature of the site will be error-free or uninterrupted,or that defects will be corrected,or that your use of the site will provide specific results.All information provided on the site is subject to change without notice.BJD can not ensure that any files or other data you download from the site will be free of viruses or contamination or destructive features. BJD disclaims all warranties,express or implied ,including any warranties of accuracy, non-infringement, merchantability and fitness for a particular purpose. </p>
                </el-col>
                <el-col :span="24" :xs="24" class="el-col-termsservice-content-col">
                    <strong>4. Limitation of Liability</strong><br>
                    <p class="termsservice">BJDGROUP.CC will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website:</p><br>
                    <ul>
                        <li><span>To the extent that the website is provided free-of-charge, for any direct loss</span></li>
                        <li><span>For any indirect, special or consequential loss</span></li>
                        <li><span> For any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.</span></li>
                    </ul>
                    <p>These limitations of liability apply even if BJDGROUP.CC has been expressly advised of the potential loss.</p>
                </el-col>
                 <el-col :span="24" :xs="24" class="el-col-termsservice-content-col">
                    <strong>5. Violation of the Terms and Use</strong><br>
                    <p class="termsservice">You acknowledge that violations of the Terms of Use could be subject to criminal or civil penalties. BJD may disclose any information we have about you (including your identity) if we determine that such disclosure is necessary in connection with any investigation or complaint regarding your use of the Site, or to identify, contact, and bring legal action against someone who may be causing injury to or interference with (either intentionally or unintentionally) BJD's rights or property, or the rights or property of visitors to or users of the Site, including BJD's customers.</p><br>
                    <p>If BJD does take any legal action against you as a result of your violation of these Terms of Use, BJD will be entitled to recover from you, and you agree to pay, all reasonable attorneys' fees and costs of such action, in addition to any other relief granted to BJD. You agree that BJD will not be liable to you or to any third party for termination of your access to the Site as a result of any violation of these Terms of Use.</p>
                 </el-col>
          </el-row>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'TermsOfService',
  data () {
    return {

    }
  },
  methods: {},
  created () {}
}
</script>

<style>
#termsservice{
    padding: 20px;
}
.termsservice-row{
  display: block;
  border: 1px solid #ececec;
  border-radius: 8px;
  background: #fff;
  border-top: 4px solid #000000;
  padding: 15px 10px 0;
  box-shadow: 0 2px 3px rgba(0,0,0,0.08);
  /* margin-top: 20px; */
}
.el-row-termsservice-strong{
    font-size: 24px;
    text-align: left;
    border-bottom: 1px solid #000000;
    margin: 20px 0 10px 0;
}
.el-col-termsservice-title{
    margin: 20px 0px 0px 20px;
    text-align: left;
    font-size: 15px;
}
.el-col-termsservice-title p{
    margin: 5px 0 0 0;
}
.el-col-termsservice-content{
    margin: 20px 0px 0px 20px;
    text-align: left;
    font-size: 15px;
    border-left: 1px solid #ddd;
}
.el-col-termsservice-content-col{
    margin: 20px 0 20px 10px;
    text-align: left;
}
.termsservice{
    margin: 10px 0 0 0;
}
.el-col-termsservice-content-col span{
    font-size: 14px;
}
.el-col-termsservice-content-col ul li{
    margin: 0 0 0 20px;
};
</style>
