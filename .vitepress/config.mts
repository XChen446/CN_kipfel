import { defineConfig } from 'vitepress'
//给github原生域名访问留变量
const base = "/CN_kipfel/"; 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  //base: base
  title: "VRChat 中文kipfel厅 官方网站",
  description: "暂时还没想好写什么……",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '相册', link: 'https://album.cn-kipfel.xchen.link' },
      { text: '<a href="/neighbor/friendly">友链</a>',
              items:[
                  { text: 'VRC 中文歌友会【QQ群】', link: 'https://qm.qq.com/q/wDls5whXuS' },
                  { text: '猫猫收容中心 【QQ群】', link: 'https://qm.qq.com/q/SeUu9X6Tyc' },
                  { text: 'xxx', link: '/' },
                  { text: 'xxx', link: '/' },
                  { text: 'xxx', link: '/' },
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
