import prisma from '../db/connect.js'

async function create(user){
    const newuser = prisma.user.create({
        data: user
    })

    return newuser 
}

async function readByEmail(email) {
    const useremail = prisma.user.findFirst({
        where: email
    })

    return useremail
}
export default { create, readByEmail }