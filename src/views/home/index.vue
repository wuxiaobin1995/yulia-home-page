<!--
 * @Author      : Mr.bin
 * @Date        : 2021-08-04 09:06:42
 * @LastEditTime: 2021-09-07 14:32:04
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
        <div class="swiper-button-prev swiper-button-black"></div>
        <div class="swiper-button-next swiper-button-black"></div>
      </swiper>
    </div>

    <!-- 个人介绍 -->
    <div class="introduction-container">
      <a-card class="card-wrapper" :bordered="false">
        <!-- 大标题 -->
        <a-divider orientation="center" class="card-title">
          尤利娅是谁？
        </a-divider>
        <!-- 内容区 -->
        <div class="card-content-wrapper">
          <!-- 个人印象 -->
          <div class="avatar">
            <!-- 头像 -->
            <a-avatar :src="yuliaAvatar" :size="200" />
            <!-- 标签 -->
            <div class="tags">
              <div class="item">
                UID：
                <a-tag color="green">
                  650573749
                </a-tag>
              </div>
              <div class="item">
                住址：
                <a-tag color="cyan">
                  亚特兰蒂斯王国
                </a-tag>
              </div>
              <div class="item">
                身份：
                <a-tag color="orange">
                  Atlantis-塞壬公主
                </a-tag>
              </div>
              <div class="item">
                粉丝群：
                <a-tag color="pink">
                  561506737
                </a-tag>
              </div>
              <div class="item">
                年龄：
                <a-tag color="gray">
                  保密
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
          <!-- 详细内容 -->
          <a-tabs
            class="tabs-wrapper"
            default-active-key="1"
            tab-position="right"
            size="large"
          >
            <!-- 简介 -->
            <a-tab-pane key="1">
              <span slot="tab">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-bianzu"></use>
                </svg>
                简介
              </span>
              <div class="one">
                <div class="one-content">
                  <p>
                    ✨完全属于自己，无公会，非签约，独立个人势，不是全职✨
                  </p>
                  <p>
                    尤利娅Yulia（更多会叫：鱼鱼），作为沉睡多年苏醒的塞壬，如今来到陆地上学习啦！
                  </p>
                  <p>
                    因为塞壬的天性，所以很喜欢唱歌！并且唱歌很好听！黑听人的理想直播间！但是如果可以的话还请多发弹幕应援（鞠躬）
                  </p>
                  <p>
                    为人比较感性，性格也是有话直说的类型，开心就是开心，不开心就是不开心；在工作的态度会非常认真和投入，始终贯彻着“一件事情要做，就要把它做好”的信念；为了让自己的作品始终呈现出最好的给大家，不懈努力中！
                  </p>
                  <p>
                    当VUP的初衷是为了让更多人能够听见自己的歌声，而非当做一个吃饭的职业；因此现在可以将所有收入拿出来投入VUP事业，甚至不惜自己贴钱来投入其中！（债务增加中...）
                  </p>
                  <p>
                    因为只打算作为兴趣爱好来做VUP，所以现在没打算加入任何公会、企业或社团，也未曾与叔叔签约。
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
                歌唱
              </span>
              <div class="two">
                <div class="two-content">
                  <p>
                    1、中：古风、戏曲、民乐、流行音乐
                  </p>
                  <p>
                    2、英：民谣、歌剧、美声、流行音乐
                  </p>
                  <p>3、日：罗马音战士</p>
                  <p>
                    4、俄：极道弹舌
                  </p>
                  <p>5、意大利：歌剧、音乐剧</p>
                  <p>6 、小语种：歌剧、音乐剧</p>
                </div>
              </div>
            </a-tab-pane>

            <!-- 乐器 -->
            <a-tab-pane key="3">
              <span slot="tab">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-gangqin"></use>
                </svg>
                乐器
              </span>
              <div class="three">
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
                舞蹈
              </span>
              <div class="four">
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
                特长
              </span>
              <div class="five">
                <div class="five-content">
                  <p>超高音、弹舌、说相声</p>
                </div>
              </div>
            </a-tab-pane>

            <!-- 悄悄话 -->
            <a-tab-pane key="6">
              <span slot="tab">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-qiaoqiaohua"></use>
                </svg>
                悄悄话
              </span>
              <div class="six">
                <div class="six-content">
                  <p>
                    1、尤利娅是刚开始系统学习音乐、舞蹈、乐器等，所以有唱得不好的大家见谅见谅，大家安静听歌、享受音乐就好(*^_^*)
                  </p>
                  <p>
                    2、她挺在意自己的粉丝们的，而且很愿意跟粉丝们做朋友，她认为：<span
                      :style="{ color: 'green' }"
                      >“演绎者和粉丝、观众应该是互相照亮的，大家互相尊重、互相进步、保持合理的距离，这样的关系才是良性的、可持续的”</span
                    >。
                  </p>
                  <p>
                    3、她未来的志向是登台表演，所学专业也是偏向舞台表演的，祝她终有一天能实现。致此：“梦想再大也不嫌大，追梦的人再小也不嫌小”。
                  </p>
                </div>
              </div>
            </a-tab-pane>
          </a-tabs>
        </div>
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
        },
        {
          imgSrc: require('@/assets/image/轮播图/9月录播.png'),
          link: 'https://www.bilibili.com/video/BV1z64y1Y7Vn'
        }
      ],
      /* 轮播图配置项 */
      swiperOptions: {
        // 分页器
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        // 箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        effect: 'fade', // 切换效果
        speed: 500, // 切换速度
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
          content: ''
        },
        {
          src: require('@/assets/image/立绘/原始皮-黑.png'),
          name: '原始皮-黑.png',
          title: '原始皮-黑',
          content: ''
        },
        {
          src: require('@/assets/image/立绘/幼利娅-皮.jpg'),
          name: '幼利娅-皮.jpg',
          title: '幼利娅-皮',
          content: ''
        },
        {
          src: require('@/assets/image/立绘/毛衣皮-棕色.png'),
          name: '毛衣皮-棕色.png',
          title: '毛衣皮-棕色',
          content: ''
        },
        {
          src: require('@/assets/image/立绘/毛衣皮-粉色.jpg'),
          name: '毛衣皮-粉色.jpg',
          title: '毛衣皮-粉色',
          content: ''
        },
        {
          src: require('@/assets/image/立绘/理理.png'),
          name: '理理.png',
          title: '理理',
          content: ''
        },
        {
          src: require('@/assets/image/立绘/白旗袍-黑发.png'),
          name: '白旗袍-黑发.png',
          title: '白旗袍-黑发',
          content: ''
        },
        {
          src: require('@/assets/image/立绘/白旗袍-白发.png'),
          name: '白旗袍-白发.png',
          title: '白旗袍-白发',
          content: ''
        },
        {
          src: require('@/assets/image/立绘/红旗袍.png'),
          name: '红旗袍.png',
          title: '红旗袍',
          content: ''
        },
        {
          src: require('@/assets/image/立绘/璐蜜娜.jpg'),
          name: '璐蜜娜.jpg',
          title: '璐蜜娜',
          content: ''
        },
        {
          src: require('@/assets/image/立绘/偶像服.png'),
          name: '偶像服.png',
          title: '偶像服',
          content: ''
        },
        {
          src: require('@/assets/image/立绘/JK服.png'),
          name: 'JK服.png',
          title: 'JK服',
          content: ''
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
      background: url('../../assets/image/背景图/轮播图背景.png') 50% 50%
        no-repeat;
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
    background-color: rgba(245, 247, 250, 1);
    display: flex;
    justify-content: center;
    // 卡片
    .card-wrapper {
      width: 80%;
      box-shadow: 0 4px 6px 2px rgb(180, 180, 180); // 添加下阴影
      border-radius: 10px;
      // 大标题
      .card-title {
        font-size: 32px;
        font-weight: 700;
      }
      // 内容区
      .card-content-wrapper {
        display: flex;
        // 个人印象
        .avatar {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-right: 20px;
          border-right: 1px solid #e8e8e8;
          .tags {
            padding-top: 26px;
            font-size: 16px;
            font-weight: 700;
            .item {
              padding-bottom: 10px;
            }
          }
        }
        // 详细内容
        .tabs-wrapper {
          flex: 1;
          // 简介
          .one {
            .one-content {
              padding-top: 20px;
              padding-left: 24px;
              font-size: 22px;
              text-indent: 2em;
            }
          }
          // 歌唱
          .two {
            .two-content {
              padding-top: 20px;
              padding-left: 24px;
              font-size: 22px;
              text-indent: 2em;
            }
          }
          // 乐器
          .three {
            .three-content {
              padding-top: 20px;
              padding-left: 24px;
              font-size: 22px;
              text-indent: 2em;
            }
          }
          // 舞蹈
          .four {
            .four-content {
              padding-top: 20px;
              padding-left: 24px;
              font-size: 22px;
              text-indent: 2em;
            }
          }
          // 特长
          .five {
            .five-content {
              padding-top: 20px;
              padding-left: 24px;
              font-size: 22px;
              text-indent: 2em;
            }
          }
          // 悄悄话
          .six {
            .six-content {
              padding-top: 20px;
              padding-left: 24px;
              font-size: 22px;
              text-indent: 2em;
            }
          }
        }
      }
    }
  }

  /* 立绘展示 */
  .model-container {
    width: 100%;
    padding: 40px 0 0 0;
    background: url('../../assets/image/背景图/通用背景图-4.png') 50% 50%
      no-repeat fixed;
    background-size: cover;
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
