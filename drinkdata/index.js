import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import ProductApiRouter from './ApiRoutes/drink.js'
import UsersApiRouter from './ApiRoutes/user.js'
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

//the uploaded body will be used in JSON
app.use(express.json());
//for express, to catch the cookie
app.use(cookieParser());


//separate the different api routers 
app.use("/drinkList/drink", ProductApiRouter);
app.use("/drinkList", ListsApiRouter);
app.use("/auth", AuthApiRouter);
app.use("/user", UsersApiRouter);


// for each next to deal error
app.use((error, req, res, next) => {
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Api wrong";
    const errorDetail = error.detail;
    return res.status(errorStatus).json({
        status: errorStatus,
        message: errorMessage,
        detail: errorDetail
    })
})