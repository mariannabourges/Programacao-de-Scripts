module.exports = {
    menuFiatControllers,
   
}


function menuFiatControllers(req, res) {
    //res.send("Rota de Fiat Encontrada!")

    res.render('fiat/frm_fiatMenu.ejs', {title: 'Fiat',
                                                titulo: 'Menu de Fiat'                           
    });
}