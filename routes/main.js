
/*
 * Main routes
 * Route variable is used to add a current class to nav
 */
 
app.get('/', function(req, res){
	res.render('static/index', {
		title: 'Welcome to Paul Sham\'s base project!',
		route: '/'
	})
});