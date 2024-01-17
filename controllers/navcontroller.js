async function getIndex(req, res) {
    res.redirect('index.html')
};

async function getLogin(req, res) {
    res.redirect('login.html')
}

async function getRandom(req, res) {
    res.redirect('random.html')
}

export default { getIndex, getLogin, getRandom }