<template>
  <div class="login">
    <h1>用户登录</h1>
    <el-form label-width="auto" class="form-box" :rules="rules" :model="ruleForm" ref="ruleFormRef">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" aria-placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" aria-placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <div class="btn-box">
          <el-button type="primary" @click="submitForm">登录</el-button>
          <el-button type="success">注册</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  username: string
  password: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  username: '',
  password: ''
})

const rules = reactive<FormRules<RuleForm>>({
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

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
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

    .btn-box {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
}
</style>
