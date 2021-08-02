<!--
 * @Author      : 吴晓斌
 * @Date        : 2021-07-30 11:56:37
 * @LastEditTime: 2021-08-03 01:02:23
 * @Description : 首页
-->
<template>
  <div class="container">
    <!-- <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-Bilibili"></use>
    </svg> -->
    <div class="swiper-container">
      <swiper class="swiper-wrapper" :options="swiperOptions" ref="mySwiper">
        <swiper-slide>
          <img
            :src="require('@/assets/轮播图/4月录播.png')"
            width="100%"
            height="100%"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            :src="require('@/assets/轮播图/5月录播.png')"
            width="100%"
            height="100%"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            :src="require('@/assets/轮播图/6月录播.png')"
            width="100%"
            height="100%"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            :src="require('@/assets/轮播图/8月录播.png')"
            width="100%"
            height="100%"
          />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
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
      swiperOptions: {
        // 分页器
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
          progressbarOpposite: true
        },
        speed: 5000, // slider自动滑动开始到结束的时间（单位ms）
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

  .swiper-container {
    width: 100%;
    height: 360px;
    background-color: rgb(214, 214, 214);
    display: flex;
    align-items: center;
    .swiper-container {
      width: 80%;
      height: 300px;
      background-color: rgb(255, 255, 255);
    }
  }

  .demo {
    height: 1000px;
  }
}
</style>
