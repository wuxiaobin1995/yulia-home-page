<!--
 * @Author      : 吴晓斌
 * @Date        : 2021-07-30 11:56:37
 * @LastEditTime: 2021-08-04 01:09:02
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
        <a-tabs default-active-key="1" tab-position="right">
          <a-tab-pane key="1">
            <span slot="tab">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bianzu"></use>
              </svg>
              &nbsp;&nbsp;简介
            </span>
            <div>
              <a-avatar
                :src="require('@/assets/image/偶像头像.jpg')"
                :size="128"
              />
              <p>
                个人势，就读于亚特兰蒂斯音乐学院
                1、中：古风、戏曲、民乐、流行音乐
              </p>
              <p>
                ✨完全属于自己，无公会，非签约，独立个人势✨
                群：561506737录播组@塞壬陆地生活观委会 妈妈@Cigma弟弟@柯洛Kuro
                不是全职
              </p>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2">
            <span slot="tab">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-changge"></use>
              </svg>
              &nbsp;&nbsp;歌唱
            </span>
            <div>
              <p>
                1、英：民谣、歌剧、美声、流行音乐
              </p>
              <p>2、日：罗马音战士......................</p>
              <p>
                3、俄：极道弹舌.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​.​
              </p>
              <p>4、意大利：歌剧、音乐剧..............</p>
              <p>5 、小语种：歌剧、音乐剧..............</p>
            </div>
          </a-tab-pane>
          <a-tab-pane key="3">
            <span slot="tab">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gangqin"></use>
              </svg>
              &nbsp;&nbsp;乐器
            </span>
            <div>
              <p>钢琴、二胡、里拉琴、竹笛、卡祖笛</p>
            </div>
          </a-tab-pane>
          <a-tab-pane key="4">
            <span slot="tab">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wudaoyishuye"></use>
              </svg>
              &nbsp;&nbsp;舞蹈
            </span>
            <div>
              <p>民族舞、芭蕾舞、韩舞、现代舞</p>
            </div>
          </a-tab-pane>
          <a-tab-pane key="5">
            <span slot="tab">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon--huangguan"></use>
              </svg>
              &nbsp;&nbsp;特长
            </span>
            <div>
              <p>超高音、弹舌、说相声</p>
            </div>
          </a-tab-pane>
        </a-tabs>
      </a-card>
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
          imgSrc: require('@/assets/轮播图/1月录播.png'),
          link: 'https://www.bilibili.com/video/BV1Nt4y1r7P8'
        },
        {
          imgSrc: require('@/assets/轮播图/2月录播.png'),
          link: 'https://www.bilibili.com/video/BV1SA411u7tp'
        },
        {
          imgSrc: require('@/assets/轮播图/3月录播.png'),
          link: 'https://www.bilibili.com/video/BV1mA411K7jt'
        },
        {
          imgSrc: require('@/assets/轮播图/4月录播.png'),
          link: 'https://www.bilibili.com/video/BV1wf4y14752'
        },
        {
          imgSrc: require('@/assets/轮播图/5月录播.png'),
          link: 'https://www.bilibili.com/video/BV1YQ4y1d7uA'
        },
        {
          imgSrc: require('@/assets/轮播图/6月录播.png'),
          link: 'https://www.bilibili.com/video/BV1P44y167qj'
        },
        {
          imgSrc: require('@/assets/轮播图/7月录播.png'),
          link: 'https://www.bilibili.com/video/BV1AB4y1T7by'
        },
        {
          imgSrc: require('@/assets/轮播图/8月录播.png'),
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
      }
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
    height: 740px;
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
      background: url('../../assets/image/轮播图背景.png') 55% 50% no-repeat;
      filter: blur(4px);
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
      box-shadow: 0 4px 6px 2px rgb(209, 209, 209); // 添加下阴影
      border-radius: 10px;
      .title {
        font-size: 32px;
        font-weight: 700;
      }
    }
  }
}
</style>
