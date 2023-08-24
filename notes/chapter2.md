# Chapter 2: Igniting Our App

Lets create our react application using npm.

```bash
npm init

Press ^C at any time to quit.
package name: (foody)
version: (1.0.0)
description: A food delivery app
entry point: (app.js)
test command: jest
git repository:
keywords: react, namaste react
author: Dinesh Rout
license: (ISC)
About to write to C:\workflow\namaste-react\foody\package.json:

{
  "name": "foody",
  "version": "1.0.0",
  "description": "A food delivery app",
  "main": "app.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [
    "react",
    "namaste",
    "react"
  ],
  "author": "Dinesh Rout",
  "license": "ISC"
}


Is this OK? (yes)
```

Let's install the most important package, Parcel.

## Parcel

Parcel is a bundler. A bundler is a tool used in web development to combine and package multiple files and dependencies into a single file or a set of files that can be efficiently loaded by a web browser. Bundlers are especially helpful for modern web development projects that often involve numerous JavaScript files, CSS files, images, and other assets.

> Difference between tilde (~) and caret (^) in package.json is that ~ is used for patch updates, ^ is used for minor updates. Format of update major-minor-patch(1.2.3)

### Start the app

```js
npx parcel index.html
```

This app is now powered by CDN links, but its not a recommemded way.

The recommemded way is by using react and react-dom package.

```bash
npm i react react-dom
```

Now we should change the script type to module as the script element with the attribute **type="module"** is a feature in modern web browsers that enables you to use JavaScript modules in your web application. JavaScript modules provide a way to organize, encapsulate, and share code between different parts of your application.

### Features of Parcel

1. HMR(Hot Module Replacement)
2. Development Build
3. Local Server
4. File Watching Algorithm(built using C++)
5. Fester builds due to Caching
6. Code Spliting
7. Image Optimizations
8. Minification
9. Compression of files
10. Consistent Hashing
11. Differential Bundling (to support older browsers)
12. Diagnostics
13. Error handling
14. Tree Shaking - remove unused codes

We can add .parcel-cache and dist folder to the .gitignore as they can be rebuild again.

### Browserlist

By setting the browserslist property in your project's configuration, you ensure that the tools you use will generate code that's compatible with the specified browsers.
