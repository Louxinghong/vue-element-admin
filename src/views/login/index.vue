<template>
  <div class="login">
    <div class="content">
      <div class="title">
        <svg-icon icon-class="logo"></svg-icon>
        <span>LGG MANGER</span>
      </div>
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="id">
          <span class="person-id">
            <svg-icon icon-class="person-id"></svg-icon>
          </span>
          <el-input class="person-id" placeholder="请输入帐号" v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <span class="person-password">
            <svg-icon icon-class="person-password"></svg-icon>
          </span>
          <el-input
            class="person-password"
            type="password"
            show-password
            placeholder="请输入密码"
            v-model="form.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="submit-btn" type="primary" :loading="loading" @click="onLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { setToken, getToken } from '@/utils/auth.js'

export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      form: {
        id: '',
        password: ''
      },
      rules: {
        id: [{ required: true, message: '请输入帐号', trigger: 'blur' }],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, message: '密码不能小于5位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onLogin() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true
          setToken(this.form)
          this.$router.replace({ name: 'Dashboard' })
        } else {
          this.loading = false
        }
      })
    }
  }
}
</script>

<style lang="less">
@import "./login.less";
</style>