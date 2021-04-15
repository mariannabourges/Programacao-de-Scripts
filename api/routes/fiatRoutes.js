const controllerFiat = require('../controllers/fiatControllers.js');

app.get('/fiat/fiatMenu', controllerFiat.menuFiatControllers);