const controllerVw = require('../controllers/vwControllers.js');

app.get('/vw/vwMenu', controllerVw.menuVwControllers);

app.get('/vw/vwBrasiliaMenu', controllerVw.menuVwBrasiliaControllers);

app.get('/vw/vwBrasiliaMecanicaMenu', controllerVw.menuVwBrasiliaMecanicaControllers);
