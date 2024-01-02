async function getIndex(req, res) {
    res.redirect('index.html')
};

async function getLogin(req, res) {
    res.redirect('login.html')
}

export default { getIndex, getLogin }