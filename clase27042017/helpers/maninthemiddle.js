module.exports = function (req, res, next) {
    console.log('Estoy en el medio y no lo paso');
    console.log(req.method);
    next();
};
