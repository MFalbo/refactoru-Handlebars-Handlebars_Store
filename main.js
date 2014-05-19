$(document).on('ready', function() {

	var productTemplate = $('#product-template');
	var templateText = productTemplate.html();
	console.log(templateText);
	var template = Handlebars.compile(templateText);
	console.log(template);
  
	console.log(productsData);
	for(var i=0; i<productsData.productsList.length; i++){
		console.log(productsData.productsList[i]);
		$('#product-container').append(template(productsData.productsList[i]));

	}
});