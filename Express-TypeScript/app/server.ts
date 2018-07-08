/* Server Ts file */
import express,{Request, Response} from 'express';
import {HomeController} from './controllers';

const app: express.Application = express();
const port: number = 3000;

app.get("/",(req:Request,res:Response)=>{
    return res.status(200).json({
        message:"Try These Url",
        url_one:'http://localhost:3000/home',
        url_two:'http://localhost:3000/home/zuko3'
    })
})
app.use('/home', HomeController);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});