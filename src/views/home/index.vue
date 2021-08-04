<!--
 * @Author      : 吴晓斌
 * @Date        : 2021-07-30 11:56:37
 * @LastEditTime: 2021-08-04 17:52:26
 * @Description : 首页
-->
<template>
  <div class="container">
    <!-- 轮播图 -->
    <div class="slideshow-container">
      <swiper class="slideshow-wrapper" :options="swiperOptions" ref="mySwiper">
        <swiper-slide v-for="(item, index) of imgList" :key="index">
          <a
            :href="
              item.link ? item.link : 'https://space.bilibili.com/650573749'
            "
            target="_blank"
          >
            <img :src="item.imgSrc" width="100%" height="100%" />
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <!-- 个人介绍 -->
    <div class="introduction-container">
      <a-card class="card-wrapper" :bordered="false">
        <a-divider orientation="center" class="title">尤利娅是谁？</a-divider>
        <a-tabs default-active-key="1" tab-position="right" size="large">
          <!-- 简介 -->
          <a-tab-pane key="1">
            <span slot="tab">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bianzu"></use>
              </svg>
              &nbsp;&nbsp;简介
            </span>
            <div class="tab-item-wrapper one">
              <!-- 左侧介绍栏 -->
              <div class="one-avatar">
                <!-- 头像 -->
                <a-avatar :src="yuliaAvatar" :size="200" />
                <!-- 标签 -->
                <div class="tags">
                  <div class="item">
                    UID&nbsp;：
                    <a-tag color="green">
                      650573749
                    </a-tag>
                  </div>
                  <div class="item">
                    身份：
                    <a-tag color="orange">
                      Atlantis-塞壬公主
                    </a-tag>
                  </div>
                  <div class="item">
                    年龄：
                    <a-tag color="gray">
                      保密
                    </a-tag>
                  </div>
                  <div class="item">
                    性别：
                    <a-tag color="pink">
                      女
                    </a-tag>
                  </div>
                  <div class="item">
                    身高：
                    <a-tag color="">
                      2米
                    </a-tag>
                  </div>
                  <div class="item">
                    体重：
                    <a-tag color="">
                      180吨
                    </a-tag>
                  </div>
                  <div class="item">
                    住址：
                    <a-tag color="cyan">
                      亚特兰蒂斯王国
                    </a-tag>
                  </div>
                  <div class="item">
                    爱好：
                    <a-tag color="purple">
                      恰海吵
                    </a-tag>
                    <a-tag color="purple">
                      wasabi~
                    </a-tag>
                  </div>
                </div>
              </div>
              <!-- 详细介绍 -->
              <div class="one-content">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;✨完全属于自己，无公会，非签约，独立个人势，不是全职✨
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;尤利娅Yulia（鱼鱼、理理、lili、尤老师、牛老师、鱼人、腮人、SUREN）沉睡多年苏醒的塞壬来到陆地上学习！
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;因为是塞壬，所以很喜欢唱歌！并且唱歌很好听！是黑听人的理想直播间！但是如果可以的话还请多发弹幕应援（鞠躬）
                  性子很直，说话也很直，开心就是开心，不开心就是不开心，对待工作的态度非常认真，有着“一件事情要做就要把它做好”的信念，总是想把作品做到最好再呈现给大家
                  当VUP是为了让更多人能够听见自己的歌声，并不打算拿VUP当做一个吃饭的职业，所以能够做到把所有收入拿出来在投
                  入进来，甚至自己还另外掏钱出来投入（债务增加中...）。
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;因为只打算当做兴趣爱好来做所以没打算加入任何工会、企业、社团，也没和叔叔签约。
                </p>
              </div>
            </div>
          </a-tab-pane>

          <!-- 歌唱 -->
          <a-tab-pane key="2">
            <span slot="tab">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-changge"></use>
              </svg>
              &nbsp;&nbsp;歌唱
            </span>
            <div class="tab-item-wrapper two">
              <div class="two-content">
                <p>
                  1、中：古风、戏曲、民乐、流行音乐
                </p>
                <p>
                  2、英：民谣、歌剧、美声、流行音乐
                </p>
                <p>3、日：罗马音战士......................</p>
                <p>
                  4、俄：极道弹舌.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​
                </p>
                <p>5、意大利：歌剧、音乐剧..............</p>
                <p>6 、小语种：歌剧、音乐剧..............</p>
              </div>
            </div>
          </a-tab-pane>

          <!-- 乐器 -->
          <a-tab-pane key="3">
            <span slot="tab">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gangqin"></use>
              </svg>
              &nbsp;&nbsp;乐器
            </span>
            <div class="tab-item-wrapper three">
              <div class="three-content">
                <p>钢琴、二胡、里拉琴、竹笛、卡祖笛</p>
              </div>
            </div>
          </a-tab-pane>

          <!-- 舞蹈 -->
          <a-tab-pane key="4">
            <span slot="tab">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wudaoyishuye"></use>
              </svg>
              &nbsp;&nbsp;舞蹈
            </span>
            <div class="tab-item-wrapper four">
              <div class="four-content">
                <p>民族舞、芭蕾舞、韩舞、现代舞</p>
              </div>
            </div>
          </a-tab-pane>

          <!-- 特长 -->
          <a-tab-pane key="5">
            <span slot="tab">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon--huangguan"></use>
              </svg>
              &nbsp;&nbsp;特长
            </span>
            <div class="tab-item-wrapper five">
              <div class="five-content">
                <p>超高音、弹舌、说相声</p>
              </div>
            </div>
          </a-tab-pane>
        </a-tabs>
      </a-card>
    </div>

    <!-- 立绘展示 -->
    <div class="model-container">
      <div class="model-wrapper">
        <a-divider orientation="center" class="top-title">立绘展区</a-divider>
        <a-card
          class="card-wrapper"
          v-for="(item, index) of modelList"
          :key="index"
        >
          <img slot="cover" :src="item.src" />
          <a-divider />
          <a-card-meta :title="item.title">
            <template slot="description">
              {{ item.content }}
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',

  data() {
    return {
      /* 轮播图资源 */
      imgList: [
        {
          imgSrc: require('@/assets/image/轮播图/1月录播.png'),
          link: 'https://www.bilibili.com/video/BV1Nt4y1r7P8'
        },
        {
          imgSrc: require('@/assets/image/轮播图/2月录播.png'),
          link: 'https://www.bilibili.com/video/BV1SA411u7tp'
        },
        {
          imgSrc: require('@/assets/image/轮播图/3月录播.png'),
          link: 'https://www.bilibili.com/video/BV1mA411K7jt'
        },
        {
          imgSrc: require('@/assets/image/轮播图/4月录播.png'),
          link: 'https://www.bilibili.com/video/BV1wf4y14752'
        },
        {
          imgSrc: require('@/assets/image/轮播图/5月录播.png'),
          link: 'https://www.bilibili.com/video/BV1YQ4y1d7uA'
        },
        {
          imgSrc: require('@/assets/image/轮播图/6月录播.png'),
          link: 'https://www.bilibili.com/video/BV1P44y167qj'
        },
        {
          imgSrc: require('@/assets/image/轮播图/7月录播.png'),
          link: 'https://www.bilibili.com/video/BV1AB4y1T7by'
        },
        {
          imgSrc: require('@/assets/image/轮播图/8月录播.png'),
          link: 'https://www.bilibili.com/video/BV1sU4y1J7jA'
        }
      ],
      /* 轮播图配置项 */
      swiperOptions: {
        // 分页器
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        effect: 'fade', // 切换效果
        speed: 1500, // 切换速度
        autoplay: {
          delay: 3500, // 切换间隔时间
          disableOnInteraction: false
        },
        grabCursor: true, // 鼠标覆盖Swiper时指针会变成手掌形状
        loop: true // 开启轮询
      },
      /* 尤利娅头像 */
      yuliaAvatar: require('@/assets/image/头像.png'),
      /* 立绘 */
      modelList: [
        {
          src: require('@/assets/image/立绘/初始皮-白.jpg'),
          name: '初始皮-白.jpg',
          title: '初始皮-白',
          content: '初始皮-白初始皮-白'
        },
        {
          src: require('@/assets/image/立绘/原始皮-黑.png'),
          name: '原始皮-黑.png',
          title: '原始皮-黑',
          content: '原始皮-黑原始皮-黑'
        },
        {
          src: require('@/assets/image/立绘/幼利娅-皮.jpg'),
          name: '幼利娅-皮.jpg',
          title: '幼利娅-皮',
          content: '幼利娅-皮幼利娅-皮'
        },
        {
          src: require('@/assets/image/立绘/毛衣皮-棕色.png'),
          name: '毛衣皮-棕色.png',
          title: '毛衣皮-棕色',
          content: '毛衣皮-棕色毛衣皮-棕色'
        },
        {
          src: require('@/assets/image/立绘/毛衣皮-粉色.jpg'),
          name: '毛衣皮-粉色.jpg',
          title: '毛衣皮-粉色',
          content: '毛衣皮-粉色毛衣皮-粉色'
        },
        {
          src: require('@/assets/image/立绘/理理.png'),
          name: '理理.png',
          title: '理理',
          content: '理理理理'
        },
        {
          src: require('@/assets/image/立绘/白旗袍-黑发.png'),
          name: '白旗袍-黑发.png',
          title: '白旗袍-黑发',
          content: '白旗袍-黑发白旗袍-黑发'
        },
        {
          src: require('@/assets/image/立绘/白旗袍-白发.png'),
          name: '白旗袍-白发.png',
          title: '白旗袍-白发',
          content: '白旗袍-白发白旗袍-白发'
        },
        {
          src: require('@/assets/image/立绘/红旗袍.png'),
          name: '红旗袍.png',
          title: '红旗袍',
          content: '红旗袍红旗袍'
        },
        {
          src: require('@/assets/image/立绘/璐蜜娜.jpg'),
          name: '璐蜜娜.jpg',
          title: '璐蜜娜',
          content: '璐蜜娜璐蜜娜'
        },
        {
          src: require('@/assets/image/立绘/偶像服.png'),
          name: '偶像服.png',
          title: '偶像服',
          content: '偶像服偶像服'
        },
        {
          src: require('@/assets/image/立绘/JK服.png'),
          name: 'JK服.png',
          title: 'JK服',
          content: 'JK服JK服'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;

  /* 轮播图 */
  .slideshow-container {
    width: 100%;
    padding: 60px 0;
    position: relative;
    display: flex;
    align-items: center;
    // 实现背景高斯模糊
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 740px;
      background: url('../../assets/image/轮播图背景.png') 50% 50% no-repeat;
      filter: blur(6px);
      z-index: -1;
    }
    // 轮播区域
    .slideshow-wrapper {
      width: 1000px;
      height: 630px;
      border-radius: 40px;
      box-shadow: 0 4px 16px 10px rgb(80, 80, 80); // 添加下阴影
    }
  }

  /* 个人介绍 */
  .introduction-container {
    width: 100%;
    padding: 40px 0 40px 0;
    background-color: rgb(245, 247, 250);
    display: flex;
    justify-content: center;
    // 卡片
    .card-wrapper {
      width: 80%;
      box-shadow: 0 4px 6px 2px rgb(210, 210, 210); // 添加下阴影
      border-radius: 10px;
      .title {
        font-size: 32px;
        font-weight: 700;
      }
      .tab-item-wrapper {
        height: 500px;
      }
      // 简介
      .one {
        display: flex;
        // 左侧介绍栏
        .one-avatar {
          display: flex;
          flex-direction: column;
          align-items: center;
          .tags {
            padding-top: 20px;
            font-size: 16px;
            font-weight: 700;
            .item {
              padding-bottom: 10px;
            }
          }
        }
        // 详细介绍
        .one-content {
          padding-top: 40px;
          padding-left: 40px;
          font-size: 22px;
        }
      }
      // 歌唱
      .two {
        .two-content {
          font-size: 22px;
        }
      }
      // 乐器
      .three {
        .three-content {
          font-size: 22px;
        }
      }
      // 舞蹈
      .four {
        .four-content {
          font-size: 22px;
        }
      }
      // 特长
      .five {
        .five-content {
          font-size: 22px;
        }
      }
    }
  }

  /* 立绘展示 */
  .model-container {
    width: 100%;
    padding: 40px 0 0 0;
    display: flex;
    justify-content: center;
    .model-wrapper {
      width: 80%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      // 大标题
      .top-title {
        font-size: 32px;
        font-weight: 700;
      }
      // 展示卡片
      .card-wrapper {
        width: 290px;
        margin-bottom: 40px;
        border-radius: 0 0 30px 30px;
        &:hover {
          box-shadow: 0 8px 8px 2px rgb(210, 210, 210); // 添加下阴影
          cursor: pointer;
        }
      }
    }
  }
}
</style>
