const path = require('path');

const controlador = {
    index: (req, res) => {
        //Debido a que en app.js se colocó 'app.set('views', './views');', no se necesita colocar la ruta ni la extensión del archivo ejs
        res.render('index');
    },
    login: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/login.html'));
    },
    productCart: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productCart.html'));
    },
    productDetail: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productDetails.html'));
    },
    register: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/register.html'));
    }
}

module.exports = controlador;