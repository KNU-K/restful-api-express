const express = require('express')
const app = express()
let _config = {}


//private function
const _setApiRender = (path, render)=>{
    console.log(`[${path}] succeed rendering`)
    app.use(path,require(render))
}
const _setMiddleware = (middlewares)=>{
    for(var middleware of middlewares){
        console.log(`[${middleware.name}] succeed middleware setting`)
        app.use(middleware)
    }
}


//class
class ServerManager{
    constructor(config){
        _config = config
        _setApiRender(config.apiRender.path, config.apiRender.render)
        _setMiddleware(config.middlewares)
    }

    run(){
        app.listen(_config.port, ()=>{
            console.log(`[localhost:${_config.port}] server run!`);
        })
    }
}

module.exports = ServerManager