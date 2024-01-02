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
            res.send('Congratulations, user created!')
        } else {
            res.redirect('index.html')
        }
    } catch (e) {
        
    }
}

async function signUser (req, res) {
    try {
        const { email, password } = req.body

        const compare = await User.readByEmail(email)
    
        const { id, password: hash } = compare
    
        const match = await bcrypt.compare(password, hash)
    
        if(match) {
            const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                expiresIn: 3600,
            });
            res.json({ auth: true, token })
        } else {
            res.json('Oh, token not found!')
        }       
    } catch (e) {
        console.error('Error in login')        
    }
}

export default { createUser, signUser }