<template>
    <div id="warranty-safety">
        <el-row class="warranty-safety-row">
            <el-row class="el-row-warranty-safety-strong">
                <strong>Warranty & Safety</strong>
            </el-row>
            <el-row class="el-row-warranty-safety-title">
                <el-col :span="24" :xs="24" class="el-col-warranty-safety-content-col">
                    <strong>1. Warranty</strong><br>
                    <p class="warranty-safety">BJD’s responsibility with regard to this limited warranty shall be limited solely to the repair or replacement at its option, of any product, which fails during normal consumer  use for a period of 1 Year from the date of purchase. We warranty the product against defects in material and workmanship under normal usage, as described in the user manual, for a period of 1 years for car chargers and 1 years for USB adapters from the date of purchased. This warranty does not extend to damage or failure, which results from misuse, neglect, accident, alteration, abuse, improper installation or maintenance. If at any time during the 1 Year period following the purchase the product fails due to defects in materials or workmanship, return the defective product with freight prepaid and proof of purchase. </p>
                </el-col>
                <el-col :span="24" :xs="24" class="el-col-warranty-safety-content-col">
                    <strong>2. Safety Policies</strong><br>
                    <p class="warranty-safety">This safety guideline is to help you operate your charger safely, to ensure your personal safety, and to reduce the risks of fire, electric shock, or injury.</p><br>
                    <ul>
                        <li><span>Read all instructions in this user manual carefully before operating the charger.</span></li>
                        <li><span>Do not open the device; there are no serviceable parts inside.</span></li>
                        <li><span>Always follow the instructions and warnings closely.</span></li>
                        <li><span>Do not operate the charger near a heat source, a heat vent, or under direct sunlight for long durations. Your chargers should be used indoor between temperatures 0°C-40°C (32°F-104°F).</span></li>
                        <li><span>Do not use your charger in a wet environment. For example, near bathtubs, sinks, or swimming pools.</span></li>
                        <li><span>Verify the power requirement of the device you intend to charge before operating your charger, charging with the wrong voltage or wattage may harm your device.</span></li>
                    </ul>
                </el-col>
                <el-col :span="24" :xs="24" class="el-col-warranty-safety-content-col" style="height:20px;"></el-col>
          </el-row>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'WarrantySafety',
  data () {
    return {

    }
  },
  methods: {},
  created () {}
}
</script>

<style>
#warranty-safety{
    padding: 20px;
}
.warranty-safety-row{
  display: block;
  border: 1px solid #ececec;
  border-radius: 8px;
  background: #fff;
  border-top: 4px solid #000000;
  padding: 15px 10px 0;
  box-shadow: 0 2px 3px rgba(0,0,0,0.08);
  margin-top: 20px;
}
.el-row-warranty-safety-strong{
    font-size: 24px;
    text-align: left;
    border-bottom: 1px solid #000000;
    margin: 20px 0 10px 0;
}
.el-col-warranty-safety-title{
    margin: 20px 0px 0px 20px;
    text-align: left;
    font-size: 15px;
}
.el-col-warranty-safety-title p{
    margin: 5px 0 0 0;
}
.el-col-warranty-safety-content{
    margin: 20px 0px 0px 20px;
    text-align: left;
    font-size: 15px;
    border-left: 1px solid #ddd;
}
.el-col-warranty-safety-content-col{
    margin: 20px 0 20px 10px;
    text-align: left;
}
.warranty-safety{
    margin: 10px 0 0 0;
}
.el-col-warranty-safety-content-col span{
    font-size: 14px;
}
.el-col-warranty-safety-content-col ul li{
    margin: 0 0 0 20px;
};
</style>
