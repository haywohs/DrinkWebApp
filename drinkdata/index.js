import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'


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