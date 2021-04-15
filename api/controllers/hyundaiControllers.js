module.exports = {
    menuHyundaiControllers,
   
}


function menuHyundaiControllers(req, res) {
    //res.send("Rota de Hyundai Encontrada!")

    res.render('hyundai/frm_hyundaiMenu.ejs', {title: 'Hyundai',
                                                titulo: 'Menu de Hyundai'                           
    });
}