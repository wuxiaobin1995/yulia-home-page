<!--
 * @Author      : Mr.bin
 * @Date        : 2021-07-30 15:10:44
 * @LastEditTime: 2021-08-15 15:26:10
 * @Description : 布局组件
-->
<template>
  <div class="container">
    <!-- 顶部栏 -->
    <div class="top-wrapper">
      <top-bar />
    </div>
    <!-- 内容区 -->
    <div class="content-wrapper">
      <router-view />
    </div>
    <!-- 底部栏 -->
    <div class="bottom-wrapper">
      <bottom-bar />
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import BottomBar from '@/components/BottomBar'

export default {
  name: 'layout',

  components: {
    TopBar,
    BottomBar
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  min-width: 1200px;

  /* 顶部栏 */
  .top-wrapper {
    width: 100%;
    height: 60px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 4px 8px 0 rgb(184, 184, 184); // 添加下阴影
    position: fixed;
    top: 0px;
    z-index: 1001;
  }

  /* 内容区 */
  .content-wrapper {
    margin-top: 60px;
  }

  /* 底部栏 */
  .bottom-wrapper {
    width: 100%;
    background-color: rgb(50, 54, 57);
  }
}
</style>
