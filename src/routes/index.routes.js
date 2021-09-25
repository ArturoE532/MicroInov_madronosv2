const { Router } = require('express');
const router = Router();

const {renderIndex, renderNosotros, renderDatos, renderGlosario, renderInfoMadronos } = require('../controllers/index.controllers')

router.get('/', renderIndex);

router.get('/nosotros', renderNosotros);

router.get('/datos', renderDatos);

router.get('/glosario', renderGlosario);

router.get('/datos/info/:id', renderInfoMadronos);

module.exports = router;