<!--
 * @Author      : Mr.bin
 * @Date        : 2021-08-12 18:41:46
 * @LastEditTime: 2021-08-15 15:25:36
 * @Description : 视频投稿
-->
<template>
  <div class="container">
    <!-- 视频投稿 -->
    <div class="video-container">
      <div class="video-wrapper">
        <!-- 卡片容器 -->
        <a-tabs default-active-key="1" tab-position="top">
          <!-- 原创曲 -->
          <a-tab-pane key="1" class="tab-pane-wrapper">
            <span slot="tab" :style="headStyle">
              <a-icon type="gitlab" />
              原创曲
            </span>
            <a-timeline :reverse="true">
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
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
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
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
            <a-timeline :reverse="true">
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV1fK411N7Qp"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="
                          require('@/assets/image/视频封面/我绝对不会沉默不语.jpg')
                        "
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          【Vup翻唱初投稿】Speechless【我绝对不会沉默不语】
                        </div>
                        <div class="desc">
                          曲名：Speechless 原唱：Naomi Scott
                          初次见面，我是尤利娅，是沉睡多年后醒来的塞壬。我可能还没有那么通情达理，明白人类的人情世故和交往方式，但我将永远以我最赤诚的心来对待所有喜爱我的人们。出道对我来说非常坎坷艰难，还遇到了一些让我直到现在都想不明白的人和事情。人类的情感真的好复杂啊。但是对于我来说，就算向我施压，也绝对别想让我沉默不语，这才是我一直以来的态度。有些人混淆黑白，颠倒是非，但我会永远坚守自己的初心与理想，陪着支持我的人一直走下去。
                          你们看好了。 “I won't be silenced.”
                        </div>
                      </div>
                    </div>
                  </a>
                </a-card>
              </a-timeline-item>
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV1jV41127oL"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="require('@/assets/image/视频封面/千里邀月.jpg')"
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          【喵x鸟x鱼x鸭？】何故撩拨我心弦？因为都是美少女呀！
                        </div>
                        <div class="desc">
                          本来想中秋翻唱的一首歌，一不小心冬天都来了！不知道还能不能撩你们的心弦~
                          和美少女们唱共同喜爱的歌曲真的是一件很美好的事情，希望你们喜欢！
                          歌词颜色分词：红（魂喵喵）、绿（云玉鸾）、紫（魔莉亚）、蓝（尤利娅）
                          ———————————————————— 原曲：BV15t411Q776
                          泠鸢yousa、茶理理、hanser、三无
                          翻唱：魂喵喵，云玉鸾，魔莉亚，尤利娅 pv：梦
                          混音：Irecorder/三星堆 背景绘图：Nagisa
                        </div>
                      </div>
                    </div>
                  </a>
                </a-card>
              </a-timeline-item>
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV11y4y1r7EX"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="
                          require('@/assets/image/视频封面/斯卡布罗集市.jpg')
                        "
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          斯卡布罗集市【海妖的Scarborough
                          Fair~与水手凄美的爱情故事】
                        </div>
                        <div class="desc">
                          原曲：Scarborough Fair 翻唱：尤利娅 曲绘：艾里
                          混音：漆柚 视频：果酱
                          非常非常喜欢这首歌，想唱出安详和平的感觉。
                          很庆幸自己可以出生在这个时代~
                          可以随心所欲给大家唱我喜欢的歌，做自己喜欢的事情~
                          所以，在这个世界我和水手的感情一定会一直延续下去的吧。
                        </div>
                      </div>
                    </div>
                  </a>
                </a-card>
              </a-timeline-item>
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV1dt4y1B71h"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="require('@/assets/image/视频封面/相思.jpg')"
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          “最不屑一顾是相思” 少女绝美翻唱《相思》【原创pv付】
                        </div>
                        <div class="desc">
                          “最肯忘却古人诗，最不屑一顾是相思。”
                          小时候看电视听到这首歌的时候，还不懂的什么叫做相思，但觉得这首歌很好听，在看字典的时候明白了不屑一顾的意思之后，我跑去问长辈“相思是什么意思？为什么会不屑一顾？”
                          长辈回答说：“等你长大了，就会慢慢懂的。”
                          后来年龄上去一些，出国演出的时候，我突然懂得了“思乡”的滋味，再外国越久，我就越想要赶紧回到祖国，回到家中，回到父母的怀抱，这可能是我人生最初的“相思”——关于故乡的相思。
                          就像曲子里说的“最肯忘却古人诗，最不屑一顾是相思”。
                          我们逐渐长大，逐渐知道相思的意思，与此同时也不要忘记多去了解以前的历史与文学作品，这永远是我们的立足之本，是我们的根。
                          也希望大家可以喜欢我的翻唱！ staff：
                          翻唱：将月（尤利娅） 混音：漆柚 视频：三星堆
                          绘图：姜钟居士
                        </div>
                      </div>
                    </div>
                  </a>
                </a-card>
              </a-timeline-item>
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV18o4y197rb"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="require('@/assets/image/视频封面/水上灯.jpg')"
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          【生日作】绝美戏腔《水上灯》
                          “台前花醉三千客，座上一无知音者”
                        </div>
                        <div class="desc">
                          首先祝鱼鱼生日快乐！！
                          这是我认识大家以来的第一个生日～
                          一路走来发生了很多事情，有欢笑也有泪水，希望我也能一直记得我的初心。
                          去年年底，我开直播的时候说，我想多做一些中国风的东西，多做一些带有我国元素的作品。
                          接下来我出了两套旗袍的新衣装，并且对应两件旗袍翻唱了《相思》与今天这首《水上灯》。
                          感谢我的staff们，柚子帮我把干音修到这么美的样子，让我可以自信写上绝美二字。还有要谢谢顾给给老师画的这张图让我想到要唱这首歌，实在太美丽啦。
                          希望大家也可以喜欢我的这个尝试，戏腔唱起来太爽啦！！！
                          接下来放上最喜欢的本家！BVqbb411g7yE
                          卡老师太牛啦！！以后还想继续翻唱卡老师的歌！
                          最后要感谢祖娅老师的和声伴奏，太酷了！ 本作staff：
                          翻唱：尤利娅（将月） 混音：漆柚 曲绘：顾给给
                          视频：三星堆 封面：白鸟Asuta
                        </div>
                      </div>
                    </div>
                  </a>
                </a-card>
              </a-timeline-item>
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV1b5411N7t6"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="require('@/assets/image/视频封面/Kiss me.jpg')"
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          【∞line初投稿】Kiss me/CAROLE & TUESDAY
                          OP【咲间妮娜×尤利娅】
                        </div>
                        <div class="desc">
                          If we could change this world.. ✦ ⋆ • ☁︎ ☾ ⋆ • ⋆ ✦ • ⋆
                          ☁︎ • ⋆ ✦ ⋆ • ☁︎ ☾ ⋆ • ⋆ ✦ • ⋆ ☁︎ • ⋆ ☾ Original CAROLE
                          & TUESDAY ☾ Vocal ∞line/海平线(咲间妮娜&尤利娅Yulia) ☾
                          Mix 漆柚 ☾ Movie 琉璃猫映像 ☾ Illust AMEYA ✦ ⋆ • ☁︎ ☾
                          ⋆ • ⋆ ✦ • ⋆ ☁︎ • ⋆ ✦ ⋆ • ☁︎ ☾ ⋆ • ⋆ ✦ • ⋆ ☁︎ • ⋆
                          感谢视听
                        </div>
                      </div>
                    </div>
                  </a>
                </a-card>
              </a-timeline-item>
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV1Xf4y147mu"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="require('@/assets/image/视频封面/吉祥话.jpg')"
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          《吉祥话》男女老少听了都说好！四位小姐姐给大家拜个晚年！
                        </div>
                        <div class="desc">
                          今年过节不收礼~收礼只收吉祥话！ 本家：BV1zp4y1W7qf
                          原唱：泠鸢yousa、鹿乃、祖娅纳惜、hanser
                          翻唱：樱井乃爱Noa、奶酪做的、尤利娅Yulia、宫园凛Rin
                          混音：好困Nemui 感谢好困老师拯救我们！！！
                          ----------------------------------------------------------
                          鱼鱼：给大家拜个晚年！吃好喝好（
                          阿凛：我被rap殴打了（x 酪酪：我rua过去了
                          No宝：哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                          ----------------------------------------------------------
                          虽然这是来的很晚的拜年，但其实这首歌刚出五分钟noa就开始到处勾搭小姐姐合唱了！
                          和大家相处的超级愉快！我超喜欢这首歌的，希望你们也能喜欢这首歌鸭！
                          喜欢的话~是不是要三连一下！！！
                        </div>
                      </div>
                    </div>
                  </a>
                </a-card>
              </a-timeline-item>
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV1ub4y197kA"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="require('@/assets/image/视频封面/渡月桥.jpg')"
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          【女声翻唱】渡月橋 ～君
                          想ふ～【原创pv付】渡月桥～思君～/仓木麻衣
                        </div>
                        <div class="desc">
                          尤利娅祝大家白色情人节快乐哦～
                          希望我们截下来都可以一直幸福，也希望我们可以一起过下一个白色情人节呀～
                          这个视频是送给大家的情人节礼物，lovelove！
                          ps：接下来可能会换源！ staff见视频！！！！
                          原版真的很喜欢了，如果几年之后我也能唱的这么好就好了！！！
                        </div>
                      </div>
                    </div>
                  </a>
                </a-card>
              </a-timeline-item>
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV1LV411H7J2"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="require('@/assets/image/视频封面/猫头鹰.jpg')"
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          【尤利娅】猫头鹰传信有客人来/フクロウが知らせる【空灵翻唱】
                        </div>
                        <div class="desc">
                          非常非常喜欢这首歌，出道前就想要翻唱，希望塞壬唱出的猫头鹰“呼呼”的声音可以给大家带来不一样的感觉～
                          原唱：KOKIA（呜呜呜呜我真的好喜欢她）
                          翻唱：（还不够棒的）尤利娅 混音：萨摩灰（我的天使）
                          绘图：Cigma（我亲爱的妈咪@Cigma-，大家快去关注）
                          视频：三星堆（好看！！） 封面：484（呜呜呜484舅舅好）
                          大家可以在晚上听，睡个好觉哦～
                        </div>
                      </div>
                    </div>
                  </a>
                </a-card>
              </a-timeline-item>
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV1Wo4y127Fc"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="
                          require('@/assets/image/视频封面/ONE LAST KISS.jpg')
                        "
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          【EVA】ONE LAST
                          KISS【尤利娅】“再见了,所有的EVANGELION”
                        </div>
                        <div class="desc">
                          大家都知道我很喜欢宇多田光老师嘛！
                          这首歌刚出来的时候我就去听了一半的版本。
                          初次听到这首歌，第一句词出来的时候我就决定一定要翻唱了，因为不论是熊光还是EVA都对我有着特殊的意义。
                          开了两次直播学，就是学不会，后来我在家里天天念，终于会了我呜呜呜呜。
                          EVA也算是我的童年了，记得小时候我喜欢明日香，朋友喜欢绫波丽，我俩因为cp，吵得不可开交，现在也到了说再见的时候啦
                          那天这首歌出来的时候，我就在我的二创群里说，“感觉自己的青春结束了”，真的会有这么一种感慨萦绕在心里……
                          很激情地讨论了老久，就等国内上映了！
                          希望大家听我的翻唱也能有不一样的感觉，因为每个人对EVA还有角色的理解一定是不一样的，所以，请好好欣赏吧～
                          最后，要谢谢我的二创组。
                          真的很感谢大家陪我用三天赶出了这个完整的翻唱！
                          我愿称之为三天的奇迹！！！
                          所有staff和参与的大家都辛苦啦！！！ 我爱你们！
                          翻唱：尤利娅
                          绘图：Cigma（谢谢妈妈连夜帮我改图，太喜欢这张了！）
                          后期：萨摩灰（真的是天使） PV
                          ：孤风船长（船长真的很会呜呜呜呜感恩） 轴
                          ：熊孩子（组内劳模小熊软糖！！轴man yyds）
                          封面：腿腿（my腿腿太会做图了！！！）
                        </div>
                      </div>
                    </div>
                  </a>
                </a-card>
              </a-timeline-item>
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV19g41137en"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="require('@/assets/image/视频封面/粒子们.jpg')"
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          【∞line】粒子们 |
                          演算美轮美奂生死爱别离【虚拟凤凰传奇】
                        </div>
                        <div class="desc">
                          "粒子们" Original:于贞
                          Vocal:∞line(尤利娅Yulia×咲间妮娜) Mix:7 Illust:徵鹘
                          Movie:四方抚子(琉璃猫映像) -
                          6/12至6/14将进行海平线(∞line)的首次组合衣装发布活动，届时请多多支持！
                          -
                          妮娜：终于过了一把rap瘾，感谢鱼鱼心甘情愿做我的hook工具鱼！努力压低声音用与平时不同的腔调唱了rap，希望大家也能感受到来自这首歌的画面感和能量！
                          尤利娅：小妮RAP太帅了！！！hin荣幸可以被邀请做hook美女！希望大家可以喜欢我们的新作品哇！！请多多支持∞line，拜托了QUQ
                          ps：谢谢小妮的文案！香蕉牛奶世界第一！大家一定要多多爱她啊呜呜。
                        </div>
                      </div>
                    </div>
                  </a>
                </a-card>
              </a-timeline-item>
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV1g54y1G7KV"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="require('@/assets/image/视频封面/时候.jpg')"
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          【原创pv付】时候-苏运莹【美艳翻唱】
                        </div>
                        <div class="desc">
                          这首是我超超超喜欢的歌曲！！
                          苏运莹老师真的太强了（泪目）
                          因为很喜欢，所以就脑子一热翻唱了……
                          希望大家可以喜欢我的演绎哇٩(˃̶͈̀௰˂̶͈́)و
                          ps：参加了国风比赛！！希望大家给我一键三连和评论啊呜呜呜呜呜
                          staff： 翻唱 尤利娅 混音 漆柚 绘图 不沉木 视频 K_Lacid
                          封面 484&K_Lacid
                        </div>
                      </div>
                    </div>
                  </a>
                </a-card>
              </a-timeline-item>
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV1G3411z7LK"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="require('@/assets/image/视频封面/桜流し.jpg')"
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          【原创pv付】桜流し【尤利娅】
                        </div>
                        <div class="desc">
                          发于2021年立秋。
                          因为这首歌的故事感（eva）还有熊光独有的嗓音与旋律爱上了它，
                          《桜流し》诉说着樱花的凋谢、人生中总要面对的失去与不要放弃去寻找的爱。
                          想要唱出这种感觉，所以做了一些唱腔方面的改变，希望听到这首歌的你也能够喜欢。
                          同时，也要谢谢剑来的倾情推荐和一路以来对我的支持与鼓励～
                          望未来的路也能够一同前行。
                          谢谢所有为这首歌付出的staff们： 原唱：宇多田光
                          翻唱：尤利娅Yulia 后期：萨摩灰 绘图：叨叨 视频：琉璃猫
                          封面：芽Nemuru
                        </div>
                      </div>
                    </div>
                  </a>
                </a-card>
              </a-timeline-item>
            </a-timeline>
          </a-tab-pane>

          <!-- 其他 -->
          <a-tab-pane key="3" class="tab-pane-wrapper">
            <span slot="tab" :style="headStyle">
              <a-icon type="reddit" />
              其他
            </span>
            <a-timeline :reverse="true">
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV18a411A7Gd"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="require('@/assets/image/视频封面/FPSの王.jpg')"
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          【APEX】FPSの王？下饭の王？该点外卖啦！！【尤利娅给您送外卖】
                        </div>
                        <div class="desc">
                          今日份鱼鱼快递已送达！请给个一键三连让鱼鱼变成金牌快递员获得鱼尾巴哦（？）
                          UP：尤利娅Yulia 剪辑：孤风船长 文本：薛定不撸猫
                          轴：薛定不撸猫 校对：熊孩子
                          谢谢所有二创man们对我深切的爱而凝聚出的这个视频！！！鞠躬！
                          应援群：561506737 吃人审核群：728468527
                        </div>
                      </div>
                    </div>
                  </a>
                </a-card>
              </a-timeline-item>
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV1qz4y1z7rG"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="require('@/assets/image/视频封面/单口相声.jpg')"
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          【熟鱼片】这个V她直接骂dd们是驴？！！！火气上来了啊！
                        </div>
                        <div class="desc">
                          是鱼鱼的搞笑台词片段～ 一段是《骂驴》选自《走着瞧》
                          一段是《虎妞》选自《骆驼祥子》
                          鱼鱼不是科班搞这个的，给dd们献丑啦！！！
                          ps：被骂得开心吗？ Staff： 封面：484 剪辑：泡泡茶壶
                          轴：薛定不撸猫 校对：熊孩子
                        </div>
                      </div>
                    </div>
                  </a>
                </a-card>
              </a-timeline-item>
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV1Ph411Q7YH"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="
                          require('@/assets/image/视频封面/性感女王在线骂人.jpg')
                        "
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          性 感 女 王 在 线 骂
                          人【又名：你爱上的单推竟是八美肉】
                        </div>
                        <div class="desc">
                          首先说明一下～
                          鱼鱼一直认为人人平等，也认为我们不应该因为性别问题而质问他人一些奇怪的话。
                          这种行为在我看来十分愚蠢，说这些话不仅仅是整活，也是为了让他知道，不论什么性别，我们都应该要尊重他人。
                          也谢谢我的二创组在看到这一段之后飞速剪辑出来了这个视频。
                          最后！鱼鱼是美少女！！！美少女！！ 感谢我的宝贝们：
                          剪辑：孤风船长 时轴：薛定不撸猫 校对：熊孩子
                          封面：宁雪 大家都辛苦啦！！！我爱你们！
                        </div>
                      </div>
                    </div>
                  </a>
                </a-card>
              </a-timeline-item>
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV19v411G7gh"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="
                          require('@/assets/image/视频封面/直播间全自动给我赚了四位数.jpg')
                        "
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          劲！母亲节那天，直播间全自动给我赚了四位数！
                        </div>
                        <div class="desc">
                          点我看直播间自动赚钱 快停下你们的80行为吧呜呜呜呜呜呜
                          Staff： 封面：484 剪辑：熊孩子 轴：炭生万物
                          我爱我的劳模们！！
                        </div>
                      </div>
                    </div>
                  </a>
                </a-card>
              </a-timeline-item>
              <a-timeline-item color="red">
                <a-icon slot="dot" type="up" style="font-size: 16px;" />
                <a-card class="card-wrapper">
                  <a
                    href="https://www.bilibili.com/video/BV1qP4y1W7Uq"
                    target="_blank"
                  >
                    <div class="content-wrapper">
                      <img
                        :src="
                          require('@/assets/image/视频封面/鱼鱼的坐牢直播.png')
                        "
                        class="video-img"
                      />
                      <div class="text-wrapper">
                        <div class="title">
                          主 播 坐 牢 回（X）舰 长 鲨 鱼 回
                        </div>
                        <div class="desc">
                          那天的景象，直到现在想起，我都只能用惨烈来形容
                          我只是一条无辜的主播 不要鲨我了 求求 救 staff表：
                          封面：宁雪（可可爱爱的雪雪！！）
                          剪辑：孤风船长（我群剪辑神！！）
                          文本：不撸猫，孤风船长（只能说耳朵已经换了第七个了）
                          时轴：卡萨（卡萨宝打了一堆轴）
                          校对：熊孩子（辛苦了呜呜呜呜）
                        </div>
                      </div>
                    </div>
                  </a>
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
      // 改变标签字体
      headStyle: {
        'font-size': '26px'
      }
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

  /* 视频投稿 */
  .video-container {
    width: 100%;
    min-height: 100vh;
    padding: 40px 0;
    background: url('../../assets/image/背景图/通用背景图-3.jpg') 50% 10%
      no-repeat fixed;
    background-size: cover;
    display: flex;
    justify-content: center;

    .video-wrapper {
      width: 80%;
      background-color: rgba(0, 0, 0, 0.08);
      border-radius: 16px;

      .tab-pane-wrapper {
        padding: 40px 120px;

        .card-wrapper {
          border-radius: 16px;
          &:hover {
            box-shadow: 0 0 2px 3px rgb(255, 115, 0); // 添加下阴影
          }
          .content-wrapper {
            display: flex;
            align-items: center;
            height: 130px;
            .video-img {
              height: 100%;
              border-radius: 4px;
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
