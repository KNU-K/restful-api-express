const bodyParser = require("body-parser");
const ServerManager = require("./ServerManager")
require('dotenv').config()

function __init__(){
    const serverManger = new ServerManager({
        port:process.env.SERVER_PORT,
        middlewares:[
            bodyParser.json(),
            bodyParser.urlencoded({extended:false})
        ],
        apiRender:{
            path:'/api',
            render:'./api/router'
        }
    })
    
    serverManger.run()
}
__init__()