const jsonFile = require('./jsonController');

const controlador = {
    index: (req, res) => {
        //Debido a que en app.js se colocó 'app.set('views', './views');', no se necesita colocar la ruta ni la extensión del archivo ejs
        res.render('index', {articles: jsonFile.read()});
    },
    login: (req, res) => {
        res.render('login');
    },
    productCart: (req, res) => {
<<<<<<< HEAD
        res.render('productCart');
    },
    productDetail: (req, res) => {
        res.render('productDetails');
    },
    register: (req, res) => {
        res.render('register');
=======
        res.render("productCart");
    },
    productDetail: (req, res) => {
        res.render("productDetails");
    },
    register: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/register.html'));
    },

    newProduct: (req, res) => {
        res.render("newProduct");
    },

    editProduct: (req, res) => {
        res.render("editProduct");
>>>>>>> f83f9c6944edd9293b5e3b8a6f4c9f190395f0cd
    }
}

module.exports = controlador;