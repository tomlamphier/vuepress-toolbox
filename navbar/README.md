# Creating a Navbar
A site normally has a navbar that has one entry for each important section of your documentation.  You use the themeConfig field in config.js to create a navbar.

Here is a simple one:
```
module.exports = {
  title: "My Documentation",
    themeConfig: {
      nav: [
        {text: 'Home', link: '/'},
        {text: 'Guide', link '/guide/'},
        {text: 'External', link: 'https://google.com'}
      ]
    }
}
```
Note: The second navbar entry points to the default markdown document in subdirectory *guide*, which is README.md.

A navbar entry can have a dropdown list instead of a single target. The following snippet would go in place of the text + link piece:

```
{text: 'Languages',
  items: [
    {text: 'Chinese', link: '/language/chinese'},
    {text: 'Japanese', link: '/language/Japanese'}
  ]
}      
