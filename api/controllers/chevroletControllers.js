module.exports = {
    menuChevroletControllers,
   
}


function menuChevroletControllers(req, res) {
    //res.send("Rota de Chevrolet Encontrada!")

    res.render('chevrolet/frm_chevroletMenu.ejs', {title: 'Chevrolet',
                                                titulo: 'Menu de Chevrolet'                           
    });
}
