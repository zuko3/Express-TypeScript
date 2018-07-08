# Express-TypeScript
Using Typescript with Express BolierPlate<br/>
This Project is useful for Setting up an Express Application with Typescript.


# SettingUp TypScript Project
Use the following commands and steps to setup project
```
  mkdir express-typescript
  cd express-typescript
  npm init -y
  npm install --save typescript
```


Update the script section of generated package.json file to the following
```
{  
  "dependencies": {
   ...
  },
  "scripts": {
    "tsc": "tsc"
  }
}
```


Run the following command, which will generate a default tsconfig.json file.
```
  npm run tsc -- --init
```


As we are going to put the compiled .js files into a build directory. In order to tell that to typescript compiler  must use the outDir parameter in newly generated tsconfig.json.
```
{
  "compilerOptions": {
    /*Other properties */
    
    "outDir": "./build"
    
  }
}
```


As we use Express and ES6 syntax we need to install the es6-shim, and express and express typings.
```
npm install --save express
npm install --save @types/express @types/es6-shim
```


Add a file server.ts  with code as follows:
```
/* Server Ts file */
import express,{Request, Response} from 'express';

const app: express.Application = express();
const port: number = 3000;

app.get("/",(req:Request,res:Response)=>{
    return res.status(200).json({
        message:"Welcome to Express typescript",
    })
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
```


After writing code transpile it to javascript. In the root of the application run the following.
```
npm run tsc
```


Optionally You may tell the Typescript compiler to run everytime it detects a filesystem change.
```
  npm run tsc -- --watch
```


# Running Application
```
node build/server.js
visit http://localhost:3000/
```





