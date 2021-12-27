import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dot from 'dotenv';

dot.config({
    path: "./config/.env"
})

class Server {
    public app: express.Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public config() : void {
        this.app.set("port", process.env.PORT || 3000)
        this.app.use(cors({ origin: true }));
        this.app.use(morgan("dev"));
        this.app.use(cookieParser());
        this.app.use(express.json())
    }

    public routes() : void {
        
    }

    public run() : void {
        this.app.listen(
            this.app.get("port"), 
            () =>
                console.log(`Server typescript run in port ${this.app.get("port")}`)
        )
    }
}

// * Correr server
const server = new Server();
server.run();
