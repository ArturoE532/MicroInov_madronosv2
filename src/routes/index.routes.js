const { Router } = require('express');
const router = Router();

const {renderTipoDato , renderIndex, renderNosotros, renderDatos1,  renderDatos2, renderDatosselect, renderGlosario, renderInfoMadronos } = require('../controllers/index.controllers')

router.get('/', renderIndex);

router.get('/nosotros', renderNosotros);

router.get('/tipodato', renderTipoDato);

router.get('/datos1', renderDatos1);

router.get('/datos2', renderDatos2);

router.get('/glosario', renderGlosario);

router.get('/datos/info/:id', renderInfoMadronos);

module.exports = router;