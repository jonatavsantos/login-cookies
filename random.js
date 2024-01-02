import express from 'express';
import morgan from 'morgan';
import userroute from './router/userroute.js';
import navroute from './router/navroute.js';

const random = express();

random.use(morgan('tiny'));

random.use(express.json());
random.use(express.urlencoded({ extended: true }));

random.use(express.static('front'));

random.use(userroute);

random.use(navroute);

random.listen(8080, () => {
    console.log("Server Online in Port 8080!")
})