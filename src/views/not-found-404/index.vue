<!--
 * @Author      : 吴晓斌
 * @Date        : 2021-07-30 15:26:54
 * @LastEditTime: 2021-07-31 11:50:49
 * @Description : 404页面
-->
<template>
  <div class="container">
    <el-empty
      :image="require('@/assets/images/404.png')"
      :image-size="450"
      description=" "
    >
      <div class="text">{{ `呜呜呜，页面找不到了，/(ㄒoㄒ)/~~` }}</div>
      <el-button
        class="btn"
        type="danger"
        icon="el-icon-view"
        @click="handleGoHome"
      >
        返回首页</el-button
      >
    </el-empty>
  </div>
</template>

<script>
export default {
  name: 'not-found-404',

  methods: {
    /**
     * @description: 返回首页
     */
    handleGoHome() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: rgb(238, 238, 238);

  /* 文字描述 */
  .text {
    font-size: 40px;
  }
  /* 按钮 */
  .btn {
    margin-top: 30px;
    height: 60px;
    font-size: 26px;
  }
}
</style>
