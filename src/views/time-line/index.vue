<!--
 * @Author      : Mr.bin
 * @Date        : 2021-08-02 20:19:45
 * @LastEditTime: 2021-08-15 15:27:03
 * @Description : 时间线
-->
<template>
  <div class="container">
    <div class="time-line-container">
      <div class="time-line-wrapper">
        <!-- 按钮 -->
        <a-button type="danger" @click="handleChangeReverse">
          {{ reverse === true ? '倒序' : '正序' }}
        </a-button>

        <!-- 时间线 -->
        <a-timeline :reverse="reverse" mode="alternate">
          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1fK411N7Qp"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;初投稿</a
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
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1HZ4y1N7N1"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;首播</a
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
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1qi4y177Zz?p=11"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;幼女皮暴露</a
                >
              </div>
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

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1V54y1C7Yv?p=2"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;5000粉纪念+鱼鱼满月</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2020-10-05</a-tag>
              <div class="content">
                <div>
                  鱼鱼提前去学了舰长们在舰长群里点的歌，所以这也是舰长点歌回~
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1V54y1C7Yv?p=11"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;新衣发布会-毛衣</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2020-10-17</a-tag>
              <div class="content">
                <div>
                  发布了粉色和棕色两套新毛衣，还有新背景、新logo、新待机界面和新背景音乐
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV11y4y1r7EX"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;斯卡布罗集市发布</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2020-10-30</a-tag>
              <div class="content">
                <div>
                  当初录斯卡布罗的原因是鱼鱼唱这首歌很好听，大家每天晚上都点这首歌当晚安曲，所以鱼鱼就说去录一下吧，没想到这么多人都喜欢，很多人都是通过这个斯卡布罗集市认识的鱼鱼，斯卡布罗集市也成了鱼鱼的成名曲，是直播生涯中的一个重要转折点！
                </div>
                <div>多亏了这首曲子，鱼鱼的粉丝数顺利的突破了一万大关~~</div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1V54y1C7Yv?p=20"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;万圣节回</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2020-10-31</a-tag>
              <div class="content">
                <div>
                  公布了万圣节限定背景和衣服的配件，很可爱，还唱了一首特地为万圣节准备的歌~
                </div>
                <div>
                  和魂喵喵 柯洛 沐小雪 椅子 花崎宁宁 咲间妮娜 云玉鸾 魔莉亚
                  BlagS联动了《根据关键词画图》和《女巫躲猫猫》两个游戏
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1Pi4y1j7sR"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;和猿马行歌老师合作发布了原创曲</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2020-11-13</a-tag>
              <div class="content">
                <div>
                  鱼鱼作为人声本家发布了【原创曲】世事艰难 我拥抱你
                </div>
                <div>
                  这也是鱼鱼第一次参与原创曲的创作
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1Li4y1L7Ji?p=7"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;百舰成就达成</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2020-11-14</a-tag>
              <div class="content">
                <div>
                  鱼鱼第一次达成百舰成就！历时70天！
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1Li4y1L7Ji?p=10"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;手抄舰长名</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2020-11-20</a-tag>
              <div class="content">
                <div>
                  因为到百舰了，所以把大家的名字都抄下来保存留作纪念！
                </div>
                <div>
                  因为工作量有点大，本来打算第二天早上起来继续写的，结果收到了老板的加班sc，这也是鱼鱼第一次收到红sc（感谢星仔）
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1Li4y1L7Ji?p=11"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;万粉百舰纪念回</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2020-11-21</a-tag>
              <div class="content">
                <div>
                  首先鱼鱼准备了五首歌，表达了自己直播过程中的五个心路历程（一路走下来，非常的不容易，且行且珍惜！）
                </div>
                <div>
                  接下来读了十位粉丝的来信，kuro准备了一个新动态背景当直播间背景，背景里还有海吵们对鱼鱼的一些寄语
                </div>
                <div>
                  还有从万粉之前就开始精心准备的企划视频！
                </div>
                <div>
                  这个视频大致包含两大部分，前半是鱼鱼的各位vup朋友们的祝福视频，后半是各位海吵们的大合唱《鱼鱼欢迎你》（改编自《北京欢迎你》），这边要特别感谢公台兄的填词！
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1Ti4y1j7yh?p=10"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;出道一百天杂谈回</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2020-12-15</a-tag>
              <div class="content">
                <div>
                  对之后的直播内容和企划进行了一些规划，首次提出了要搞女子会的企划
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1Ti4y1j7yh?p=14"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;圣诞回</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2020-12-25</a-tag>
              <div class="content">
                <div>
                  那天早上发布了圣诞音声，也是鱼鱼第一次尝试音声，效果不错，之后应该会继续搞（秃头组员们爆肝到凌晨两点，辛苦了！）
                </div>
                <div>海洋公馆开了年会，总结了一下今年的事</div>
                <div>
                  舰长们提前准备了一个MC私服，在里面搭建了一个超级漂亮的水晶球！里面还藏了不少的彩蛋
                </div>
                <div>
                  年会结束之后本来说打一局大富翁就睡觉的，谁知道一局大富翁从两点打到了五点半，直接变成熬死DD回，还好椅子老师最后及时放弃了挣扎，保全了好兄弟们的一条小命TAT
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1Nt4y1r7P8?p=8"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;新衣发布会-白旗袍</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2021-01-16</a-tag>
              <div class="content">
                <div>
                  发布了新衣装和直播间背景，直播间背景一共有4种风格，随着季节的变化而变化
                </div>
                <div>
                  白旗袍设定上是鱼鱼在民国期间上岸之后被大户人家收养之后的衣服，所以白旗袍的鱼鱼会更加少女一些，也更有大小姐的气质一些，这个时期的鱼鱼也有一个名字，叫做：“将月”
                </div>
                <div>
                  白旗袍有两种形态，一种是黑发的正常人类形态，还有一种是白发的塞壬形态，白发状态下的鱼鱼耳朵也会发生变化
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1Nt4y1r7P8?p=15"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;尤被咲到第0期</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2021-01-22</a-tag>
              <div class="content">
                <div>
                  在节目上鱼鱼和妮娜和一众DD们就节目名字和内容进行了深刻的讨论
                </div>
                <div>
                  好在节目结束之后通过动态投票决定了节目名字为《尤被咲到》
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1SA411u7tp?p=7"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;春节特别回【红旗袍发布】</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2021-02-11</a-tag>
              <div class="content">
                <div>
                  发布了红旗袍的新衣服！更换了直播间里的一些小配件（花臂太帅了！）
                </div>
                <div>
                  邀请了鱼妈和鱼爸来直播间里唱歌，结果因为鱼爸鱼妈唱的实在是太好听了，DD们已经不需要鱼鱼了，鱼鱼沦为女水友。（总结：神仙的一家）
                </div>
                <div>
                  鱼鱼的第一个总督出现了！（感谢剧毒佬！）鱼鱼刚说完新年愿望：“新的一年想要一个总督”瞬间就实现了！总督的冲击太大，以至于鱼鱼的脑袋发生了一段时间的宕机
                </div>
                <div>
                  新的一年祝鱼鱼，也祝大家：健健康康、平平安安、开开心心、万事顺利！
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV18o4y197rb?t=22"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;生日回</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2021-02-15</a-tag>
              <div class="content">
                <div>
                  发布了生日回歌曲《水上灯》，超级好听，神仙翻唱
                </div>
                <div>
                  DD们做了生日祝福的PPT，一共十四个DD写信对鱼鱼生日表达了祝福~
                </div>
                <div>
                  妮老师发布了新作品庆祝鱼鱼生日
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1ub4y197kA"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;新翻唱《渡月桥~思君~》发布</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2021-03-14</a-tag>
              <div class="content">
                <div>
                  发布了新翻唱《渡月桥~思君~》,并附上了原创pv，歌很好听，pv也很美，还请大家多多捧场~
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1wf4y14752?p=2"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;璐蜜娜首次出场</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2021-04-07</a-tag>
              <div class="content">
                <div>
                  因为电脑事故，鱼鱼的衣服全找不到了，所以被迫提前公布了女儿璐蜜娜！
                </div>
                <div>
                  璐蜜娜是鱼鱼在外面捡回来的孩子，种族是吸血鬼，性格比较调皮，经常会流露负能量，是个坏孩子（并不）
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1LV411H7J2"
                  target="_blank"
                  ><a-icon
                    type="link"
                  />&nbsp;新翻唱《猫头鹰传信有客人来》发布</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2021-04-16</a-tag>
              <div class="content">
                <div>
                  发布了新翻唱《猫头鹰传信有客人来》,翻唱的超级好听！非常适合晚上听着入睡
                </div>
                <div>
                  pv的原画由Cigma-妈咪亲自绘制，原画质量超高！这张画也作为电脑壁纸在舰长群发布了~
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1Wo4y127Fc"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;发布了新翻唱《ONE LAST KISS》</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2021-05-03</a-tag>
              <div class="content">
                <div>
                  发布了新翻唱《ONE LAST
                  KISS》，鱼鱼很喜欢EVA，所以在这首歌刚出的时候就已经决定翻唱了，鱼鱼唱的是真好听，细节拉满
                </div>
                <div>
                  这首歌的图是约稿，pv是由组内分工做的，所以视觉效果比较简单，但是感觉这样子大家能更多的关注歌曲本身，还是不错的，下次可能还会有这种类型的投稿
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV19g41137en"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;发布了新翻唱《粒子们》</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2021-06-01</a-tag>
              <div class="content">
                <div>
                  这首歌是鱼鱼和妮老师第二次以【∞line】组合的身份合唱歌曲，【∞line】组合的成员有鱼鱼和妮老师，这个组合名的寓意是大海和天空相交线，无限长，我是个粗人不太会讲话，给我自己去补
                </div>
                <div>
                  这首歌是和妮老师的第二次合唱！鱼鱼压低声线的声音好好听，好帅！妮老师的rap无敌帅啊！
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1P44y167qj?p=3"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;新衣装【偶像服】解禁</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2021-06-13</a-tag>
              <div class="content">
                <div>
                  这套偶像服是和妮老师一起配套出的，起源于妮老师说想要一起出一套偶像服（象征着两个人一起作为偶像出道！）
                </div>
                <div>
                  直播间背景变成了一个大舞台，粉丝们在下面挥应援棒，很有爱抖露的感觉，直播间的弹幕姬样式也变了
                </div>
                <div>
                  那天直播，鱼鱼唱了很多偶像歌，把背景变成了绿幕给大伙们截表情，还玩了鱼鱼版的galgame，这个实在是太有意思了，没看过的强烈建议去看看，笑死我了，我们还上传了带弹幕版本的录播，食用效果更佳哟
                </div>
              </div>
            </a-card>
          </a-timeline-item>

          <a-timeline-item>
            <svg
              slot="dot"
              class="icon"
              aria-hidden="true"
              :style="{ 'font-size': '14px' }"
            >
              <use xlink:href="#icon-Bilibili"></use>
            </svg>
            <a-card class="item-wrapper">
              <div slot="title" class="title">
                <a
                  href="https://www.bilibili.com/video/BV1AB4y1T7by?p=19"
                  target="_blank"
                  ><a-icon type="link" />&nbsp;新衣装【JK服】</a
                >
              </div>
              <a-tag slot="extra" color="#f50" class="date">2021-07-31</a-tag>
              <div class="content">
                <div>
                  小挂件超多，发型超多，超级可爱！
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
      reverse: true // 排序
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
    background: url('../../assets/image/背景图/通用背景图-2.jpg') 50% 100%
      no-repeat fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    .time-line-wrapper {
      width: 80%;

      // 展示卡片
      .item-wrapper {
        border-radius: 16px;
        text-align: left;
        box-shadow: 0 0 8px 4px rgb(100, 100, 100); // 添加下阴影
        &:hover {
          box-shadow: 0 0 4px 4px rgb(255, 115, 0); // 添加下阴影
        }
        // 标题
        .title {
          font-size: 24px;
          font-weight: 700;
        }
        // 日期
        .date {
          font-size: 16px;
        }
        // 内容
        .content {
          font-size: 16px;
          text-indent: 2em; // 首行缩进2字符
        }
      }
    }
  }
}
</style>
