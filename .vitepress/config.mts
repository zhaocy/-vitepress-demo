import { defineConfig } from 'vitepress'
import nav from './nav.mts'
import sidebar from './sidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  srcDir: "src",
  head:[
      ['link', { rel: 'icon', href: '/icon.svg' }],
  ],
  markdown:{
    lineNumbers: true,
    container:{
      tipLabel:'提示',
      warningLabel:'警告',
      dangerLabel:'错误',
      infoLabel:'信息',
      detailsLabel:'详情'
    }
  },
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local',
      options:{
        translations:{
          button: {
            buttonText:"搜索文档",
            buttonAriaLabel:"搜索文档"
          },
          modal:{
            noResultsText:"没有找到相关内容",
            resetButtonTitle:"清空搜索",
            footer:{
              selectText:"选择",
              navigateText:"切换",
            }
          }
        }
      }
    },
    lastUpdated:{
      text: '最后更新时间',
      formatOptions:{
        dateStyle:'short',
        timeStyle:'short'
      }
    },
    nav: nav,
    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      {
        icon:{
          svg:'<svg t="1750421007295" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3959" width="200" height="200"><path d="M750.35136 541.056h-149.52448v214.46656h115.52256c35.456 0 34.00192-41.12384 34.00192-41.12384v-173.34272z" fill="#2482FD" p-id="3960"></path><path d="M849.92 51.2H174.08c-67.8656 0-122.88 55.0144-122.88 122.88v675.84c0 67.8656 55.0144 122.88 122.88 122.88h675.84c67.8656 0 122.88-55.0144 122.88-122.88V174.08c0-67.8656-55.0144-122.88-122.88-122.88zM491.2128 819.2c-97.59744 0-141.59872-73.25184-141.59872-73.25184-51.85024 80.44032-141.5936 73.07264-141.5936 73.07264v-63.50336c108.72832 0 108.77952-107.22816 108.77952-107.22816V317.4656h65.62304v330.82368c0 102.90688 108.78464 107.22816 108.78464 107.22816V819.2z m0-608.58368v447.73376H425.58976V273.38752h-111.1552c-41.52832 0-40.7808 33.13664-40.7808 33.13664v351.81568H208.0256V306.52928c0-98.08384 106.40384-96.64 106.40384-96.64H491.2128v0.72704z m324.7616 503.77728c0 103.91552-99.62496 104.63232-99.62496 104.63232H535.20384V477.55776h60.5184V204.8h65.62304v67.85536h154.53184v67.7376h-154.53184v137.15968h154.62912v236.84096z" fill="#2482FD" p-id="3961"></path></svg>'
        },
        link: 'https://tieba.baidu.com/'
      }
    ],
    footer:{
      copyright:"Copyright@2025 YourCompany"
    },
    docFooter:{
      prev:'上一页',
      next:'下一页'
    },
    siteTitle:false, //禁用站点标题
    sidebarMenuLabel: '菜单',
    returnToTopLabel:'返回顶部',
    lightModeSwitchTitle:'切换到日间模式',
    darkModeSwitchTitle:'切换到夜间模式',
    outline:{ label:'目录', level:[2,3] },
  }
})
