var Template = require('../../models/template');

module.exports = function (server) {

  server.use(function(req, res, next){

    // We care about template metadata for template
    // locals. Stuff like page-size is set here.
    // Also global colors etc...

    Template.getMetadata(req.blog.template, function(err, metadata){

      if (err || !metadata) {

        var error = new Error('This template does not exist.');
            error.code = 'NO_TEMPLATE';

        return next(error);
      }

      req.template = {
        locals: metadata.locals,
        id: req.blog.template
      };

      return next();
    });
  });
};