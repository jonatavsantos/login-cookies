import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const saltRounds = Number(process.env.SALT_ROUNDS)

async function createUser(req, res) {

    try {
        const data = req.body

        const hash = await bcrypt.hash(data.password, saltRounds)

        data.password = hash

        const newuser = await User.create(data)

        if (newuser) {
            res.redirect('/login')
        } else {
            res.redirect('index.html')
        }
    } catch (e) {
        
    }
}

async function signUser (req, res) {
    try {
        const { email, password } = req.body

        const compareuser = await User.readByEmail(email)
    
        const { id, password: hash } = compareuser
    
        const match = await bcrypt.compare(password, hash)
    
        if(match) {
            const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                expiresIn: 3600,
            });

            res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });

            console.log({ auth: true, token });

            res.redirect('/random');

        } else {
            res.status(401).json('404, Token not found!');
        }       
    } catch (e) {
        res.status(401).json('Return the page and insert your login again');      
    }
}

export default { createUser, signUser }