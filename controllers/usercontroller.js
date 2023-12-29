import User from "../models/User.js";

async function createUser(req, res) {

    try {
        const data = req.body

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