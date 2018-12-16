<template>
    <div class="layout">
      <el-container>
        <el-aside style="width:15.3%;min-height:100%;background-color: #324057;"><myaside></myaside></el-aside>
        <el-container>
          <el-header>
            <myheader></myheader>
            <el-col :span="24" :xs="24" class="breadcrumb-container">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" :to="{ path: item.path }">
                  <router-link class="breadcrumb-a" :to="'/'+item.path">{{ item.name }}</router-link>
                </el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
          </el-header>
          <el-main><router-view></router-view></el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
import myheader from '@/view/common/MyHeader'
import myaside from '@/view/common/MyAside'
// import myaside from '@/view/common/manage'
import addproduct from '@/view/product/AddProducts'
export default {
  name: 'LayOut',
  data () {
    return {
      form: {
        email: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  components: {myheader, addproduct, myaside},
  methods: {
    handleSelect (key, keyPath) {
      console.log(key + '==' + keyPath)
      this.$router.push(keyPath)
    },
    onSubmit (form) {
    //   console.log(form)
      this.$refs[form].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.layout{
  width: 100%;
  height: 100%;
}
.breadcrumb-container{
    padding: 10px;
    margin: 10px 0 0 0;
    max-width: 100%;
    background-color: #f5f5f5;
    color: #fff;
    /* padding: 10px; */
}
/* .breadcrumb-a{
    color: #606266;
} */
.breadcrumb-a:hover{
    color:rgb(179, 173, 173);
}
.my-account-row-div{
  height: 60px;
  margin: 0px;
  padding: 0px;
  background-color: rgb(179, 173, 173);
  position: relative;
}
.el-icon-arrow-right{
    padding: 5px;
}
.el-main{
   width: 100%;
   height: 100%;
   margin: 10px 0 0 0;
}
.el-header{
    margin: 0px;
    padding: 0px;
    background-color:#f5f5f5;
    /* position: sabsolute; */
    width: 100%;
    z-index: 1;
}
/* .layout-main{
  min-height: 100%;
} */
.el-container{
  min-height: 100%;
}
</style>
