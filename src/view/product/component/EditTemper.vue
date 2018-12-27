<template>
    <div id="edit-temper">
        <el-row class="edit-temper-row">
          <el-col :span="24" :xs="24">
            <el-col class="edit-temper-upload" :span="12" :xs="24">
                <strong>上传图片</strong>
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
            <el-col class="edit-temper-upload" :span="12" :xs="24">
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
          <el-col class="edit-temper-form">
              <el-form :model="temperForm"  ref="temperForm" label-width="100px" class="demo-temperForm">
                  <el-form-item label="item" prop="item">
                  <el-input v-model="temperForm.item"></el-input>
                  </el-form-item>
                  <el-form-item label="model" prop="model">
                      <el-input v-model="temperForm.model"></el-input>
                  </el-form-item>
                  <el-form-item label="material" prop="material">
                      <el-input v-model="temperForm.material"></el-input>
                  </el-form-item>
                  <el-form-item label="type" prop="type">
                      <el-select v-model="temperForm.type" placeholder="Select Type">
                      <el-option label="iphone" value="1"></el-option>
                      <el-option label="HuaWei" value="2"></el-option>
                      <el-option label="Samsung" value="3"></el-option>
                      <el-option label="Oppo" value="4"></el-option>
                      <el-option label="Vivo" value="5"></el-option>
                      <el-option label="Others" value="6"></el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item label="dimension" prop="dimension">
                      <el-input v-model="temperForm.dimension"></el-input>
                  </el-form-item>
                  <el-form-item label="thickness" prop="thickness">
                      <el-input v-model="temperForm.thickness"></el-input>
                  </el-form-item>
                  <el-form-item label="hardness" prop="hardness">
                      <el-input v-model="temperForm.hardness"></el-input>
                  </el-form-item>
                  <el-form-item label="features" prop="features">
                      <el-input v-model="temperForm.features"></el-input>
                  </el-form-item>
              </el-form>
          </el-col>
          <el-col>
            <el-button type="primary" @click="submitForm('temperForm')">Submit</el-button>
            <el-button @click="resetForm('temperForm')">Reset</el-button>
          </el-col>
        </el-row>
    </div>
</template>

<script>
import api from '@/utils/api'

export default {
  name: 'EditTemper',
  data () {
    return {
      temperForm: {
        id: '',
        item: '',
        model: '',
        material: '',
        dimension: '',
        thickness: '',
        hardness: '',
        features: '',
        picture: '',
        /**
        * 手机膜类别，1 temper,2 Huawei,3 Samsung,4 oppo,5 vivo,6 others
        */
        type: '',
        temperPicture: [],
        detail: []
      },
      temper: {},
      temperPictures: [],
      temperDetails: [],
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
      // uploadPath: 'http://47.107.57.42:9002/',
      uploadPath: 'http://hgl-tech-admin.gugualao.top',
      orderNo: 0,
      detailOrderNo: 0
    }
  },
  methods: {
    submitForm (formName) {
      let that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = that.temperForm
          api.post('/temper/edit-temper', params).then(data => {
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
        that.temperForm.picture.push(picture)
      }
    },
    uploadDetail (file) {
      let that = this
      if (file.code === '0') {
        let orderNo = that.detailOrderNo + 1
        that.detailOrderNo = orderNo
        let picture = {orderNo: orderNo, picture: file.fileName}
        that.temperForm.detail.push(picture)
      }
    },
    getProductDetail () {
      let that = this
      let param = {
        temperId: this.$route.params.productId
      }
      api.postC('/temper/query-detail', param).then(data => {
        if (data.code === '0') {
          that.temperForm = data.temper
          that.temperPictures = data.temperPictures
          that.temperDetails = data.temperDetails
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
#edit-temper{
  width: 100%;
  min-height: 100%;
}
.edit-temper-upload{
  text-align: left;
}
</style>
