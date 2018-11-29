<template>
  <div>
    <script id="editor" type="text/plain"  charset="utf-8" ></script>
  </div>
</template>

<script>
import '../../../static/UE/ueditor.config.js'
import '../../../static/UE/ueditor.all.js'
import '../../../static/UE/lang/zh-cn/zh-cn.js'

export default {
  name: 'UEditor',
  props: {
    id: {
      type: String
    },
    config: {
      type: Object
    }
  },
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    // 初始化UE
    this.editor = UE.delEditor('editor')
    this.editor = UE.getEditor('editor', this.config)
  },
  destoryed () {
    this.editor.destory()
  },
  methods: {
    getUEContent: function () {
      return this.editor.getContent()
    },
    getContentTxt: function () {
      return this.editor.getContentTxt()
    }
  }
}
</script>
