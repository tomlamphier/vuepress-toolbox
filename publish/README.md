# Publishing to github Pages

When you first start working on a documentation site, you create a project
on your PC and use the *vuepress dev* command to serve it locally.  When you 
are ready to publish, it's time to prepare the project for hosting on github pages.  Publishing involves building your project as HTML, uploading the result to a docs folder, and telling github that you want to serve a static site from docs.  You also want to keep your markdown in the same repo so that you can maintain the site over time.

## Creating a Repo on github
Use the new [+] button to create a public repo, give it a name, add the README doc as usual.  Copy the repo address off the clone box.  

On your PC, go ahead and clone the repo locally:
```
git clone <your https URL here>
```

## Populate Local Project with Markdown
Copy in your markdown files (assuming they are in a different project folder).  Also copy the .vuepress dir with its config.js.  Change the base field in config.js to be "/your repo name/".  

You can check the site so far with *vuepress dev*.  This is a good way to catch errors that may have crept in.

## Build Locally
Create a dir called docs under your project.  This will hold the generated static files (ie HTML).  
```
vuepress build -d docs
```
## Upload to Github Pages
```
git add -A
git commit -m "initial upload"
git push origin master
```
Go to github online, find the project and verify that it has been populated.  Under Settings, turn on github pages, and point it to the docs folder.
Your site will now be available under:

```
https://tomlamphier.github.io/<your repo name>
```

