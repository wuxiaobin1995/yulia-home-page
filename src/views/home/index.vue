<!--
 * @Author      : 吴晓斌
 * @Date        : 2021-07-30 11:56:37
 * @LastEditTime: 2021-08-03 18:30:46
 * @Description : 首页
-->
<template>
  <div class="container">
    <!-- <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-Bilibili"></use>
    </svg> -->
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

    <!-- 个人简介 -->
    <div class="introduction-container">
      <div>
        <a-avatar :src="require('@/assets/image/偶像头像.jpg')" :size="64" />
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
        speed: 1000, // 切换速度
        autoplay: {
          delay: 5000, // 切换间隔时间
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
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 740px;
      background: url('../../assets/image/轮播图背景.png') 55% 50% no-repeat;
      filter: blur(3px);
      z-index: -1;
    }
    .slideshow-wrapper {
      width: 1000px;
      height: 630px;
      border-radius: 60px;
      box-shadow: 0 4px 16px 10px rgb(80, 80, 80); // 添加下阴影
    }
  }

  /* 个人简介 */
  .introduction-container {
    height: 1000px;
  }
}
</style>
