import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import ProductApiRouter from './ApiRoutes/drink.js'
import UsersApiRouter from './ApiRoutes/users.js'
import AuthApiRouter from './ApiRoutes/auth.js'
import ListsApiRouter from './ApiRoutes/drinkLists.js'


const app = express();
const port = 3014;
dotenv.config();


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('connect to mongodb succeed'); //test database connection
    } catch (error) {
        console.log('disconnect to mongodb'); //test database connection
    }
}

mongoose.connection.on('connected', () => {
    console.log('connected mongodb');
});
mongoose.connection.on('disconnected', () => {
    console.log('disconnected mongodb');
});



app.listen(port, () => {
    connect();
    console.log(`connect to ${port} succeed`);
})

//a test
app.get("/", (req, res) => {
    res.send("QQQQQ");
})

//separate the different api routers 
app.use("/drinks/product", ProductApiRouter);
app.use("/drinks", ListsApiRouter);
app.use("/auth", AuthApiRouter);
app.use("/user", UsersApiRouter);