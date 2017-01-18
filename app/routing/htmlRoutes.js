var path = require('path');

module.exports = function(app){
	app.get('/bkgrd', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/assets/images/bkgrd.jpg'));
	});

	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	app.use('/css', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/assets/css/main.css'));
	});

	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
}