<!--
 * @Author      : 吴晓斌
 * @Date        : 2021-07-30 17:03:36
 * @LastEditTime: 2021-08-07 11:47:56
 * @Description : 视频投稿
-->
<template>
  <div class="container">
    <!-- 视频投稿 -->
    <div :style="bgImg" class="video-container">
      <div class="video-wrapper">
        <!-- 卡片容器 -->
        <a-tabs
          default-active-key="1"
          tab-position="top"
          @change="handleChangeTab"
        >
          <!-- 原创曲 -->
          <a-tab-pane key="1" class="tab-pane-wrapper">
            <span slot="tab" :style="headStyle">
              <a-icon type="gitlab" />
              原创曲
            </span>
            <a-timeline :reverse="true">
              <a-timeline-item>
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV1Pi4y1j7sR"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="
                          require('@/assets/image/视频封面/世事艰难我拥抱你.jpg')
                        "
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          【原创曲】世事艰难
                          我拥抱你【人声本家】尤利娅的一万粉纪念~
                        </div>
                        <div class="desc">
                          本家投稿：BV1if4y1R7tr 人声本家：尤利娅Yulia
                          词/曲：猿马行歌 混音：漆柚 曲绘：Ash 视频：果酱
                          这是尤利娅的第一首原创曲，很感谢猿马老师可以写出这么温暖的歌，我第一次听的时候泪目了，于是就答应了接受这个挑战。
                          在这期间我也很荣幸地达到了一万粉，还拥有了许多爱着我的水手们，我真的感到很幸运很幸运。
                          自从出道之后，每次我难过的时候大家都在，就算什么都不说，我也知道你们会站在我的身前替我挡风遮雨~
                          这次也换我来治愈大家吧！
                          请记住，不论你是谁，你在哪里，难过或开心，我都在这里，
                          紧紧地抱住你。
                          “不要让那泪珠换来同样哭泣的云，任阴霾吞没希望的痕迹。”
                          所以，请驻足于此听我唱一曲吧，我会把天晴的祝福给你~
                        </div>
                      </div>
                    </div>
                  </a>
                </a-card>
              </a-timeline-item>
              <a-timeline-item>
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV1KB4y1K7Nj"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="
                          require('@/assets/image/视频封面/不可触碰的行星.jpg')
                        "
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          【原创曲】不可触碰的行星【人声本家】Feat.可嗒
                        </div>
                        <div class="desc">
                          大家早上好下午好晚上好！！
                          今天带来的曲子《不可触碰的行星》是我久违地担当了词作的作品～
                          也是@可嗒_Keda 专辑《Drifting to the
                          Future》的打头作——
                          我记得第一次听到这首歌是在半夜，可子突然给我发过来说“啊呀你听听我新歌！”
                          我点开之后完全被旋律吸引住了，就问他我可不可以整个中文版，他说好呀好呀，写完我俩录！
                          然后我用了三四个小时就写出了第一版词……
                          可能真的是和这首歌很投缘吧，之后也没做什么改动直接就拿去录了demo。
                          很幸运可以遇到这么会写的可达鸭，也很幸运自己可以遇见这么好的曲子唱！
                          总之，希望听到这首歌的每一个你都能够喜欢～
                          V家版本：BV1Ev411E7Ch staff：
                          演唱：可嗒Keda&尤利娅Yulia 作曲/编曲：可嗒Keda
                          作词：尤利娅Yulia
                          吉他/母带：ZZM泽猫（泽猫giegie是神不用我多说了）
                          后期：萨摩灰（一如既往的靠谱！！妈咪真的很有求必应呜呜呜）
                          曲绘：浮途（超超超牛的途途！！拿到图的时候惊呆了，这就是超级大作吗？！）
                          PV：K_Lacid（千千我的天使！！第一首原创曲就有这么高质量的pv真的很幸福！）
                          封面：么羊（羊他真的很强！！约！！！真的好厉害！）
                        </div>
                      </div>
                    </div>
                  </a>
                </a-card>
              </a-timeline-item>
            </a-timeline>
          </a-tab-pane>

          <!-- 翻唱曲 -->
          <a-tab-pane key="2" class="tab-pane-wrapper">
            <span slot="tab" :style="headStyle">
              <a-icon type="audio" />
              翻唱曲
            </span>
            <a-timeline>
              <a-timeline-item>
                <a-card class="card-wrapper">
                  <p>
                    Card 2
                  </p>
                </a-card>
              </a-timeline-item>
              <a-timeline-item>
                <a-card class="card-wrapper">
                  <p>Card 22</p>
                </a-card>
              </a-timeline-item>
            </a-timeline>
          </a-tab-pane>

          <!-- 整活 -->
          <a-tab-pane key="3" class="tab-pane-wrapper">
            <span slot="tab" :style="headStyle">
              <a-icon type="reddit" />
              整活
            </span>
            <a-timeline>
              <a-timeline-item>
                <a-card class="card-wrapper">
                  <p>
                    Card 3
                  </p>
                </a-card>
              </a-timeline-item>
              <a-timeline-item>
                <a-card class="card-wrapper">
                  <p>Card 33</p>
                </a-card>
              </a-timeline-item>
            </a-timeline>
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
      // 根据标签切换，更改背景图
      bgImg: {
        backgroundImage:
          'url(' + require('@/assets/image/背景图/通用背景图-3.jpg') + ')'
      },
      // 改变标签字体
      headStyle: {
        'font-size': '26px'
      }
    }
  },

  methods: {
    handleChangeTab(activeKey) {
      if (activeKey === '1') {
        this.bgImg = {
          backgroundImage:
            'url(' + require('@/assets/image/背景图/通用背景图-3.jpg') + ')'
        }
      } else if (activeKey === '2') {
        this.bgImg = {
          backgroundImage:
            'url(' + require('@/assets/image/背景图/通用背景图-4.jpg') + ')'
        }
      } else if (activeKey === '3') {
        this.bgImg = {
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
    min-height: 100vh;
    padding: 40px 0;
    background: 50% 50% no-repeat fixed;
    background-size: cover;
    display: flex;
    justify-content: center;

    .video-wrapper {
      width: 80%;
      background-color: rgba(255, 255, 255, 0.12);
      border-radius: 16px;

      .tab-pane-wrapper {
        padding: 40px 120px;

        .card-wrapper {
          border-radius: 8px;
          &:hover {
            box-shadow: 0 0 4px 4px rgb(255, 115, 0); // 添加下阴影
          }
          .content-wrapper {
            display: flex;
            align-items: center;
            height: 130px;
            .video-img {
              height: 100%;
              border-radius: 6px;
            }
            .text-wrapper {
              height: 100%;
              overflow: hidden;
              flex: 1;
              color: #000;
              padding-left: 20px;
              .title {
                font-size: 22px;
                font-weight: 700;
              }
              .desc {
                padding-top: 12px;
                font-weight: lighter;
                text-indent: 2em; // 首行缩进2字符
              }
            }
          }
        }
      }
    }
  }
}
</style>
