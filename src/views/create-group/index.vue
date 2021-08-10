<!--
 * @Author      : 吴晓斌
 * @Date        : 2021-08-02 20:23:21
 * @LastEditTime: 2021-08-10 15:54:55
 * @Description : 二创相关
-->
<template>
  <div class="container">
    <!-- 锚点 -->
    <a-affix :offset-top="120" class="affix-wrapper">
      <a-anchor :target-offset="targetOffset">
        <a-anchor-link href="#link" title="相关链接" class="text" />
        <a-anchor-link href="#recruit" title="鱼组吃人" class="text" />
        <a-anchor-link href="#others" title="其他" class="text" />
      </a-anchor>
    </a-affix>

    <div class="create-container">
      <!-- 相关链接 -->
      <div id="link" class="wrapper link-wrapper">
        <a-divider class="title" orientation="left">相关链接</a-divider>
        <div class="content-wrapper">
          <a href="https://space.bilibili.com/690595410" target="_blank">
            <a-button type="danger">
              组号：塞壬陆地生活观委会
            </a-button>
          </a>
          <a
            href="https://t.bilibili.com/topic/name/%E6%B5%B7%E4%B8%AD%E5%B0%A4%E7%89%A9/feed"
            target="_blank"
          >
            <a-button type="danger">
              Tag：#海中尤物#
            </a-button>
          </a>
          <a href="https://space.bilibili.com/1641509" target="_blank">
            <a-button type="danger">
              画师妈咪：Cigma
            </a-button>
          </a>
          <a-button type="primary">
            二创审核群：728468527
          </a-button>
        </div>
      </div>

      <!-- 鱼组吃人 -->
      <div id="recruit" class="wrapper recruit-wrapper">
        <a-divider class="title" orientation="left">鱼组吃人 v1.0</a-divider>
        <a-tabs default-active-key="1" size="large" tab-position="right">
          <a-tab-pane key="1">
            <span slot="tab">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-meigong"></use>
              </svg>
              &nbsp;&nbsp;美工/Art-Designer
            </span>
            <div class="content-wrapper">
              <div>
                <h3>职责内容</h3>
                <p class="content">
                  - 负责相关封面的制作（视频封面、活动封面、Banner等）
                </p>
                <p class="content">
                  - 组内提供大量的图片素材（均为高质量画师约稿）
                </p>
              </div>
              <div>
                <h3>技能要求</h3>
                <p class="content">
                  - 熟练操作Sketch、PS、AI等常用设计软件，可独立完成作品
                </p>
                <p class="content">
                  - 做事认真负责、态度友好，且对成品质量、设计理念有一定的追求
                </p>
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2">
            <span slot="tab">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shipin"></use>
              </svg>
              &nbsp;&nbsp;剪辑后期/Post-Editor
            </span>
            <div class="content-wrapper">
              <div>
                <h3>职责内容</h3>
                <p class="content">
                  - 根据录播，制作有趣的视频成品（包括杂谈类、游戏类、整活类等）
                </p>
                <p class="content">
                  - 组内提供大量的Pr、Ae模板和图片素材
                </p>
              </div>
              <div>
                <h3>技能要求</h3>
                <p class="content">
                  -
                  熟练使用Pr、Ae等软件，能发现切片中的有趣点（有V切片经验、喜欢炉石的能加分呦~）
                </p>
                <p class="content">
                  - 做事认真负责、态度友好，且对后期创意、视频风格有一定的追求
                </p>
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="3">
            <span slot="tab">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-ziyuan10"></use>
              </svg>
              &nbsp;&nbsp;路灯/Follow
            </span>
            <div class="content-wrapper">
              <div>
                <h3>职责内容</h3>
                <p class="content">
                  -
                  有较多的时间精力来跟直播，并记录下有趣片段的时间节点并作简要注释，方便剪辑man做后期
                </p>
              </div>
              <div>
                <h3>技能要求</h3>
                <p class="content">
                  -
                  记录工具可随意选用，比如txt、excel、world均可（尽量使用Web网络版的记录工具，方便组内共享）
                </p>
                <p class="content">
                  - 格式参考：“2021-08-10 0:23:10~0:26:30
                  该段单口相声节目效果爆炸”
                </p>
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="4">
            <span slot="tab">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zimuzuzhuanqu"></use>
              </svg>
              &nbsp;&nbsp;轴/Axle
            </span>
            <div class="content-wrapper">
              <div>
                <h3>职责内容</h3>
                <p class="content">
                  - 根据剪辑man的成品，打轴加字幕
                </p>
                <p class="content">
                  - 普通轴（仅限一位噢）+ 特效轴（人数不限）
                </p>
              </div>
              <div>
                <h3>技能要求</h3>
                <p class="content">
                  - 熟悉使用Aegisub等打轴软件，做到字幕不错位、言语还原
                </p>
                <p class="content">
                  - 做事有耐心，态度友好
                </p>
              </div>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>

      <!-- 其他 -->
      <div id="others" class="wrapper others-wrapper">
        <a-divider class="title" orientation="left">其他</a-divider>
        <div class="content-wrapper">
          <div>暂定......</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create-group',

  data() {
    return {
      targetOffset: window.innerHeight / 10 // 锚点偏移量
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;

  /* 锚点 */
  .affix-wrapper {
    position: absolute;
    left: 80px;
    width: 120px;
    .text {
      font-size: 18px;
    }
  }

  /* 二创相关 */
  .create-container {
    width: 100%;
    padding: 40px 0 0 0;
    background: url('../../assets/image/背景图/通用背景图-1.png') 50% 50%
      no-repeat fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;

    // 通用样式
    .wrapper {
      width: 70%;
      margin-bottom: 40px;
      background-color: rgba(0, 0, 0, 0.2);
      box-shadow: 0 4px 6px 2px rgb(180, 180, 180); // 添加下阴影
      border-radius: 16px;
      .title {
        font-size: 34px;
        color: rgb(17, 136, 255);
        text-shadow: 4px 4px 6px rgb(255, 166, 0);
      }
    }

    // 相关链接
    .link-wrapper {
      .content-wrapper {
        padding: 10px 0 26px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }
    }
    // 鱼组吃人
    .recruit-wrapper {
      min-height: 500px;
      .content-wrapper {
        font-size: 22px;
        padding: 20px 40px;
        .content {
          text-indent: 1.5em;
        }
      }
    }
    // 其他
    .others-wrapper {
      .content-wrapper {
        padding: 10px 40px 26px 40px;
      }
    }
  }
}
</style>
