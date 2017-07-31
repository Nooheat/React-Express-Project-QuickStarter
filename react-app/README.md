# React-App Quick Starter

## Technical Stacks
1. HTML
2. CSS
3. Javascript
4. React.js

## Directory structure

- react-app
    - public
        - **index.html** 
    - src : Source code directory
        - components : Directory containing components (parts) ex) Header.js
        - containers : Directory that contains the results of assembling components.  ex) Importing Header.js from Landing.js -> Header = components that make landing page
        - css : CSS file directory
        - images : Directory containing images (logos, etc.)
        - **index.js** : react-app index.js file
    - build : react build result directory. (Building the react-app through `` npm run build`` adds the contents to this directory) / No need to touch this directory
        - **asset-manifest.json**
        - **index.html**
        - **service-worker.js**
        - static : After the build, the minified files are stored here.
    - **package.json** : You need to ```npm install```before build react-app, as it has node_modules registered in the .gitignore file, not in git.
    - ~~**node_modules**~~ : The directory containing the packages that were installed via npm, it does not upload to git because of .gitignore file

