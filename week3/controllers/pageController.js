exports.getIndexPage = (req, res) => {
    res.render('about', {
        page_name: 'about'
    });
}

exports.getAboutPage = (req, res) => {
    res.render('about', {
        page_name: 'about'
    });
}

exports.getRegisterPage = (req, res) => {
    res.render('register', {
        page_name: 'register'
    });
}

exports.getLoginPage = (req, res) => {
    res.render('login', {
        page_name: 'login'
    });
}