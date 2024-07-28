<script setup lang="ts">
import { ref, reactive } from 'vue'

const newsTitle = ref('')
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
}
</style>
