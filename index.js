
/**
 * Module dependencies.
 */

var express = require('express')

global.app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', { layout: false });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// 404 page rendering
// When I tried to set 404 in routes folder, it was causing problems for directly accessing files, like robots.txt - PS
app.use(function(req, res){
	res.render('static/404', {title: "404 - Page Not Found", status: 404, url: req.url });
});

// Routes
require('./routes')({ app: app });

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
