<!--
 * @Author      : 吴晓斌
 * @Date        : 2021-07-30 11:56:37
 * @LastEditTime: 2021-08-03 16:54:40
 * @Description : 首页
-->
<template>
  <div class="container">
    <!-- <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-Bilibili"></use>
    </svg> -->
    <div class="image-container">
      <swiper class="image-wrapper" :options="swiperOptions" ref="mySwiper">
        <swiper-slide v-for="(item, index) of imgList" :key="index">
          <a :href="item.link" target="_blank">
            <img :src="item.imgSrc" width="100%" height="100%" />
          </a>
        </swiper-slide>
      </swiper>
    </div>

    <div class="demo">内容</div>
  </div>
</template>

<script>
export default {
  name: 'home',

  data() {
    return {
      imgList: [
        {
          imgSrc: require('@/assets/轮播图/4月录播.png'),
          link: 'https://www.bilibili.com/video/BV1wf4y14752'
        },
        {
          imgSrc: require('@/assets/轮播图/5月录播.png'),
          link: ''
        },
        {
          imgSrc: require('@/assets/轮播图/6月录播.png'),
          link: 'https://www.bilibili.com/video/BV1P44y167qj'
        },
        {
          imgSrc: require('@/assets/轮播图/8月录播.png'),
          link: ''
        }
      ],
      swiperOptions: {
        effect: 'fade',
        autoplay: {
          delay: 3000, // 切换间隔时间
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
  .image-container {
    width: 100%;
    height: 700px;
    position: relative;
    display: flex;
    align-items: center;
    .image-wrapper {
      width: 1000px;
      height: 630px;
      border-radius: 40px;
      box-shadow: 0 4px 16px 8px rgb(80, 80, 80); // 添加下阴影
    }
  }
  .image-container::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 700px;
    background: url('../../assets/image/轮播图背景.png') 50% 50% no-repeat;
    filter: blur(3px);
    z-index: -1;
  }

  .demo {
    height: 1000px;
  }
}
</style>
