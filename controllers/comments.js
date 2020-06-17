const Resource = require('../models/resource');

module.exports = {
 create
};

function create(req, res) {
Resource.findById(req.params.id, function(err, resource) {
    resource.comments.push(req.body);
    resource.save(function(err) {
      res.redirect(`/resources/${resource._id}`);
    });

 });

}
