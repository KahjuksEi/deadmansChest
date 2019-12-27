$(document).ready(function(){
	$('#hasPets').on('change', function(){
		if($(this).is(':checked')){
			$('#pets-row').show();
		}
		else{
			$('#pets-row').hide();
			$('#pet').val('');
			$('#pet-feedback').empty();
		}
	});
	$('#hasPets').trigger('change');

	$('#pet').on('change', function(){
		var pet = $(this).val();
		if(pet == 'dog'){
			$('#pet-feedback').text('dogs are great!');
		}
		else if(pet == 'cat'){
			$('#pet-feedback').text('cats are fun!');
		}
		else if(pet == 'hamster'){
			$('#pet-feedback').text('hamsters are good!');
		}
		else{
			$('#pet-feedback').empty();
		}
	});
});