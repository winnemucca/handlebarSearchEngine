$(function() {

var templateSource =$('#result-template').html();
console.log('template source', templateSource);
var template = Handlebars.compile(templateSource);


$('.languageSearch').on('click', function(e){
	e.preventDefault();
	console.log('you clicked a button');
	//data is what comes back from the server  on the server side i am calling 
	$('#programmingResult').empty()
	
	$.post('/search', {data:$('.text').val()}, function(data){
		console.log(data);
		$('#programmingResult').append(template(data)); 
	})
})


});