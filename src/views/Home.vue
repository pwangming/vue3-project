<script setup lang="ts">
import { ref, reactive } from 'vue'

const newsTitle = ref('')
const dialogFormVisible = ref(true)
const formLabelWidth = '140px'

import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  title: string
  text: string
  type: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  title: '',
  text: '',
  type: ''
})

const rules = reactive<FormRules<RuleForm>>({
  title: [
    { required: true, message: '请输入标题', trigger: 'blur' },
    { min: 2, max: 50, message: '长度在2-50之间', trigger: 'blur' }
  ],
  text: [
    {
      required: true,
      message: '请输入文章内容',
      trigger: 'blur'
    }
  ],
  type: [
    {
      required: true,
      message: '请选择文章类别',
      trigger: 'blur'
    }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <div class="home">
    <header class="header-box">
      <div class="header">
        <div class="tab">
          <div>微头条</div>
          <div>新闻</div>
          <div>体育</div>
          <div>娱乐</div>
          <div>科技</div>
          <div>其他</div>
        </div>
        <div class="user">
          <el-input v-model="newsTitle" style="width: 240px" placeholder="请输入新闻标题" />
          <div class="btn-box">
            <el-button type="primary">登录</el-button>
            <el-button type="success">注册</el-button>
          </div>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="news">
        <div class="title">特色产业激发乡村振兴新活力</div>
        <div class="tag-list">
          <span>新闻</span>
          <span>0浏览</span>
          <span>0小时前</span>
        </div>
        <div>
          <el-button size="small" type="success">查看全文</el-button>
          <el-button size="small" type="warning">修改</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </div>
      </div>

      <div class="news">
        <div class="title">特色产业激发乡村振兴新活力</div>
        <div class="tag-list">
          <span>新闻</span>
          <span>0浏览</span>
          <span>0小时前</span>
        </div>
        <div>
          <el-button size="small" type="success">查看全文</el-button>
          <el-button size="small" type="warning">修改</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </div>
      </div>
    </main>

    <el-dialog v-model="dialogFormVisible" title="修改文章" width="700">
      <el-form :rules="rules" :model="ruleForm" ref="ruleFormRef">
        <el-form-item label="文章标题" :label-width="formLabelWidth" prop="title">
          <el-input v-model="ruleForm.title" autocomplete="off" />
        </el-form-item>
        <el-form-item label="文章内容" :label-width="formLabelWidth" prop="text">
          <el-input type="textarea" v-model="ruleForm.text" autocomplete="off" :rows="6" />
        </el-form-item>
        <el-form-item label="文章类别" :label-width="formLabelWidth" prop="type">
          <el-select v-model="ruleForm.type" placeholder="请选择文章类别">
            <el-option label="微头条" value="1" />
            <el-option label="新闻" value="2" />
            <el-option label="体育" value="3" />
            <el-option label="娱乐" value="4" />
            <el-option label="科技" value="5" />
            <el-option label="其他" value="6" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"> 保存 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;

  .header-box {
    width: 100%;
    height: 50px;
    background-color: black;

    .header {
      width: 1300px;
      height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: auto;

      .tab {
        display: flex;
        flex-direction: row;
        color: #fff;

        div {
          margin-right: 50px;
        }
      }

      .user {
        display: flex;
        flex-direction: row;
        align-items: center;

        .btn-box {
          margin-left: 50px;
        }
      }
    }
  }

  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .news {
      width: 1000px;
      height: 120px;
      border: 1px #ccc solid;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 20px;
      margin-top: 20px;

      .title {
        font-size: 20px;
        font-weight: bold;
      }

      .tag-list {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        color: #999;

        span {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
