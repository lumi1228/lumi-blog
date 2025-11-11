import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  base: '/blog/',  
  lang: 'zh-CN',
  title: 'lumi-blog',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      // {
      //   text: '前端基础',
      //   children: [
      //     { text: 'Introduction', link: '/guide/' },
      //   ]
      // },
      {
        text: '全栈进阶',
        children: [
          // { text: '使用Node.js', link: '/fullstack/' },
          { text: 'L1-大前端思维', link: '/fullstack/' ,
            children: [
              { text: ' 认识大前端，全栈开发初体验', link: '/fullstack/L1/01.meet-fullstack.md' },
              { text: ' 企业级标准的开发环境搭建', link: '/fullstack/' },
              { text: ' NoSQL数据库的设计与集成', link: '/fullstack/' },
              { text: ' 登陆鉴权后端通用方案', link: '/fullstack/' },
            ]
          },
          { text: 'L2-项目全流程DevOps', link: '/fullstack/' },
          { text: 'L3-PC端进阶前后端开发实战', link: '/fullstack/' },
          { text: 'L3-CMS后台管理系统开发实战', link: '/fullstack/' },
          { text: '数据库', link: '/fullstack/' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/lumi1228' },
    ],
    sidebar: {
      '/fullstack/': [
        {
          text: '认识大前端，全栈开发初体验',
          children: [
            { text: '一、前端现状', link: '/fullstack/L1/01.meet-fullstack.md' },
            { text: '二、项目需求分析', link: '/fullstack/L1/02.project-require.md' },
          ]
        }
      ]
    }
  }),
})