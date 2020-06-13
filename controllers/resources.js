const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Resource = require('../models/resource');

module.exports = {
    index,
    show,
    new: newResource,
    create,
    info
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
    req.body.practioner = req.body.practioner.replace(/\s*,\s*/g, ',');
    if (req.body.practioner) req.body.practioner = req.body.practioner.split(',');
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const resource = new Resource(req.body);
    resource.save(function(err){
        if (err) return res.redirect('/resources/new');
        console.log(resource);
        res.redirect('/resources');
    })
}

function info(req, res) {
    res.render('resources/info', { name: 'About'});
}