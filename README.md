# Vuepress Reference
Vuepress is a Vue project for generating documentation sites (aka static sites). It was created by Evan You for documenting Vue, itself.  Vuepress provides an attractive site format right out of the box (the default theme).  It has a way to do topic navigation with minimal setup time.  Navigation includes a navbar for the main topics and sidebars for the lower level topics.  

Pages are written in standard markdown.  The default page in an given directory is README.md.  So a project typically has a README at the top level, plus README's in each subdirectory.  The subdirectories correspond to the main topics in your navbar.  

Once you have created some markdown, you can run the site with:

```
vuepress dev
```

This will serve your site on port 8080.

The project top level directory contains a .vuepress folder for configuration purposes.  config.js in this folder is where you would set the site title, add a navbar, and so forth.

One of the features of Vuepress that stands out is the automatically included search box. It scans H1, H2, and H3 level headings.  
