import express from 'express';
import mongoose from 'mongoose';
import http from 'node:http';
import { routes } from './src/routes/index.js';
import boom from '@hapi/boom';

//connect to DB
mongoose.set('strictQuery', false);
const mongoDB = 'mongodb://localhost:27017/game-store';

async function main() {
    await mongoose.connect(mongoDB);
}

main().catch((err) => console.error(boom.boomify(err)));

//initialization app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes.forEach((route) => {
    import(`./src/routes/${route}.js`)
        .then((module) => {
            app.use(`/api/${route}`, module.default);
        })
        .catch((error) => {
            console.error(`Error while importing a route "${route}": ${error}`);
        });
});

//announce our routes
const PORT = 3000;

http.createServer({}, app).listen(PORT);
console.log(`Server is running on PORT: ${PORT}`);
