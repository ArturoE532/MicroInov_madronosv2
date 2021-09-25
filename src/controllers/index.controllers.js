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

indexCtrl.renderDatos = async (req, res) => {
    const madronos = await Madrono.find({});
    res.render('datos', { madronos });
};

indexCtrl.renderInfoMadronos = async (req, res) => {
    const madrono = await Madrono.findById(req.params.id);
    res.render('info', { madrono });
};

module.exports = indexCtrl;