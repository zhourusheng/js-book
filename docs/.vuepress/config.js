module.exports = {
  base: '/js-book/',
  dest: 'dist',
  title: '学习 JavaScript',
  description: '学习使用JavaScript',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        title: '数据类型',
        collapsable: false,
        children: [
          'type/general'
        ]
      }
    ]
  }
}
