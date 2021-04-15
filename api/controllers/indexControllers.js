module.exports = {
    indexControllers,

}


function indexControllers(req, res) {
    res.render('index.ejs', {title: 'Projeto NodeJS-Rotas',
                            titulo: 'Menu Principal',
                            versao: 'Versao Mysql'
});

}