<!--
 * @Author      : Mr.bin
 * @Date        : 2021-07-30 15:49:57
 * @LastEditTime: 2021-09-22 11:28:23
 * @Description : 底部栏
-->
<template>
  <div class="container">
    <div class="wrapper">
      <!-- 本站简介 -->
      <div class="des">
        <div class="title">关于</div>
        <div>
          本站为
          <a href="https://space.bilibili.com/650573749" target="_blank">
            <span :style="{ color: '#1890ff' }">@尤利娅Yulia</span>
          </a>
          的个人网站，于2021-08-15创建，非营利性质，完全出于喜爱才建站的，希望更多人喜欢。
        </div>
      </div>

      <div class="divider"></div>

      <!-- 版权 -->
      <div class="copyright">
        <div class="title">版权</div>
        <div>Copyright © 2021~未来 保留所有权利</div>
        <div>本站最终解释权 昏睡茶壶</div>
      </div>

      <div class="divider"></div>

      <!-- 联系方式 -->
      <div class="tel">
        <div class="title">联系</div>
        <div>
          <span>站长：</span
          ><a href="https://space.bilibili.com/4110995" target="_blank">
            <span :style="{ color: '#1890ff' }">@昏睡茶壶</span>
          </a>
          <div>联系QQ：845225263（请写明来意，否则会拒绝好友申请）</div>
          <div>
            未来后端部分将由
            <a href="https://space.bilibili.com/40103758" target="_blank">
              <span :style="{ color: '#1890ff' }">@熊孩子</span>
            </a>
            负责
          </div>
          <div>
            本网站已运行：<span :style="{ color: 'red' }">
              {{ runtime }} 天
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomBar',

  data() {
    return {
      runtime: '' // 运行天数
    }
  },

  created() {
    // 计算运行天数
    const urodz = new Date('08/15/2021')
    const now = new Date()
    const ile = now.getTime() - urodz.getTime()
    this.runtime = Math.floor(ile / (1000 * 60 * 60 * 24))
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    width: 80%;
    padding: 30px 0;
    color: #818394;
    display: flex;
    justify-content: space-between;

    // 分割线
    .divider {
      border: 1px solid #fff;
    }

    // 本站简介
    .des {
      width: 400px;
      .title {
        color: #fff;
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 20px;
      }
    }
    // 版权
    .copyright {
      .title {
        color: #fff;
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 20px;
      }
    }
    // 联系方式
    .tel {
      .title {
        color: #fff;
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
