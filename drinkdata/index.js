import express from 'express'



const app = express();
const port = 3014;

app.listen(port, () => {
    console.log(`connect to ${port} succeed`);
})