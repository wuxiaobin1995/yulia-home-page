<!--
 * @Author      : 吴晓斌
 * @Date        : 2021-08-02 20:23:21
 * @LastEditTime: 2021-08-09 18:03:16
 * @Description : 二创相关
-->
<template>
  <div class="container">
    <!-- 锚点 -->
    <a-affix :offset-top="200" class="affix-wrapper">
      <a-anchor :target-offset="targetOffset">
        <a-anchor-link href="#recruit" title="招聘区" class="text" />
        <a-anchor-link href="#others" title="其他区" class="text" />
      </a-anchor>
    </a-affix>

    <div class="create-container">
      <!-- 招聘区 -->
      <div id="recruit" class="wrapper recruit-wrapper">
        <a-divider class="title">鱼组吃人</a-divider>
        <a-tabs default-active-key="1" size="large" tab-position="right">
          <a-tab-pane key="1">
            <span slot="tab">
              <a-icon type="apple" />
              美工/Art-Designer
            </span>
            <div class="content-wrapper">
              <p>
                - 组内提供大量的图片素材（均为高质量画师约稿）
              </p>
              <p>- 熟练使用Ps等制图软件，可独立制作视频封面等</p>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2">
            <span slot="tab">
              <a-icon type="android" />
              剪辑后期/Post-Editor
            </span>
            <div class="content-wrapper">
              <p>
                - 组内提供大量的Pr、Ae模板素材
              </p>
              <p>
                -
                熟练使用Pr、Ae等软件，能发现切片中的有趣点（有V切片经验、喜欢炉石的能加分呦~）
              </p>
            </div>
          </a-tab-pane>
          <a-tab-pane key="3">
            <span slot="tab">
              <a-icon type="android" />
              路灯/Follow
            </span>
            <div class="content-wrapper">
              <p>
                -
                有充足的时间跟进鱼鱼的直播，并记录下有趣片段的时间节点并作简要注释
              </p>
            </div>
          </a-tab-pane>
          <a-tab-pane key="4">
            <span slot="tab">
              <a-icon type="android" />
              轴/Axle
            </span>
            <div class="content-wrapper">
              <p>
                - 普通轴（仅限一位噢）
              </p>
              <p>- 特效轴（人数不限）</p>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>

      <!-- 其他区 -->
      <div id="others" class="wrapper others-wrapper">
        <a-divider class="title">其他</a-divider>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create-group',

  data() {
    return {
      targetOffset: window.innerHeight / 2 // 锚点偏移量
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;

  /* 锚点 */
  .affix-wrapper {
    position: absolute;
    left: 80px;
    width: 100px;
    .text {
      font-size: 18px;
    }
  }

  /* 二创相关 */
  .create-container {
    width: 100%;
    padding: 40px 0;
    background: url('../../assets/image/背景图/通用背景图-1.png') 50% 50%
      no-repeat fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;

    .wrapper {
      width: 70%;
      margin-bottom: 20px;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 16px;
      .title {
        font-size: 30px;
        font-weight: 700;
      }
    }

    // 招聘区
    .recruit-wrapper {
      min-height: 500px;
      .content-wrapper {
        font-size: 22px;
        padding: 20px 40px;
      }
    }
    // 其他区
    .others-wrapper {
      min-height: 2000px;
    }
  }
}
</style>
