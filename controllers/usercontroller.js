import User from "../models/User.js";
import bcrypt from 'bcrypt';

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

export default { createUser }