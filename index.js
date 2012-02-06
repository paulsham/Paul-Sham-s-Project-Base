
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

app.use(function(req, res){
	res.render('static/404', {title: "404 - Page Not Found", status: 404, url: req.url });
});

/*
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});
*/

// Routes
require('./routes')({ app: app });

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
