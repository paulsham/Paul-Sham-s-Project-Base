
/*
 * Main routes
 */
 
app.get('/', function(req, res){
	res.render('static/index', { title: 'Welcome to Paul Sham\'s base project!' })
});