const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Resource = require('../models/resource');

module.exports = {
    index,
    show,
    new: newResource,
    create,
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

function create(req, res) {
    req.body.telehealth = !!req.body.telehealth;
    const resource = new Resource(req.body);
    resource.save(function(err){
        if (err) return res.redirect('/resources/new');
        console.log(resource);
        res.redirect('/resources');
    })
}

