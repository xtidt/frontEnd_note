
import express from 'express' 
import {json,urlencoded} from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes'
import mongoose from 'mongoose';
import errorMiddleware from './middleware/error.middleware'
import {DB_URL} from './config'

class App{
    public app:express.Application;
    constructor(){
        this.app=express();
        this.config()
        this.setMongoConfig()
        
        // 引入路由
        this.app.use(routes)

        //错误处理
        this.initializeErrorHandling();
    }

    private config(){
        //开启 cors
        this.app.use(cors())
        //支持  application/json类型 发送数据
        this.app.use(json());
        //支持 application/x-www-form-urlencoded 发送数据
        this.app.use(urlencoded({extended:false}))
        //日志中间件
        this.app.use(morgan('dev'))
    }
    
    private initializeErrorHandling(){
        this.app.use(errorMiddleware)
    }

    private setMongoConfig(){
        mongoose.Promise = global.Promise;
        mongoose.connect(DB_URL, {
            useNewUrlParser: true
          });
    }

}
export default new App().app