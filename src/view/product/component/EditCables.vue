<template>
    <div id="edit-cables">
        <el-row class="edit-cables-row">
          <el-col :span="24" :xs="24">
            <el-col class="edit-cables-upload" :span="12" :xs="24">
                <strong>上传产品图片</strong>
                <el-upload
                    :action="uploadPath+'/file/upload'"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    accept="img"
                    :on-success="upload">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-col>
            <el-col class="edit-cables-upload" :span="12" :xs="24">
                <strong>产品详情图片上传</strong>
                <el-upload
                    :action="uploadPath+'/file/upload'"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    accept="img"
                    :on-success="uploadDetail">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-col>
          </el-col>
          <el-col class="edit-cables-form" :span="24" :xs="24">
              <el-form :model="cablesForm" :label-position="labelPosition" ref="cablesForm" label-width="100px" class="demo-cablesForm">
                  <el-form-item label="item" prop="item">
                    <el-input v-model="cablesForm.item"></el-input>
                  </el-form-item>
                  <el-form-item label="model" prop="model">
                      <el-input v-model="cablesForm.model"></el-input>
                  </el-form-item>
                  <el-form-item label="type" prop="type">
                      <el-select v-model="cablesForm.type" placeholder="Select Type">
                        <el-option label="Micro Usb" value="1"></el-option>
                        <el-option label="Type-C" value="2"></el-option>
                        <el-option label="Lighting" value="3"></el-option>
                        <el-option label="Others" value="4"></el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item label="length" prop="length">
                      <el-input v-model="cablesForm.length"></el-input>
                  </el-form-item>
                  <el-form-item label="material" prop="material">
                      <el-input v-model="cablesForm.material"></el-input>
                  </el-form-item>
                  <el-form-item label="core" prop="core">
                      <el-input v-model="cablesForm.core"></el-input>
                  </el-form-item>
                  <el-form-item label="current" prop="current">
                      <el-input v-model="cablesForm.current"></el-input>
                  </el-form-item>
                  <el-form-item label="features" prop="features">
                      <el-input v-model="cablesForm.features"></el-input>
                  </el-form-item>
              </el-form>
          </el-col>
          <el-col>
            <el-button type="primary" @click="submitForm('mictousbForm')">Submit</el-button>
            <el-button @click="resetForm('mictousbForm')">Reset</el-button>
          </el-col>
        </el-row>
    </div>
</template>

<script>
import api from '@/utils/api'

export default {
  name: 'EditCables',
  data () {
    return {
      cablesForm: {
        id: '',
        item: '',
        model: '',
        length: '',
        material: '',
        core: '',
        current: '',
        features: '',
        picture: '',
        type: ''
      },
      cables: {},
      cablesPictures: [],
      cablesDetails: [],
      productPicture: [],
      labelPosition: 'right',
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      },
      dialogImageUrl: '',
      dialogVisible: false,
      uploadPath: 'http://hgl-tech-admin.gugualao.top',
      // uploadPath: 'http://localhost:9002',
      orderNo: 0,
      detailOrderNo: 0
    }
  },
  methods: {
    submitForm (formName) {
      let that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = that.mictousbForm
          api.post('/product/add-power-products', params).then(data => {
            if (data.code === '0') {
              alert(data.msg)
              this.$router.go(0)
            } else {
              alert(data.msg)
            }
          })
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleRemove (file, fileList) {
      let params = {fileName: file.response.fileName}
      api.postC('/file/remove', params).then(data => {
        alert(data.msg)
      })
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    upload (file) {
      let that = this
      if (file.code === '0') {
        let orderNo = that.orderNo + 1
        that.orderNo = orderNo
        let picture = {orderNo: orderNo, picture: file.fileName}
        that.mictousbForm.picture.push(picture)
      }
    },
    uploadDetail (file) {
      let that = this
      if (file.code === '0') {
        let orderNo = that.detailOrderNo + 1
        that.detailOrderNo = orderNo
        let picture = {orderNo: orderNo, picture: file.fileName}
        that.mictousbForm.detail.push(picture)
      }
    },
    getProductDetail () {
      let that = this
      let param = {
        cablesId: this.$route.params.productId
      }
      api.postC('/cables/query-detail', param).then(data => {
        if (data.code === '0') {
          that.cablesForm = data.cables
          console.log(that.cablesForm)
          that.cablesPictures = data.cablesPictures
          that.cablesDetails = data.cablesDetails
        } else {
          alert(data.msg)
        }
      })
    }
  },
  computed: {
    userInfo () {
      return JSON.parse(sessionStorage.getItem('user'))
    }
  },
  created () {
    if (this.userInfo === null) {
      this.$router.push('/login')
    } else if (this.userInfo.email !== '1832054053@qq.com') {
      this.$router.push('/')
    }
    this.getProductDetail()
  }
}
</script>

<style>
.edit-cables-upload{
  text-align: left;
}
</style>
