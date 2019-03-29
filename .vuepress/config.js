module.exports = {
  base: "/vuepress-toolbox/",
  title: 'Vuepress Toolbox',
  themeConfig: {
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Markdown', link: '/markdown/'},
      {text: 'Tasks',
        items: [
          {text: 'Title', link: '/title/'},
          {text: 'Navbar', link: '/navbar/'},
          {text: 'Sidebar', link: '/sidebar/'},
          {text: 'Publish', link: '/publish/'}
        ]
      }
    ],
    sidebar: {
      '/markdown/': [
        ''
      ],
      '/title/': [
        ''
      ],
      '/navbar/': [
        ''
      ],
      '/sidebar/': [
        ''
      ],
      '/publish/': [
        ''
      ],
      '/': [
        '',
        'refs',
        'status'
      ]
    }
  }
}
