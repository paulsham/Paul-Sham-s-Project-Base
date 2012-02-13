
/*
 * Main routes
 */

app.get('/', function(req, res){
	
	res.render('static/index', {
		title: 'Welcome to Paul Sham\'s base project!',
		route: req.socket.server.route  // Passes route to set current item in nav
	})
});