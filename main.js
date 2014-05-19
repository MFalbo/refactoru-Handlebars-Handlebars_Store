$(document).on('ready', function() {

	var productTemplate = $('#product-template');
	var wishlistTemplate = $('#wishlist-template');
	var templateText = productTemplate.html();
	var wishlistText = wishlistTemplate.html();
	console.log(templateText);
	console.log(wishlistText);
	var template = Handlebars.compile(templateText);
	var wishTemplate = Handlebars.compile(wishlistText);
  
	for(var i=0; i<productsData.productsList.length; i++){
		console.log(productsData.productsList[i]);
		$('#product-container').append(template(productsData.productsList[i]));
	}

	$('.add-btn').click(function(){
		var title = $(this).closest($('.product')).find('h2').text();
		$('#wishlist').append(wishTemplate({title: title}));
	});

	$(document).on('click','.remove-btn',function(){
		$(this).closest($('.wish-item')).remove();
	});
});