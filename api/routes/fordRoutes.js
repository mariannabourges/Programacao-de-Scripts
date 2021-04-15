const controllerFord = require('../controllers/fordControllers.js');

app.get('/ford/fordMenu', controllerFord.menuFordControllers);