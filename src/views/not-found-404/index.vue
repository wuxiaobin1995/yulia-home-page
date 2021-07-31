<!--
 * @Author      : 吴晓斌
 * @Date        : 2021-07-30 15:26:54
 * @LastEditTime: 2021-07-30 17:52:59
 * @Description : 404页面
-->
<template>
  <div class="container">
    <a-empty
      :image="require('@/assets/images/404.png')"
      :image-style="{
        height: '500px'
      }"
    >
      <span class="text" slot="description">{{
        `呜呜呜，页面找不到了，/(ㄒoㄒ)/~~`
      }}</span>
      <a-button class="btn" type="danger" @click="handleGoHome">
        <a-icon type="chrome" theme="filled" />
        点我，返回首页
      </a-button>
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
    width: 220px;
    height: 60px;
    font-size: 22px;
  }
}
</style>
