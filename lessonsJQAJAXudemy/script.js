$(document).ready(function() {

	$.ajax('cards.json', {
		dataType: 'json',
		contentType: 'application/json',
		cache: false
	})
	.done(function(response){
		var html;
		if(html !== undefined){alert(html);}

		$.each(response, function(index,element){
	      html += '<div class="card">';
		  html += '<img src="'+element.image+'" />';
		  html += '<h1>'      +element.title+'</h1>';
		  html += '<p>'       +element.text+'</p>';
		  html += '</div>';	
		});
		$('.mainblock').append(html);
	});
	
});