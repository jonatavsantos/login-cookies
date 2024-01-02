function logout(req, res) {
    res.clearCookie('token')

    res.json({ success: true, message: 'Logout successfull' })

    res.redirect('/login')
}

export default { logout }