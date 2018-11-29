<template>
    <div id="layout">
        <myheader></myheader>
        <el-col :span="24" :xs="24" class="breadcrumb-container">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" :to="{ path: item.path }">
                    <router-link class="breadcrumb-a" :to="'/'+item.path">{{ item.name }}</router-link>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <el-main>
           <router-view/>
        </el-main>
        <myfooter></myfooter>
    </div>
</template>

<script>
import myheader from '@/view/common/MyHeader'
import myfooter from '@/view/common/MyFooter'
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
  components: {myheader, myfooter, addproduct},
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
.breadcrumb-container{
    padding: 10px;
    margin: 0;
    max-width: 100%;
    background-color: #171717;
    color: #fff;
    padding: 10px;
}
.breadcrumb-a{
    color: #fff;
}
.breadcrumb-a:hover{
    color:#fff;
}
.my-account-row-div{
  height: 60px;
  margin: 0px;
  padding: 0px;
  background-color: rgb(84, 92, 100);
  position: relative;
}
.el-icon-arrow-right{
    padding: 5px;
}
.el-main{
   padding: 0px;
   width: 100%;
}
</style>
