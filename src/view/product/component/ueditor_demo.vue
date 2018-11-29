<template>
  <div class="ueditor-demo">
    <el-row class="ueditor-demo-row">
      <el-col :span="2" :xs="24"><strong>News Title:</strong></el-col>
      <el-col :span="22" :xs="24"><el-input v-model="title"></el-input></el-col>
      <el-col :span="2" :xs="24"><strong>Summarize:</strong></el-col>
      <el-col :span="22" :xs="24"><el-input v-model="summarize"></el-input></el-col>
      <el-col class="add-micro-usb-upload" :span="24" :xs="24">
        <strong>news cover:</strong>
        <el-col class="el-upload-news">
          <el-upload
              :action="uploadPath+'/file/upload'"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              accept="img"
              :on-success="upload"
              >
              <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-col>
      </el-col>
      <el-col :span="24" :xs="24">
        <UEditor :config="config" ref="ueditor"></UEditor>
        <el-button type="primary" class="add-news-button" @click="getUEContent()">Submit</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UEditor from '@/components/ue/ueditor.vue'
import api from '@/utils/api'
export default {
  name: 'hello',
  components: { UEditor },
  data () {
    return {
      config: {
        // 可以在此处定义工具栏的内容
        // toolbars: [
        //  ['fullscreen', 'undo', 'redo','|','bold', 'italic', 'underline',
        //  '|','superscript','subscript','|', 'insertorderedlist', 'insertunorderedlist',
        //  '|','fontfamily','fontsize','justifyleft','justifyright','justifycenter','justifyjustify']
        // ],
        autoHeightEnabled: false,
        autoFloatEnabled: true,
        initialContent: '请输入内容', // 初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
        autoClearinitialContent: true, // 是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
        initialFrameWidth: null,
        initialFrameHeight: 450,
        BaseUrl: '',
        UEDITOR_HOME_URL: 'static/UE/'
      },
      addFormVisible: false,
      dialogVisible: false,
      ue1: 'ue1', // 不同编辑器必须不同的id
      ue2: 'ue2',
      title: '',
      uploadPath: 'http://www.gugualao.top',
      content: '',
      picture: '',
      summarize: '',
      dialogImageUrl: ''
    }
  },
  methods: {
    // 获取文档内容
    getContent: function () {
      let content = this.$refs.ueditor.getUEContent()
      console.log(content)
      alert(content)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleRemove (file, fileList) {
      let params = {fileName: file.response.fileName}
      api.postC('/file/remove', params).then(data => {
        alert(data.msg)
      })
    },
    upload (file) {
      let that = this
      if (file.code === '0') {
        that.picture = file.fileName
      }
    },
    getUEContent () {
      debugger
      let that = this
      let content = this.$refs.ueditor.getUEContent() // 调用子组件方法
      // this.$notify({
      //   title: '获取成功，可在控制台查看！',
      //   message: content,
      //   type: 'success'
      // })
      let params = {
        'title': that.title,
        'content': content,
        'picture': that.picture,
        'summarize': that.summarize
      }
      api.post('/news/add-news', params).then(data => {
        if (data.code === '0') {
          alert(data.msg)
          this.$router.go(0)
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
    }
    if (this.userInfo.email !== '1832054053@qq.com') {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
/* .el-upload-news{
  height: 100px;
} */
.el-upload--picture-card, .el-upload-dragger{
   width: 60px;
    height: 60px;
}
.el-upload .picture-card {
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    /* box-sizing: border-box; */
    width: 60px;
    height: 60px;
    line-height: 146px;
    vertical-align: top;
  }
</style>
