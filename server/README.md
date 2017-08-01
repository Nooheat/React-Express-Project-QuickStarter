# Express Quick Starter

## Technical Stacks
1. Node.js
2. Express
3. MySQL / MongoDB / Other DB (On your Choice)

## Directories

- server
    - **app.js** : Main app.js file, You can run this file to turn on the server
    - routes : Routing module directory
        - XXX : A directory with a router that routes requests for XXX, exporting index.js / multiple
            - index.js : Router handling requests for XXX
        - **index.js** : A js file that bundles and exports multiple routers imported from the above directories
    - database : Database module directory
        - **config.js** : Database configuration file, it does not upload to git because of .gitignore file
        - What you get inside depends on whether you are using MySQL or MongoDB
    - **package.json** : You need to ```npm install```before running the server, as it has node_modules registered in the .gitignore file, not in git.
    - ~~**config.js**~~ : Server configuration file, it does not upload to git because of .gitignore file
    - ~~**node_modules**~~ : The directory containing the packages that were installed via npm, it does not upload to git because of .gitignore file

## config.js Example

> **Not recommended. It is recommended to use environment variables for setting server.**  
> **Ideal for servers that do not require a lot of security.**  

```js
let config = {

    server_port: 8080,
    db_url: 'mongodb://localhost:27017/EntryDSM',
    db_schemas: [{
            "file": './models/userModel',
            "modelName": 'userModel'
        },
        {
            "file": './models/applyDataModel',
            "modelName": 'applyDataModel'
        },
        {
            "file" : './models/schoolModel',
            "modelName" : 'schoolModel'
        },
        {
            "file" : './models/QnAContentModel',
            "modelName" : 'QnAContentModel'
        }
        // file : schema path
        // modelName : schema model name
    ],
    pages: [{
        "name": "info",
        "url": "/info"
    },
    {
        "name" : "score",
        "url" : "/score"
    },
    {
        "name" : "introduce",
        "url" : "/introduce"
    }],
    server_domain: 'http://localhost'
}

config.getPageUrl = function (name) {
    for (var i = 0; i < this.pages.length; i++) {
        if (this.pages.name = name) return this.pages.name;
    }
    return null;
}

config.getRootPath = function(){
    return __dirname;
}

config.getServerDomain = function(){
  return this.server_domain + ':' + this.server_port;
}

module.exports = config;
```

