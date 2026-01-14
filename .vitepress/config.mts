import { defineConfig } from 'vitepress'
import imsize from 'markdown-it-imsize'
import { base64LinkPlugin } from './plugins/base64-link'
//给github原生域名访问留变量
const base = "/CN_kipfel/"; 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  //base: base
  title: "VRChat 中文kipfel厅 官方网站",
  description: "暂时还没想好写什么……",
  markdown: {
      config: (md) => {
            md.use(imsize)
            md.use(base64LinkPlugin)
          },
      image: {
        lazyLoading: true
      }
    },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '相册', link: 'https://album.cn-kipfel.xchen.link' },
      { text: '<a href="/neighbor/friendly">友链</a>',
              items:[
                  { text: 'VRC 中文歌友会【VRChat】', link: 'https://vrc.group/1MUFR1.6419' },
                  { text: '猫猫收容中心 【VRChat】', link: 'https://vrc.group/LYRIC.2312' },
                  { text: '中文游戏社区 【VRChat】', link: 'https://vrc.group/GAME.0421' },
                  { text: '百瑞斯塔 BARISTA 【VRChat】', link: 'https://vrc.group/BARIST.4979' },
                  { text: '撫眠屋 【VRChat】', link: 'https://vrc.group/NABEYA.2781' },
              ],
          }
    ],

    sidebar: [
      {
        text: '社区的喵言喵语',
        items: [
          { text: '发言协定', link: '/utils/advocate' },
          { text: '安全协议', link: '/utils/rules' },
          { text: '常开房间', link: '/utils/regular-rooms'},
          { text: '猫猫守则', link: '/404'}
        ]
      },
      {
              text: '冲！是猫窝！',
              items: [
                { text: '如何加入聊天群', link: '/join-chatroom' }
            ]
      },
      {
        text: '猫猫们的好朋友',
        items: [
          { text: '友链导航', link: '/neighbor/friendly' }
      ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'http://discord.cn-kipfel.xchen.link' },
      { icon: 'github', link: 'https://github.com/XChen446/CN_kipfel' }
    ]
  }
})
