<!--
 * @Author      : 吴晓斌
 * @Date        : 2021-07-30 11:49:52
 * @LastEditTime: 2021-08-12 15:10:43
 * @Description : 根组件
-->
<template>
  <div id="app">
    <router-view />
    <!-- 返回顶部组件 -->
    <a-back-top />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '@/style/reset.scss';
</style>
