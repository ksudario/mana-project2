const Info = require('../models/info');

module.exports = {
    new: newInfo
};

function newInfo(req, res) {
    res.render('infos/new');
}
