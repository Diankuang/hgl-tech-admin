<template>
  <div class="factory-scene">
    <el-row class="factory-scene-row">
      <el-col :span="6" :xs="24" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 2 : 0" class="factory-scene-row-col">
        <el-card :body-style="{ padding: '0px' }" class="factory-scene-row-col-card">
          <router-link to="/login"><img src="@/assets/factory-scene/57ae8adfa1fea.jpg" class="image"></router-link>
        </el-card>
        <span class="factory-scene-row-col-span">好吃的汉堡</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'FactoryScene',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.time {
  font-size: 13px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.button {
  padding: 0;
  float: right;
}
.image {
  width: 100%;
  display: block;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}
.factory-scene-row-col{
  margin-left: 8%;
  margin-bottom: 30px;
  text-align: center
}
/* .factory-scene-row-col-span{
  text-align: center;
} */
</style>
