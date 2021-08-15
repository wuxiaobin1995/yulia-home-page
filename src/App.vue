<!--
 * @Author      : Mr.bin
 * @Date        : 2021-07-30 11:49:52
 * @LastEditTime: 2021-08-15 15:26:24
 * @Description : 根组件
-->
<template>
  <div id="app">
    <router-view />
    <!-- 音乐播放器组件 -->
    <aplayer
      :audio="audio"
      :fixed="true"
      :mini="true"
      :volume="0.1"
      :listFolded="true"
    />
    <!-- 返回顶部组件 -->
    <a-back-top />
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      audio: [
        {
          name: 'Speechless',
          artist: '尤利娅Yulia',
          url: require('../src/assets/music/《Speechless》无损音质.mp3'),
          cover: require('../src/assets/music/我绝对不会沉默不语.jpg')
        },
        {
          name: '斯卡布罗集市',
          artist: '尤利娅Yulia',
          url: require('../src/assets/music/《斯卡布罗集市》无损音质.mp3'),
          cover: require('../src/assets/music/斯卡布罗集市.jpg')
        },
        {
          name: '相思',
          artist: '尤利娅Yulia',
          url: require('../src/assets/music/《相思》无损音质.mp3'),
          cover: require('../src/assets/music/相思.jpg')
        },
        {
          name: '水上灯',
          artist: '尤利娅Yulia',
          url: require('../src/assets/music/《水上灯》无损音质.mp3'),
          cover: require('../src/assets/music/水上灯.jpg')
        },
        {
          name: '渡月橋 ~君 想ふ~',
          artist: '尤利娅Yulia',
          url: require('../src/assets/music/《渡月橋 ~君 想ふ~》无损音质.mp3'),
          cover: require('../src/assets/music/渡月桥.jpg')
        },
        {
          name: '猫头鹰～猫头鹰的来客通知～',
          artist: '尤利娅Yulia',
          url: require('../src/assets/music/《猫头鹰～猫头鹰的来客通知～》无损音质-消音伴奏版.mp3'),
          cover: require('../src/assets/music/猫头鹰.jpg')
        },
        {
          name: 'One Last Kiss',
          artist: '尤利娅Yulia',
          url: require('../src/assets/music/《One Last Kiss》无损音质.mp3'),
          cover: require('../src/assets/music/ONE-LAST-KISS.jpg')
        },
        {
          name: '时候',
          artist: '尤利娅Yulia',
          url: require('../src/assets/music/《时候》无损音质.mp3'),
          cover: require('../src/assets/music/时候.jpg')
        },
        {
          name: '世事艰难，我拥抱你',
          artist: '尤利娅Yulia',
          url: require('../src/assets/music/《世事艰难，我拥抱你》无损音质.mp3'),
          cover: require('../src/assets/music/世事艰难我拥抱你.jpg')
        },
        {
          name: '不可触碰的行星',
          artist: '尤利娅Yulia',
          url: require('../src/assets/music/《不可触碰的行星》无损音质.mp3'),
          cover: require('../src/assets/music/不可触碰的行星.jpg')
        },
        {
          name: '桜流し',
          artist: '尤利娅Yulia',
          url: require('../src/assets/music/《桜流し》无损音质.wav'),
          cover: require('../src/assets/music/桜流し.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/style/reset.scss';
</style>
