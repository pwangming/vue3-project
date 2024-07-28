<template>
  <div class="register">
    <h1>用户注册</h1>
    <el-form label-width="auto" class="form-box" :rules="rules" :model="ruleForm" ref="ruleFormRef">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" aria-placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="ruleForm.username" prop="username" aria-placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="ruleForm.password"
          prop="password"
          type="password"
          aria-placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input
          v-model="ruleForm.againPwd"
          prop="againPwd"
          type="password"
          aria-placeholder="请重复密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">注册</el-button>
        <el-button type="danger" @click="resetForm">重置</el-button>
        <el-button type="success">去登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  name: string
  username: string
  password: string
  againPwd: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: '',
  username: '',
  password: '',
  againPwd: ''
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在3-5之间', trigger: 'blur' }
  ],
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ],
  againPwd: [
    {
      required: true,
      message: '请重复密码',
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

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss" scoped>
.register {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    width: 400px;
    text-align: center;
  }

  .form-box {
    width: 400px;
    height: 250px;
  }
}
</style>
