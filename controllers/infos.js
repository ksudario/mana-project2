const Resource = require('../models/resource');

module.exports = {
 info
};

function info(req, res) {
    Resource.find({}, function(err, resources) {
        res.render('resources/info', {name: 'Info'})
    });
}
