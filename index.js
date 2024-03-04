import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'

import mongodb from 'mongodb'
import mongoose from 'mongoose'
import router from './Routes/PriceAppRouter.js'


const app = express();
app.use(cors());
app.use(express.json());
// Connect to Mongoose server
const PORT = 4000;

const Mongo_URL = 'mongodb+srv://shoukathsandy:shoukath123@cluster0.elsl2.mongodb.net/'
const ConnectDB = async () => {
    try {
        await mongoose.connect(Mongo_URL);
        console.log('Connected to MongoDB');
    }
    catch (err) {
        console.log(err);
    }
};
ConnectDB();
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

