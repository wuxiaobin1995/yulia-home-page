<!--
 * @Author      : 吴晓斌
 * @Date        : 2021-07-30 17:03:36
 * @LastEditTime: 2021-08-06 00:36:53
 * @Description : 视频投稿
-->
<template>
  <div class="container">
    <div :style="bg" class="video-container">
      <div class="video-wrapper">
        <a-tabs
          default-active-key="1"
          size="large"
          tab-position="right"
          @change="handleChangeTab"
        >
          <a-tab-pane key="1">
            <span slot="tab">
              <a-icon type="apple" />
              Tab 1
            </span>
            Content of Tab 1
          </a-tab-pane>
          <a-tab-pane key="2">
            <span slot="tab">
              <a-icon type="apple" />
              Tab 2
            </span>
            Content of Tab 2
          </a-tab-pane>
          <a-tab-pane key="3">
            <span slot="tab">
              <a-icon type="apple" />
              Tab 3
            </span>
            Content of Tab 3
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'video-submissions',

  data() {
    return {
      bg: {
        backgroundImage:
          'url(' + require('@/assets/image/背景图/通用背景图-3.jpg') + ')'
      }
    }
  },

  methods: {
    handleChangeTab(activeKey) {
      if (activeKey === '1') {
        this.bg = {
          backgroundImage:
            'url(' + require('@/assets/image/背景图/通用背景图-3.jpg') + ')'
        }
      } else if (activeKey === '2') {
        this.bg = {
          backgroundImage:
            'url(' + require('@/assets/image/背景图/通用背景图-4.jpg') + ')'
        }
      } else if (activeKey === '3') {
        this.bg = {
          backgroundImage:
            'url(' + require('@/assets/image/背景图/通用背景图-5.jpg') + ')'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;

  /* 视频投稿 */
  .video-container {
    width: 100%;
    padding: 40px 0;
    height: 2000px;
    background: center center no-repeat fixed;
    background-size: cover;
    display: flex;
    justify-content: center;

    .video-wrapper {
      width: 80%;
      background-color: rgba(255, 255, 255, 0.4);
      border-radius: 20px;
    }
  }
}
</style>
