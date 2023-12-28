import prisma from '../db/connect.js'

async function create(user){
    const newuser = prisma.user.create({
        data:
        user,
    })

    return newuser 
}

export default { create }