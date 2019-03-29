# Sidebars
A sidebar is a table of contents on one side of the screen.  Thr toc points to heading entries in the default README page, plus (optionally) headings from other pages in the local directory.

There are more than one ways to get sidebars.  The most versatile, I think, is to define the sidebar explicitly within the themeConfig block in config.js.  Here is an example:

```
themeConfig: {
  - - -  other config stmts - - -
  sidebar: {
    '/foo/': [
      '',       /* points to default in foo */
      'one',    /* /one.md */
      'two'     /* /two.md */
    ],
    '/': [
      '',       /* home */
      'contact',
      'about'
    ]
} 
