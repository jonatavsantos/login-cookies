import User from "../models/User.js";

async function createUser(){
    const data = req.body

    const newuser = await User.create(data)

    if(newuser) {
        console.log('Congratulations, your user created!')
    } else {
        console.log('Ow, something wrong happened')
    }
}

export default { createUser }