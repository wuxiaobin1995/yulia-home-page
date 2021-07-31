<!--
 * @Author      : 吴晓斌
 * @Date        : 2021-07-30 11:49:52
 * @LastEditTime: 2021-07-30 15:46:09
 * @Description : 根组件
-->
<template>
  <div id="app">
    <router-view />
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
