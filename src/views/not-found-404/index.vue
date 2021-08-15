<!--
 * @Author      : Mr.bin
 * @Date        : 2021-07-30 15:26:54
 * @LastEditTime: 2021-08-15 15:27:00
 * @Description : 404页面
-->
<template>
  <div class="container">
    <a-empty
      :image="require('@/assets/image/404.png')"
      :image-style="{
        height: '500px'
      }"
    >
      <span class="text" slot="description">
        {{ `呜呜呜，页面找不到了，/(ㄒoㄒ)/~~` }}
      </span>
      <a-button class="btn" type="danger" icon="chrome" @click="handleGoHome"
        >返回首页</a-button
      >
    </a-empty>
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
    font-size: 50px;
  }
  /* 按钮 */
  .btn {
    margin-top: 30px;
    height: 50px;
    font-size: 26px;
  }
}
</style>
