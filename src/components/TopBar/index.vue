<!--
 * @Author      : Mr.bin
 * @Date        : 2021-07-30 15:48:11
 * @LastEditTime: 2021-08-15 15:26:05
 * @Description : 顶部栏
-->
<template>
  <div class="container">
    <!-- Logo -->
    <div class="logo-wrapper">
      <router-link to="/">
        <img
          class="logo"
          :src="require('@/assets/image/logo/尤利娅logo.png')"
        />
      </router-link>
      <div class="text">Atlantis</div>
    </div>

    <!-- 菜单栏 -->
    <div class="menu-wrapper">
      <a-button
        class="btn"
        type="primary"
        icon="aliyun"
        size="large"
        @click="handleGoHome"
      >
        首页
      </a-button>
      <a-button class="btn" type="link" icon="chrome" @click="handleGoTimeLine">
        我们的旅程
      </a-button>
      <a-button class="btn" type="link" icon="youtube" @click="handleGoVideo">
        视频稿件
      </a-button>
      <a-button
        class="btn"
        type="link"
        icon="usergroup-add"
        @click="handleGoCreateGroup"
      >
        二创相关
      </a-button>
      <a-button class="btn" type="dashed" icon="link" @click="handleGoB">
        B站主页
      </a-button>
      <a-button class="btn" type="dashed" icon="link" @click="handleGoLive">
        直播间
      </a-button>
      <a-button
        class="btn"
        type="danger"
        icon="money-collect"
        @click="handleGoAFD"
      >
        爱发电
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',

  methods: {
    /**
     * @description: 跳转至首页
     */
    handleGoHome() {
      this.$router.push({ path: '/' })
    },
    /**
     * @description: 跳转至时间线
     */
    handleGoTimeLine() {
      this.$router.push({ path: '/time-line' })
    },
    /**
     * @description: 跳转至视频投稿
     */
    handleGoVideo() {
      this.$router.push({ path: '/video-submissions' })
    },
    /**
     * @description: 跳转至二创组
     */
    handleGoCreateGroup() {
      this.$router.push({ path: '/create-group' })
    },
    /**
     * @description: 跳转至B站个人页
     */
    handleGoB() {
      window.open('https://space.bilibili.com/650573749', '_blank')
    },
    /**
     * @description: 跳转至B站直播间
     */
    handleGoLive() {
      window.open('https://live.bilibili.com/22506899', '_blank')
    },
    /**
     * @description: 跳转至爱发电
     */
    handleGoAFD() {
      window.open('https://afdian.net/@Yulialove', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Logo */
  .logo-wrapper {
    height: 100%;
    margin-left: 20px;
    display: flex;
    align-items: center;
    .logo {
      height: 60px;
    }
    .text {
      margin-left: 6px;
      font-size: 26px;
      font-variant: small-caps;
    }
  }

  /* 菜单栏 */
  .menu-wrapper {
    margin-right: 20px;
    .btn {
      margin: 0 8px;
      font-size: 18px;
    }
  }
}
</style>
