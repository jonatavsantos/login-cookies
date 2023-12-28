import express from 'express';
import userroute from './router/userroute.js';

const random = express();

random.use(express.json());

random.use(express.static('front'));

random.use(userroute);

random.listen(8080, () => {
    console.log("Server Online in Port 8080!")
})