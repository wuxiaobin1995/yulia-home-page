<!--
 * @Author      : 吴晓斌
 * @Date        : 2021-07-30 15:48:11
 * @LastEditTime: 2021-07-30 18:01:03
 * @Description : 顶部栏
-->
<template>
  <div class="container">
    <a-menu
      v-model="current"
      mode="horizontal"
      theme="dark"
      @click="handleClick"
    >
      <a-menu-item key="home"> <a-icon type="home" />首页</a-menu-item>
      <a-menu-item key="about"><a-icon type="home" />关于</a-menu-item>

      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="setting" />Navigation Three - Submenu</span
        >
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">
            Option 3
          </a-menu-item>
          <a-menu-item key="setting:4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'TopBar',

  data() {
    return {
      current: ['home'] // 默认当前路由
    }
  },

  methods: {
    /**
     * @description: 路由跳转
     * @param {*} item
     */
    handleClick(item) {
      this.$router.push({ path: `/${item.key}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
