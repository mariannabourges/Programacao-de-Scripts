module.exports = {
    menuFordControllers,
   
}


function menuFordControllers(req, res) {
    //res.send("Rota de Ford Encontrada!")

    res.render('ford/frm_fordMenu.ejs', {title: 'Ford',
                                                titulo: 'Menu de Ford'                           
    });
}