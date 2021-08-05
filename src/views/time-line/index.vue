<!--
 * @Author      : 吴晓斌
 * @Date        : 2021-08-02 20:19:45
 * @LastEditTime: 2021-08-05 18:00:24
 * @Description : 时间线
-->
<template>
  <div class="container">
    <div class="time-line-container">
      <div class="time-line-wrapper">
        <!-- 按钮 -->
        <a-button type="primary" @click="handleChangeReverse">
          {{ this.reverse === true ? '正序' : '倒序' }}
        </a-button>

        <!-- 时间线 -->
        <a-timeline :reverse="reverse" mode="alternate">
          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '20px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1fK411N7Qp"
                  target="_blank"
                  >初投稿</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2020-09-05</a-tag>
              <div class="content">
                <div>
                  投稿了第一个翻唱视频《Speechless》【我绝对不会沉默不语】作为自己的出道曲
                </div>
                <div>
                  这个翻唱对鱼鱼本身具有很大意义，也是鱼鱼和水手们旅途的开始(梦开始的地方)
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '20px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1HZ4y1N7N1"
                  target="_blank"
                  >首播</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2020-09-06</a-tag>
              <div class="content">
                <div>
                  这是鱼鱼的首次直播，是直播生涯的正式开始:【塞壬初次直播】充斥着翻车和谢罪的首次相见
                </div>
                <div>
                  那时候的鱼鱼没有直播经验，对电子设备也是很不熟悉，连谢礼物都没办法谢全，只能通过唱歌来缓解尴尬，很可爱w（粉丝牌差点变成翻车鱼）
                </div>
                <div>
                  定下了25个舰长放出幼女皮的约定
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '20px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">幼女皮暴露</div>
              <a-tag slot="extra" color="#f50" class="date">2020-09-16</a-tag>
              <div class="content">
                <div>
                  那天晚上神回，我也是在那天晚上被（骗）吸引上了船，在舰长数达到23个之后鱼鱼自己没忍住把幼利娅提前放了出来(她实在是太可爱了！)
                </div>
                <div>
                  下播前的舰长数为27个~
                </div>
              </div>
            </a-card>
          </a-timeline-item>
        </a-timeline>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'time-line',

  data() {
    return {
      reverse: false
    }
  },

  methods: {
    /**
     * @description: 正序/倒序按钮
     */
    handleChangeReverse() {
      this.reverse = !this.reverse
    }
  }
}
</script>

<style lang="scss">
// 把时间线中间部分透明化
.ant-timeline-item-head {
  background-color: rgba(0, 0, 0, 0) !important;
}
</style>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;

  /* 时间线 */
  .time-line-container {
    width: 100%;
    padding: 40px 0;
    background: url('../../assets/image/背景图/通用背景图-2.png') 50% 40% repeat
      fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    .time-line-wrapper {
      width: 80%;
      // 展示卡片
      .item-wrapper {
        border-radius: 16px;
        text-align: left;
        &:hover {
          box-shadow: 0 0 2px 2px rgb(255, 115, 0); // 添加下阴影
        }
        // 标题
        .title {
          font-size: 26px;
          font-weight: 700;
        }
        // 日期
        .date {
          font-size: 16px;
        }
        // 内容
        .content {
          font-size: 18px;
          text-indent: 2em; // 首行缩进2字符
        }
      }
    }
  }
}
</style>
