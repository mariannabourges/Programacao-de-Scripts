module.exports = {
    menuVwControllers,
    menuVwBrasiliaControllers,
    menuVwBrasiliaMecanicaControllers
}


function menuVwControllers(req, res) {
    res.render('vw/frm_vwMenu.ejs', {title: ' Volkswagen',
                                                titulo: 'Menu Volkswagen'                           
});
}

function menuVwBrasiliaControllers(req, res) {
    res.render('vw/frm_vwBrasiliaMenu.ejs', {title: ' Brasília',
                                                titulo: 'Menu Volkswagen Brasilia'                           
});
}

function menuVwBrasiliaMecanicaControllers(req, res) {
    res.render('vw/frm_vwBrasiliaMecanicaMenu.ejs', {title: ' Mecânica',
                                                titulo: 'Menu Mecânica de Brasilia'                           
});
}
