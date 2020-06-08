const Resource = require('../models/resource');

module.exports = {
    index,
    show,
    new: newResource
};

function index(req, res) {
    Resource.find({}, function(err, resources) {
        res.render('resources/index', { name: 'All Resources', resources });
    });
}

function show(req, res) {
    Resource.findById(req.params.id, function(err, resource){
        res.render('resources/show', { name: 'Resource Name', resource });
    });
}

function newResource(req, res) {
    res.render('resources/new', { name: 'Add A Resource '});
}