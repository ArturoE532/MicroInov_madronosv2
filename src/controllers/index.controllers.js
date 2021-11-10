const indexCtrl = {};

const Madrono = require('../models/Madrono');

indexCtrl.renderIndex = async (req, res) => {
    const madronos = await Madrono.find({});
    res.render('index', { madronos });
};

indexCtrl.renderNosotros = (req, res) => {
    res.render ('nosotros')
};

indexCtrl.renderGlosario = (req, res) => {
    res.render ('glosario')
};

indexCtrl.renderTipoDato = (req, res) => {
    res.render ('tipodato');
};

indexCtrl.renderDatos1 = async (req, res) => {
    const madronos = await Madrono.find({especie:/^A./});
    res.render('datos1', { madronos });
};

indexCtrl.renderDatos2 = async (req, res) => {
    const madronos = await Madrono.find({especie:/^C./});
    res.render('datos2', { madronos });
};

indexCtrl.renderInfoMadronos = async (req, res) => {
    const madrono = await Madrono.findById(req.params.id);
    res.render('info', { madrono });
};

module.exports = indexCtrl;