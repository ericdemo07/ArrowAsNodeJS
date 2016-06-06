var express = require('express');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');
var app = express();
app.use(express.static(__dirname + '/public'));

// page 1-query controller
app.get('/arrow/searchbrand', function(req, res) {
	var brandName;
	if (req.query.productType === "Headphones") {
		brandName = [ "JBL", "Philips", "Boat" ];
	}
	res.send(brandName);
});
app.get('/arrow/searchmodel', function(req, res) {
	var brandModel;
	const brandName = req.query.brandName;
	if (brandName == "Boat") {
		brandModel = [ "500", "400", "200" ];
	}
	if (brandName == "JBL") {
		brandModel = [ "T100", "T200", "T280" ];
	}
	if (brandName == "Philips") {
		brandModel = [ "SHS390", "SHP1900", "SHE1360" ];
	}
	res.send(brandModel);
});

// page 2-productdetailupload controller
app.use(bodyParser.json());
app.use(fileUpload());
app.post('/arrow/productimage1upload', function(req, res) {
});
app.post('/arrow/productimage2upload', function(req, res) {
	console.log(req);
});
app.post('/arrow/productimage3upload', function(req, res) {
});
app.post('/arrow/productinvoiceupload', function(req, res) {
});
app.post('/arrow/productDescription', function(req, res) {
});

// load the single view file (angular will handle the page changes on the
// front-end)
app.get('*', function(req, res) {
	res.sendFile('./public/index.html', {
		root : __dirname
	});
});

// to start express server
app.listen(3000, function() {
	console.log('Arrow service started on port 3000!');
});