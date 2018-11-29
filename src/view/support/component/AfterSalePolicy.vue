<template>
    <div id="afterSalePolicy">
        <el-row class="afterSalePolicy-row">
          <el-row class="el-row-afterSalePolicy-strong">
            <strong>After Sale Policy</strong>
          </el-row>
          <el-row>
             <el-col :span="24" :xs="24" class="el-col-afterSalePolicy-content">
                <p>BJD committees to provide 30-Days for Return & Refund, 18 Months Quality Warranty and Lifetime Technical Support.</p><br>
                <p class="afterSalePolicy">Detail Information are as follows:</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" :xs="24" class="el-col-afterSalePolicy-content-col">
                <strong>1. Return & Refund, 18-Months Warranty, Lifetime Technical Support</strong>
                <p class="aftersalespolicy-p">First. For all purchases through BJD direct store, if there goes any kinds of malfunction, we provide 30-Days for Return & Refund, 18-Months Quality Warranty and Lifetime Technical Support.</p><br>
                <p>Second. Return and Refund:</p><br>
                <ul>
                  <li><span>We guarantee all of our products against quality defects within the defined period (eg, 30 Days for US buyers, for specific warranty period please refer to related local laws), customers could apply for return and refund under the condition that items (including accessories) are qualified for second sale.</span></li>
                  <li><span>Products with no quality-related issues can be returned within warranty period of receiving your order, however, you will be responsible for all shipping fees. For defect products, we will cover the shipping charge.</span></li>
                </ul>
                <p>Third. If a product is not specifically listed, the warranty period is 18 months. plus lifetime technical support.</p>
            </el-col>
            <el-col :span="24" :xs="24" class="el-col-afterSalePolicy-content-col">
                <strong>2. For your own benefits, please mind the following information</strong><br>
                <p  class="aftersalespolicy-p">For a smooth return and refund, quality warranty and technical support, please follow these steps</p><br>
                <p>1. Please submit detail information of buyers account, or invoice</p><br>
                <p>2. Describe the malfunctions you had experienced</p><br>
                <p>3. Return, exchange and quality warranty are not compatible with the following conditions</p><br>
                <ul>
                  <li><span>A. Products that had been artificially damaged, or undergone damage caused by mistake, abuse, wrong operation, inappropriate accessory connection, inappropriate operation and etc during course of using</span></li>
                  <li><span>B .Products had been opened from the inside or repaired by unauthorized agencies</span></li>
                  <li><span>C. Products that had been damaged by natural disasters such as earthquake, flood, hurricane and etc.</span></li>
                  <li><span>D. Products that exceeded our warranty period.</span></li>
                  <li><span>E. Proof of purchase such as Invoice lost, or without purchase proof.</span></li>
                  <li><span>F. Wrong proof of purchase, or tampered purchase proof.</span></li>
                </ul>
            </el-col>
            <el-col :span="24" :xs="24" class="el-col-afterSalePolicy-content-col">
                <strong>3. Cautions</strong><br>
                <p  class="aftersalespolicy-p">Products that had been artificially damaged, or undergone damage caused by mistake, abuse, wrong operation, inappropriate accessory connection, inappropriate operation and etc during course of using are exempt from our warranty policy. However, we still provides repair service for these items, only if buyers sign an Agreement for Special Repair Service first.</p><br>
                <p>Please note that cost cause by repairing and maintenance service mentioned above are on buyers' part.</p>
            </el-col>
          </el-row>
        </el-row>
    </div>
</template>

<script>
import api from '@/utils/api'

export default {
  name: 'AfterSalePolicy',
  data () {
    return {
      policyList: []
    }
  },
  methods: {
    getASPList () {
      let that = this
      api.post('/after-sale-policy/query-asp', null).then(data => {
        console.log(data)
        if (data.code === '0') {
          that.policyList = data.list
        } else {
          alert('AfterSalePolicy NUll')
        }
      })
    }
  },
  created () {
    this.getASPList()
  }
}
</script>

<style>
.afterSalePolicy-row{
  display: block;
  border: 1px solid #ececec;
  border-radius: 8px;
  background: #fff;
  border-top: 4px solid #000000;
  padding: 15px 10px 0;
  box-shadow: 0 2px 3px rgba(0,0,0,0.08);
}
.el-row-afterSalePolicy-strong{
    font-size: 24px;
    text-align: left;
    border-bottom: 1px solid #000000;
    margin: 20px 0 0 0;
}
.el-col-afterSalePolicy-content{
    font-size: 14px;
    margin: 0 0 20px 0;
}
.el-col-afterSalePolicy-content-col{
    margin: 20px 0 10px 10px;
    text-align: left;
    /* color: #777777; */
    font-size: 14px;
}
/* .el-col-afterSalePolicy-content-col p{
   margin: 0 0 0 10px;
} */
.el-col-afterSalePolicy-content-col ul li{
    font-size: 14px;
    margin: 0 0 0 20px;
}
.aftersalespolicy-p{
  margin: 10px 0 0 0;
}
</style>
