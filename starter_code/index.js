$(document).ready(function(){


//User enters a city name in the form

//event input city name

//and hits the submit button.

//User clicks on submit or presses enter on their keyboard

//The entire webpage refreshes

//Background image changes to the image of the corresponding city.







$('form').submit(changeBackground);

function changeBackground() {

	var cityName = $('#city-type').val();
    // The stuff I want to do when my form submits goes here
    if (cityName == 'Austin'||'ATX'){
    	event.preventDefault();
    	$('body').removeClass();
    	$('body').addClass('austin');
    	// $('#cityName').html('Austin');
    	console.log ('Austin Background');
    	console.log (cityName);

    } else if (cityName == 'Los Angeles'|| 'LA'||'LAX'){
    	event.preventDefault();
    	$('body').removeClass();
    	$('body').addClass('la');
    	// $('#cityName').html('Los Angeles');
    	console.log ('LA Background');
    	console.log (cityName);

    } else if (cityName == 'New York'||'NYC'|| 'New York City'){
    	event.preventDefault();
    	$('body').removeClass();
    	$('body').addClass('nyc');
    	// $('#cityName').html('New York');
    	console.log ('NYC Background');
		console.log (cityName);
    } else if (cityName == 'San Francisco'|| 'SF'||'Bay Area'){
    	event.preventDefault();
    	$('body').removeClass();
    	$('body').addClass('sf');
    	// $('#cityName').html('San Francisco');
    	console.log ('SF Background');
    	console.log (cityName);
    } else if (cityName == 'Sydney'||'SYD'){
    	event.preventDefault();
    	$('body').removeClass();
    	$('body').addClass('sydney');
    	// $('#cityName').html('Sydney');
    	console.log ('Sydney Background');
    	console.log (cityName);
    // } else (cityName != 'Austin' 'Los Angeles' 'New York' 'San Francisco' 'Sydney'){
    	} else {
    	event.preventDefault();
    	$('body').removeClass();
    	// $('body').css('Background');
    	console.log ('Citipix_skyline');
    	console.log (cityName);
    }
}









});