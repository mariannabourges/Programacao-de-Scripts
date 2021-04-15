const controllerHyundai = require('../controllers/hyundaiControllers.js');

app.get('/hyundai/hyundaiMenu', controllerHyundai.menuHyundaiControllers);