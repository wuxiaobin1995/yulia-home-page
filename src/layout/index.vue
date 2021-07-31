<!--
 * @Author      : 吴晓斌
 * @Date        : 2021-07-30 15:10:44
 * @LastEditTime: 2021-07-30 16:57:49
 * @Description : 布局组件
-->
<template>
  <div class="container">
    <!-- 顶部栏 -->
    <div>
      <top-bar />
    </div>
    <!-- 内容区 -->
    <div class="content-wrapper">
      <router-view />
    </div>
    <!-- 底部栏 -->
    <div>
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
  display: flex;
  flex-direction: column;

  /* 内容区 */
  .content-wrapper {
    flex: 1;
  }
}
</style>
